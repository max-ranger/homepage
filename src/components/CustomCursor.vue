<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const props = defineProps<{
  getRoot: () => HTMLElement | null;
}>();

const dotRef = ref<HTMLDivElement | null>(null);
const ringRef = ref<HTMLDivElement | null>(null);
const visible = ref(false);
const big = ref(false);

let raf = 0;
let tx = 0;
let ty = 0;
let x = 0;
let y = 0;
let attachedRoot: HTMLElement | null = null;

const onMove = (e: MouseEvent) => {
  if (!attachedRoot) return;
  const r = attachedRoot.getBoundingClientRect();
  tx = e.clientX - r.left;
  ty = e.clientY - r.top;
  if (dotRef.value) {
    dotRef.value.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
  }
  visible.value = true;
  const target = e.target as Element | null;
  const interactive = target?.closest('a, button, [data-cursor], input, textarea');
  big.value = !!interactive;
};

const onLeave = () => {
  visible.value = false;
};

const loop = () => {
  x += (tx - x) * 0.18;
  y += (ty - y) * 0.18;
  if (ringRef.value) {
    ringRef.value.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
  }
  raf = requestAnimationFrame(loop);
};

onMounted(() => {
  attachedRoot = props.getRoot();
  if (!attachedRoot) return;
  attachedRoot.addEventListener('mousemove', onMove);
  attachedRoot.addEventListener('mouseleave', onLeave);
  raf = requestAnimationFrame(loop);
});

onBeforeUnmount(() => {
  attachedRoot?.removeEventListener('mousemove', onMove);
  attachedRoot?.removeEventListener('mouseleave', onLeave);
  cancelAnimationFrame(raf);
});
</script>

<template>
  <div ref="dotRef" class="cursor-dot" :style="{ opacity: visible ? 1 : 0 }" />
  <div
    ref="ringRef"
    class="cursor-ring"
    :style="{
      width: big ? '44px' : '26px',
      height: big ? '44px' : '26px',
      opacity: visible ? (big ? 0.9 : 0.5) : 0,
    }"
  />
</template>
