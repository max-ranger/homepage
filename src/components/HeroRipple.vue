<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const props = withDefaults(
  defineProps<{
    cellSize?: number;
  }>(),
  {
    cellSize: 36,
  },
);

const containerRef = ref<HTMLDivElement | null>(null);
let attachedParent: HTMLElement | null = null;
const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Throttle to one update per frame: the gradient + mask covers the whole hero,
// so writing CSS vars on every raw mousemove repaints a viewport-sized layer.
let frameId = 0;
let pending: { x: number; y: number } | null = null;

const flush = () => {
  frameId = 0;
  const el = containerRef.value;
  if (!el || !pending) return;
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${((pending.x - r.left) / r.width) * 100}%`);
  el.style.setProperty('--my', `${((pending.y - r.top) / r.height) * 100}%`);
  pending = null;
};

const onMove = (e: MouseEvent) => {
  pending = { x: e.clientX, y: e.clientY };
  if (!frameId) frameId = requestAnimationFrame(flush);
};

onMounted(() => {
  if (prefersReducedMotion) return;
  attachedParent = containerRef.value?.parentElement ?? null;
  attachedParent?.addEventListener('mousemove', onMove);
});

onBeforeUnmount(() => {
  attachedParent?.removeEventListener('mousemove', onMove);
  if (frameId) cancelAnimationFrame(frameId);
});

const cssVars = {
  '--cell': `${props.cellSize}px`,
};
</script>

<template>
  <div ref="containerRef" class="hero-ripple" :style="cssVars" />
</template>
