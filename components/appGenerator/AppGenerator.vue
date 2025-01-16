<template>
  <section>
    <div class="grid grid-cols-1 md:grid-cols-2 items-end gap-4">
      <UiInput
        v-for="item in config"
        :key="item.key"
        :placeholder="item.placeholder"
        :label="item.label"
        :class="item.class"
        @input="(value) => inputHandler(value, item.key)"
      />
    </div>
    <UiInput
      class="mt-1"
      :label="$t('generator.result')"
      :value="result"
      readonly
    />
  </section>
</template>

<script setup lang="ts">
import type { AppGeneratorProps } from './AppGenerator.interfaces';

defineProps<AppGeneratorProps>();

const form = ref<Record<string, string>>({});

const result = computed(() => {
  // return if no url
  if (!form.value.url) {
    return '';
  }
  const params: Record<string, string> = {};
  Object.keys(form.value)
    .filter(key => !!form.value[key] && key !== 'url')
    .forEach((key) => {
      params[key] = form.value[key];
    });
  const query = Object.keys(params).length ? `?${new URLSearchParams(params)}` : '';
  return `${form.value.url}${query}`;
});

const inputHandler = (value: string, key: string): void => {
  form.value[key] = value;
};
</script>
