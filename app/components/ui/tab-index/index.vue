<template>
  <div class="flex border-b border-slate-200 gap-1 overflow-x-auto pb-px">
    <button
        v-for="item in tabItems" :key="item.id"
        class="flex items-center gap-2 px-4 py-3 text-sm whitespace-nowrap transition-colors
        -mb-px cursor-pointer hover:bg-secondary font-bold"
        :class="{'text-primary border-b-2 border-primary': item.id == selectedItem}"
        @click="$emit('change-tab', item.id)"
    >
        <component v-if="item.icon" :is="item.icon" class="size-4" />
        <span v-if="item.label">{{ item.label }}</span>
        <span v-else>{{ $t(item.title) }}</span>
        <span v-if="item.value" class="text-xs bg-secondary px-2 py-0.5 rounded">{{ item.value }}</span>
    </button>
  </div>
</template>
<script setup>
defineProps({
    selectedItem: {
        type: String, 
    },
    tabItems: {
        type: Array,
        default: () => []
    }
})

defineEmits(['change-tab'])
</script>
