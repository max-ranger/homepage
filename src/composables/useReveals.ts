import { onBeforeUnmount, onMounted, watch, type Ref } from 'vue';

export function useReveals(rootRef: Ref<HTMLElement | null>, deps: Ref<unknown>[] = []) {
  let observer: IntersectionObserver | null = null;

  const setup = () => {
    observer?.disconnect();
    const root = rootRef.value;
    if (!root) return;
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-revealed', '');
            observer?.unobserve(entry.target);
          }
        }
      },
      { root, threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );
    root.querySelectorAll('[data-reveal]').forEach((el) => observer?.observe(el));
  };

  onMounted(setup);
  onBeforeUnmount(() => observer?.disconnect());

  for (const dep of deps) {
    watch(dep, () => setup());
  }
}
