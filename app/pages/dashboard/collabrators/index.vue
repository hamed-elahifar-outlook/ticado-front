<template>
    <div class="p-4 lg:p-6">
        <div class="mb-6">
            <div class="mb-6">
                <DashboardCollabratorsHeader />
            </div>
            <DashboardCollabratorsTabAble :selected-tab="selectedTab" @change-tab="(p) => selectedTab = p" />
        </div>
        <DashboardCollabratorsForm />
    </div>
</template>
<script setup>
const selectedTab = ref('collaborator_list');
</script>