<template>
    <ui-tab-index :tab-items="tabItems" :selected-item="selectedItem" />
</template>
<script setup>
import {User, Gift, Wallet, Ticket} from "lucide-vue-next"
defineProps({
    selectedItem: {
        type: String, default: 'user_information'
    }
})
const tabItems = ref([
    {title: 'dashboard.user_information', icon: User, value: null, id: 'user_information'},
    {title: 'dashboard.reward', icon: Gift, value: 0, id: 'reward'},
    {title: 'dashboard.financial_transaction', icon: Wallet, value: 0, id: 'financial_transaction'},
    {title: 'dashboard.tickets', icon: Ticket, value: 0, id: 'tickets'},
])
</script>
