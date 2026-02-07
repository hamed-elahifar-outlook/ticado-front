<template>
    <CommonPageTitle :title="$t('customers.customer_management')" :description="$t('customers.registered_customer')">
        <UiButton @click="navigateTo('/dashboard/customers/create')" class="cursor-pointer">
            <Plus />
            {{$t('customers.new_customer')}}
        </UiButton>
    </CommonPageTitle>
    <!-- <DashboardCustomersForm v-model:is-open="isOpenForm" /> -->
</template>
<script setup>
import { ref } from 'vue'
import { Plus } from 'lucide-vue-next';
const isOpenForm = ref(false);
</script>