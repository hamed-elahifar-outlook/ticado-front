<template>
    <UiTabIndex :tab-items="tabItems" :selected-item="selectedTab"/>
</template>
<script setup>
import {UserSearch, Shield} from "lucide-vue-next"
defineProps({
    selectedTab: {
        type: String,
        default: 'collaborator_list'
    }
})
const tabItems = ref([
    {title: 'collabrators.collaborator_list', icon: UserSearch, value: null, id:'collaborator_list'},
    {title: 'collabrators.role_management', icon: Shield, value: null, id:'role_management'},
])
</script>