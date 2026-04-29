import { computed, onBeforeUnmount, onMounted, ref, type Ref } from 'vue';

export type Command = {
  group: string;
  label: string;
  hint?: string;
  action: () => void;
};

export function useCommandPalette(commands: Ref<Command[]>) {
  const open = ref(false);
  const query = ref('');
  const idx = ref(0);

  const filtered = computed<Command[]>(() => {
    const q = query.value.trim().toLowerCase();
    if (!q) return commands.value;
    return commands.value.filter(
      (c) =>
        c.label.toLowerCase().includes(q) ||
        (c.hint ?? '').toLowerCase().includes(q) ||
        (c.group ?? '').toLowerCase().includes(q),
    );
  });

  const onKey = (e: KeyboardEvent) => {
    const isMod = e.metaKey || e.ctrlKey;
    if (isMod && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      open.value = !open.value;
      query.value = '';
      idx.value = 0;
    } else if (e.key === 'Escape') {
      open.value = false;
    }
  };

  onMounted(() => document.addEventListener('keydown', onKey));
  onBeforeUnmount(() => document.removeEventListener('keydown', onKey));

  return { open, query, idx, filtered };
}
