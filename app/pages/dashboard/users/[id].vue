<template>
  <main class="p-4 lg:p-6">
    <div class="mb-6">
      <div class="flex flex-wrap items-start justify-between gap-4">
        <div>
          <NuxtLink to="/dashboard/user-managment">
            
            <UiButton variant="ghost" class="font-bold">
                <ArrowRight />
                بازگشت به لیست کاربران
            </UiButton>
            </NuxtLink>
        </div>
      </div>
    </div>
    <DashboardUsersCard />
    <DashboardUsersTabAble @changeTab="(p) => tabSelected = p" :selected-item="tabSelected" />
      <!-- <DashboardUsersUserInfo />
      <DashboardUsersGiftsSection />
      <DashboardUsersFinancialTransaction />
      <DashboardUsersTicketSection /> -->
      <Transition name="fade-slide" mode="out-in">
        <component
          :is="tabSelected === 'user_information' ? userInfo
                : tabSelected === 'reward' ? GiftsSection
                : tabSelected === 'financial_transaction' ? FinancialTransaction
                : tabSelected === 'tickets' ? TicketSection
                : null"
          :key="tabSelected"
        />
      </Transition>
  </main>
</template>
<script setup>
import {ArrowRight} from "lucide-vue-next"
import userInfo from "~/components/dashboard/users/user-info.vue";
import GiftsSection from "~/components/dashboard/users/gifts-section.vue";
import FinancialTransaction from "~/components/dashboard/users/financial-transaction.vue";
import TicketSection from "~/components/dashboard/users/ticket-section.vue";

const route = useRoute();
const { id } = route.params;
const { baseUrl, headers } = await useServerData();
const tabSelected = ref('user_information')
// const {
//   data: user,
//   error,
//   status,
// } = await useFetch("/users/" + id, {
//   baseURL: baseUrl,
//   headers,
//   server: false,
// });
const {data, error} = await useFetch('http://srv.informa.ir:3000/users/6981b5edf90ba063585d4ba2')
</script>
