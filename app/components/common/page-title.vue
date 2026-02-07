<template>
    <div class="flex flex-wrap items-start justify-between gap-4">
        <div>
            <h1 class="text-2xl font-bold text-slate-900">{{ title }}</h1>
            <p class="mt-1 text-slate-500">{{ description }}</p>
        </div>
        <slot />
    </div>
</template>
<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
})
</script>