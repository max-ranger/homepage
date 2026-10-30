import { onBeforeUnmount, onMounted, watch, type Ref } from 'vue';

export function useReveals(rootRef: Ref<HTMLElement | null>, deps: Ref<unknown>[] = []) {
  let observer: IntersectionObserver | null = null;

  const setup = () => {
    observer?.disconnect();
    const root = rootRef.value;
    if (!root) return;
    const targets = root.querySelectorAll('[data-reveal]:not([data-revealed])');
    if (typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.setAttribute('data-revealed', ''));
      return;
    }
    // Threshold 0: any visible pixel reveals, so an element much taller than the viewport still shows.
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-revealed', '');
            observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' },
    );
    targets.forEach((el) => observer?.observe(el));
    root.setAttribute('data-reveals', '');
  };

  onMounted(setup);
  onBeforeUnmount(() => observer?.disconnect());

  for (const dep of deps) {
    watch(dep, () => setup());
  }
}
