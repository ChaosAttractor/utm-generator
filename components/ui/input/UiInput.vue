<template>
  <section class="flex flex-col">
    <span v-if="label">
      {{ label }}
    </span>
    <input
      v-model="inputValue"
      class="border p-1 outline-none"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
    >
  </section>
</template>

<script setup lang="ts">
import type { UiInputEmits, UiInputProps } from './UiInput.interface';

const props = withDefaults(defineProps<UiInputProps>(), {
  value: '',
  placeholder: '',
  label: '',
  disabled: false,
  readonly: false,
});

const emit = defineEmits<UiInputEmits>();

const inputValue = computed({
  get() {
    return props.value;
  },
  set(value: string): void {
    emit('input', value);
  },
});
</script>
