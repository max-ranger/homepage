<script setup lang="ts">
import { ref } from 'vue';
import { useFocusTrap } from '@/composables/useFocusTrap';
import type { Command } from '@/composables/useCommandPalette';

const props = defineProps<{
  open: boolean;
  query: string;
  idx: number;
  filtered: Command[];
}>();

const emit = defineEmits<{
  'update:open': [value: boolean];
  'update:query': [value: string];
  'update:idx': [value: number];
}>();

const paletteRef = ref<HTMLDivElement | null>(null);

useFocusTrap(paletteRef, () => props.open);

const close = () => emit('update:open', false);

const run = (cmd: Command) => {
  cmd.action();
  close();
};

const onInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  emit('update:query', value);
  emit('update:idx', 0);
};

const onKey = (e: KeyboardEvent) => {
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    emit('update:idx', Math.min(props.filtered.length - 1, props.idx + 1));
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    emit('update:idx', Math.max(0, props.idx - 1));
  } else if (e.key === 'Enter') {
    e.preventDefault();
    const cmd = props.filtered[props.idx];
    if (cmd) run(cmd);
  }
};
</script>

<template>
  <div v-if="open" class="palette-backdrop" @click="close">
    <div ref="paletteRef" class="palette" @click.stop>
      <div class="palette-input">
        <span class="palette-sigil">$</span>
        <input
          :placeholder="$t('palette.placeholder')"
          :value="query"
          @input="onInput"
          @keydown="onKey"
        />
        <span class="palette-count">{{ filtered.length }}</span>
      </div>
      <ul class="palette-list">
        <li
          v-for="(c, i) in filtered"
          :key="c.label"
          :class="{ active: i === idx }"
          @mouseenter="emit('update:idx', i)"
          @click="run(c)"
        >
          <span class="palette-grp">{{ c.group }}</span>
          <span>{{ c.label }}</span>
          <span class="palette-hint">{{ c.hint }}</span>
        </li>
        <li v-if="filtered.length === 0" class="palette-empty">{{ $t('palette.empty') }}</li>
      </ul>
    </div>
  </div>
</template>
