<template>
  <button
    type="button"
    @click="openDialog"
    class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const dialogOpen = inject<any>('dialog-open')

const openDialog = () => {
  if (dialogOpen) {
    dialogOpen.value = true
  }
}
</script>
