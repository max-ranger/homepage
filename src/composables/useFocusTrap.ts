import { onBeforeUnmount, watch, type Ref } from 'vue';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

type TrapEntry = {
  container: HTMLElement;
  inertElements: HTMLElement[];
  lastFocused: HTMLElement | null;
};

const stack: TrapEntry[] = [];
let listenerInstalled = false;

function isVisible(el: HTMLElement): boolean {
  return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}

function findFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(isVisible);
}

function setInertSiblings(modalEl: HTMLElement): HTMLElement[] {
  const inerted: HTMLElement[] = [];
  let current: HTMLElement | null = modalEl;
  while (current && current.parentElement) {
    const parentEl: HTMLElement = current.parentElement;
    for (const sibling of Array.from(parentEl.children)) {
      if (
        sibling !== current &&
        sibling instanceof HTMLElement &&
        !sibling.hasAttribute('inert')
      ) {
        sibling.setAttribute('inert', '');
        inerted.push(sibling);
      }
    }
    if (parentEl === document.body) break;
    current = parentEl;
  }
  return inerted;
}

function topOfStack(): TrapEntry | undefined {
  return stack[stack.length - 1];
}

function onDocumentKeyDown(e: KeyboardEvent) {
  if (e.key !== 'Tab') return;
  const top = topOfStack();
  if (!top) return;

  const focusables = findFocusableElements(top.container);
  if (focusables.length === 0) {
    e.preventDefault();
    top.container.focus();
    return;
  }

  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  const active = document.activeElement as HTMLElement | null;

  // If focus is somehow outside the trap, snap back in
  if (!active || !top.container.contains(active)) {
    e.preventDefault();
    first.focus();
    return;
  }

  if (e.shiftKey && active === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && active === last) {
    e.preventDefault();
    first.focus();
  }
}

function activate(container: HTMLElement) {
  const lastFocused = document.activeElement as HTMLElement | null;
  const inertElements = setInertSiblings(container);

  stack.push({ container, inertElements, lastFocused });

  if (!listenerInstalled) {
    document.addEventListener('keydown', onDocumentKeyDown);
    listenerInstalled = true;
  }

  // Defer focus to next microtask so v-if-mounted children are in the DOM
  queueMicrotask(() => {
    if (topOfStack()?.container !== container) return;
    const focusables = findFocusableElements(container);
    if (focusables.length > 0) {
      focusables[0].focus();
    } else {
      container.tabIndex = -1;
      container.focus();
    }
  });
}

function deactivate(container: HTMLElement) {
  const idx = stack.findIndex((entry) => entry.container === container);
  if (idx === -1) return;

  const entry = stack[idx];
  for (const el of entry.inertElements) {
    el.removeAttribute('inert');
  }

  stack.splice(idx, 1);

  if (entry.lastFocused && document.contains(entry.lastFocused)) {
    entry.lastFocused.focus();
  }

  if (stack.length === 0 && listenerInstalled) {
    document.removeEventListener('keydown', onDocumentKeyDown);
    listenerInstalled = false;
  }
}

export function useFocusTrap(containerRef: Ref<HTMLElement | null>, isActive: () => boolean) {
  watch(
    isActive,
    (active) => {
      const container = containerRef.value;
      if (!container) return;
      if (active) {
        activate(container);
      } else {
        deactivate(container);
      }
    },
    { flush: 'post' },
  );

  onBeforeUnmount(() => {
    const container = containerRef.value;
    if (container) deactivate(container);
  });
}
