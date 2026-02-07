<template>
    <div class="p-4 lg:p-6">
        <div class="mb-6">
            <div class="mb-6">
                <DashboardRewardsHeader
                :title="selectedTab == 'lotteries' ? 'rewards.new_rule' : 'rewards.new_reward'"
                :navigate="selectedTab == 'lotteries' ? '/dashboard/rewards/create-lottery' : '/dashboard/rewards/create-rewards'"
                />
            </div>
            <UiTabIndex :selected-item="selectedTab" :tab-items="tabItems" @change-tab="(p) => selectedTab = p" />
            <UiDashRewardsTable />
        </div>
        <!-- <DashboardCollabratorsForm /> -->
    </div>
</template>
<script setup>
import {Gift, Trophy} from "lucide-vue-next"
const selectedTab = ref('lotteries');
const tabItems = ref([
    {title: 'rewards.lotteries', icon: Gift, value: '0', id: 'lotteries'},
    {title: 'rewards.reward_rules', icon: Trophy, value: '1', id: 'reward_rules'}
])

</script>