<template>
    <CommonPageTitle :title="$t('rewards.rewards_and_lottery')" >
        <UiButton @click="navigateTo(navigate)" class="cursor-pointer">
            <Plus />
            {{$t(title)}}
        </UiButton>
    </CommonPageTitle>
</template>
<script setup>
import { Plus } from 'lucide-vue-next';
defineProps({
    title: String,
    navigate: String
})
</script>