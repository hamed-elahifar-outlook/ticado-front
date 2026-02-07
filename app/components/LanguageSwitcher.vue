<script setup lang="ts">
import { computed, watchEffect } from "vue";

const { locale, setLocale } = useI18n();


const toggleLocale = () => {
  setLocale(locale.value === "en" ? "fa" : "en");
};
</script>

<template>
  <Button variant="ghost" size="icon" @click="toggleLocale">
    <span class="text-xs font-bold">{{ locale === "en" ? "FA" : "EN" }}</span>
  </Button>
</template>
