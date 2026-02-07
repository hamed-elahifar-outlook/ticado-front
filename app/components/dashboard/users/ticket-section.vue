<template>
  <div class="bg-white rounded-lg shadow p-6">
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-semibold">{{ $t('ticket_section.title') }}</h2>
      <div class="relative">
        <input
          type="text"
          :placeholder="$t('ticket_section.search_placeholder')"
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
          <UiTableCell class="text-right">{{ $t('ticket_section.subject') }}</UiTableCell>
          <UiTableCell class="text-right">{{ $t('ticket_section.status') }}</UiTableCell>
          <UiTableCell class="text-right">{{ $t('ticket_section.priority') }}</UiTableCell>
          <UiTableCell class="text-right">{{ $t('ticket_section.creation_date') }}</UiTableCell>
        </UiTableRow>
      </UiTableHeader>
      <UiTableBody>
        <!-- Empty State -->
        <UiTableEmpty v-if="tickets.length === 0" :colspan="4">
          {{ $t('ticket_section.no_data') }}
        </UiTableEmpty>

        <!-- Data Rows -->
        <UiTableRow v-for="ticket in filteredTickets" :key="ticket.id">
          <UiTableCell class="text-right font-medium">{{ ticket.subject }}</UiTableCell>
          <UiTableCell class="text-right">
            <UiBadge 
              :variant="
                ticket.status === 'open' ? 'info' :
                ticket.status === 'in_progress' ? 'warning' :
                ticket.status === 'resolved' ? 'success' :
                'muted'
              "
            >
              {{ $t(`ticket_section.status_${ticket.status}`) }}
            </UiBadge>
          </UiTableCell>
          <UiTableCell class="text-right">
            <UiBadge 
              :variant="
                ticket.priority === 'high' ? 'destructive' :
                ticket.priority === 'medium' ? 'warning' :
                'success'
              "
            >
              {{ $t(`ticket_section.priority_${ticket.priority}`) }}
            </UiBadge>
          </UiTableCell>
          <UiTableCell class="text-right">{{ ticket.creationDate }}</UiTableCell>
        </UiTableRow>
      </UiTableBody>
    </UiTable>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Ticket {
  id: number
  subject: string
  status: 'open' | 'in_progress' | 'resolved' | 'closed'
  priority: 'high' | 'medium' | 'low'
  creationDate: string
}

const searchQuery = ref('')

const tickets = ref<Ticket[]>([
  {
    id: 1,
    subject: 'مشکل در پرتال ورود',
    status: 'open',
    priority: 'high',
    creationDate: '1402/11/10'
  },
  {
    id: 2,
    subject: 'درخواست بازگشت وجه',
    status: 'in_progress',
    priority: 'medium',
    creationDate: '1402/11/08'
  },
  {
    id: 3,
    subject: 'تعیین رمز عبور جدید',
    status: 'resolved',
    priority: 'low',
    creationDate: '1402/11/05'
  },
  {
    id: 4,
    subject: 'مشکل در تأیید اطلاعات',
    status: 'in_progress',
    priority: 'high',
    creationDate: '1402/11/03'
  },
  {
    id: 5,
    subject: 'دریافت رسید تراکنش',
    status: 'closed',
    priority: 'low',
    creationDate: '1402/10/28'
  }
])

const filteredTickets = computed(() => {
  if (!searchQuery.value) {
    return tickets.value
  }
  return tickets.value.filter(t =>
    t.subject.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>

<style scoped>

</style>