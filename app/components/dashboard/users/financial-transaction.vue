<template>
  <div class="bg-white rounded-lg shadow p-6">
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-2">
        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <button class="text-sm font-medium text-gray-700 hover:text-gray-900">
          {{ $t('financial_transaction.export_excel') }}
        </button>
      </div>
      <div class="relative">
        <input
          type="text"
          :placeholder="$t('financial_transaction.search_placeholder')"
          v-model="searchQuery"
          class="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <svg class="absolute right-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>

    <!-- Table -->
    <UiTable>
      <UiTableHeader>
        <UiTableRow>
          <UiTableCell class="text-right">{{ $t('financial_transaction.type') }}</UiTableCell>
          <UiTableCell class="text-right">{{ $t('financial_transaction.amount') }}</UiTableCell>
          <UiTableCell class="text-right">{{ $t('financial_transaction.status') }}</UiTableCell>
          <UiTableCell class="text-right">{{ $t('financial_transaction.account_number') }}</UiTableCell>
          <UiTableCell class="text-right">{{ $t('financial_transaction.description') }}</UiTableCell>
          <UiTableCell class="text-right">{{ $t('financial_transaction.date') }}</UiTableCell>
        </UiTableRow>
      </UiTableHeader>
      <UiTableBody>
        <!-- Empty State -->
        <UiTableEmpty v-if="transactions.length === 0" :colspan="6">
          {{ $t('financial_transaction.no_data') }}
        </UiTableEmpty>

        <!-- Data Rows -->
        <UiTableRow v-for="transaction in filteredTransactions" :key="transaction.id">
          <UiTableCell class="text-right">
            <UiBadge :variant="transaction.type === 'deposit' ? 'success' : 'destructive'">
              {{ $t(`financial_transaction.type_${transaction.type}`) }}
            </UiBadge>
          </UiTableCell>
          <UiTableCell class="text-right font-semibold">
            <span :class="transaction.type === 'deposit' ? 'text-green-600' : 'text-red-600'">
              {{ transaction.type === 'deposit' ? '+' : '-' }}{{ transaction.amount }}
            </span>
          </UiTableCell>
          <UiTableCell class="text-right">
            <UiBadge 
              :variant="
                transaction.status === 'completed' ? 'success' :
                transaction.status === 'pending' ? 'warning' :
                'destructive'
              "
            >
              {{ $t(`financial_transaction.status_${transaction.status}`) }}
            </UiBadge>
          </UiTableCell>
          <UiTableCell class="text-right font-mono">{{ transaction.accountNumber }}</UiTableCell>
          <UiTableCell class="text-right">{{ transaction.description }}</UiTableCell>
          <UiTableCell class="text-right">{{ transaction.date }}</UiTableCell>
        </UiTableRow>
      </UiTableBody>
    </UiTable>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Transaction {
  id: number
  type: 'deposit' | 'withdrawal'
  amount: string
  status: 'completed' | 'pending' | 'failed'
  accountNumber: string
  description: string
  date: string
}

const searchQuery = ref('')
const transactions = ref<Transaction[]>([])

const filteredTransactions = computed(() => {
  if (!searchQuery.value) {
    return transactions.value
  }
  return transactions.value.filter(t =>
    t.accountNumber.includes(searchQuery.value) ||
    t.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>

<style scoped>

</style>