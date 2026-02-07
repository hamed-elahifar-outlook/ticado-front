<template>
    <CommonPageTitle :title="$t('collabrators.collaborator_management')" :description="$t('collabrators.active_collaborator_count')">
        <UiButton @click="navigateTo('/dashboard/collabrators/create')" class="cursor-pointer">
            <Plus />
            {{$t('collabrators.new_collaborator')}}
        </UiButton>
    </CommonPageTitle>
</template>
<script setup>
import { Plus } from 'lucide-vue-next';
</script>