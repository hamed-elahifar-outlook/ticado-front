<template>
  <UiCard class="bg-white rounded-lg shadow p-6">
    <!-- Header -->
    <div class="flex flex-col md:flex-row items-center justify-between mb-6">
      <h2 class="text-xl font-semibold">{{ $t('gifts_section.title') }}</h2>
      <div class="relative">
        <input
          type="text"
          :placeholder="$t('gifts_section.search_placeholder')"
          v-model="searchQuery"
          class="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search class="absolute right-3 rtl:right-auto rtl:left-3 top-2.5 w-5 h-5 text-gray-400" />
        <!-- <svg class="absolute right-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg> -->
      </div>
    </div>

    <!-- Table -->
    <UiTable>
      <UiTableHeader>
        <UiTableRow>
          <UiTableCell class="text-left rtl:text-right">{{ $t('gifts_section.questionnaire_title') }}</UiTableCell>
          <UiTableCell class="text-left rtl:text-right">{{ $t('gifts_section.status') }}</UiTableCell>
          <UiTableCell class="text-left rtl:text-right">{{ $t('gifts_section.time_spent') }}</UiTableCell>
          <UiTableCell class="text-left rtl:text-right">{{ $t('gifts_section.score') }}</UiTableCell>
          <UiTableCell class="text-left rtl:text-right">{{ $t('gifts_section.date') }}</UiTableCell>
        </UiTableRow>
      </UiTableHeader>
      <UiTableBody>
        <!-- Empty State -->
        <UiTableEmpty v-if="questionnaires.length === 0" :colspan="5">
          {{ $t('gifts_section.no_data') }}
        </UiTableEmpty>

        <!-- Data Rows -->
        <UiTableRow v-for="questionnaire in filteredQuestionnaires" :key="questionnaire.id">
          <UiTableCell class="text-left rtl:text-right">{{ questionnaire.title }}</UiTableCell>
          <UiTableCell class="text-left rtl:text-right">
            <UiBadge 
              :variant="
                questionnaire.status === 'completed' ? 'success' :
                questionnaire.status === 'pending' ? 'warning' :
                'muted'
              "
            >
              {{ $t(`gifts_section.status_${questionnaire.status}`) }}
            </UiBadge>
          </UiTableCell>
          <UiTableCell class="text-left rtl:text-right">{{ questionnaire.timeSpent }}</UiTableCell>
          <UiTableCell class="text-left rtl:text-right font-semibold">{{ questionnaire.score }}</UiTableCell>
          <UiTableCell class="text-left rtl:text-right">{{ questionnaire.date }}</UiTableCell>
        </UiTableRow>
      </UiTableBody>
    </UiTable>
  </UiCard>
</template>

<script setup lang="ts">
import { Search } from 'lucide-vue-next'
import { ref, computed } from 'vue'

interface Questionnaire {
  id: number
  title: string
  status: 'completed' | 'pending' | 'in_progress'
  timeSpent: string
  score: string
  date: string
}

const searchQuery = ref('')
const questionnaires = ref<Questionnaire[]>([])

const filteredQuestionnaires = computed(() => {
  if (!searchQuery.value) {
    return questionnaires.value
  }
  return questionnaires.value.filter(q =>
    q.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>

<style scoped>

</style>