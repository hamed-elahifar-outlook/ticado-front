<template>
  <div class="space-y-4">
    <!-- Header Section -->
    <div class="flex items-center justify-between gap-4">
      <div class="flex-1 max-w-sm">
        <UiInput
          v-model="searchQuery"
          :placeholder="$t('rewards.search_placeholder')"
          class="w-full"
        />
      </div>
      <UiButton variant="outline" size="sm">
        <Download />
        {{ $t('rewards.export_excel') }}
      </UiButton>
    </div>

    <!-- Table Section -->
    <UiCard>
      <UiTable>
        <UiTableHeader>
          <UiTableRow>
            <UiTableCell class="font-semibold">{{ $t('rewards.title') }}</UiTableCell>
            <UiTableCell class="font-semibold">{{ $t('rewards.points') }}</UiTableCell>
            <UiTableCell class="font-semibold">{{ $t('rewards.includes') }}</UiTableCell>
            <UiTableCell class="font-semibold">{{ $t('rewards.credit') }}</UiTableCell>
            <UiTableCell class="font-semibold">{{ $t('rewards.usage') }}</UiTableCell>
            <UiTableCell class="font-semibold">{{ $t('rewards.status') }}</UiTableCell>
            <UiTableCell class="font-semibold">{{ $t('rewards.actions') }}</UiTableCell>
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          <UiTableRow v-for="reward in filteredRewards" :key="reward.id">
            <UiTableCell class="font-medium">{{ reward.title }}</UiTableCell>
            <UiTableCell>{{ reward.points }}</UiTableCell>
            <UiTableCell>
              <UiBadge variant="secondary">{{ reward.includes }}</UiBadge>
            </UiTableCell>
            <UiTableCell>{{ reward.credit }}</UiTableCell>
            <UiTableCell>{{ reward.usage }}</UiTableCell>
            <UiTableCell>
              <UiBadge :variant="reward.status === 'active' ? 'outline' : 'muted'">
                {{ reward.status === 'active' ? $t('rewards.status_active') : $t('rewards.status_inactive') }}
              </UiBadge>
            </UiTableCell>
            <UiTableCell>
              <UiDropdownMenu>
                <UiDropdownMenuTrigger as-child>
                  <UiButton variant="ghost" size="sm">
                    <EllipsisVertical />
                  </UiButton>
                </UiDropdownMenuTrigger>
                <UiDropdownMenuContent>
                  <UiDropdownMenuItem class="cursor-pointer">
                    <Edit />
                    {{ $t('common.edit') }}
                  </UiDropdownMenuItem>
                  <UiDropdownMenuItem class="cursor-pointer text-destructive">
                    <Trash2 />
                    {{ $t('common.delete') }}
                  </UiDropdownMenuItem>
                </UiDropdownMenuContent>
              </UiDropdownMenu>
            </UiTableCell>
          </UiTableRow>
        </UiTableBody>
      </UiTable>

      <!-- Empty State -->
      <div v-if="filteredRewards.length === 0" class="p-8 text-center">
        <p class="text-muted-foreground">{{ $t('rewards.no_data') }}</p>
      </div>
    </UiCard>

    <!-- Pagination Section -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="text-sm text-muted-foreground">{{ $t('common.show') }}</span>
        <UiSelect v-model="itemsPerPage">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </UiSelect>
      </div>
      <div class="text-sm text-muted-foreground">
        {{ $t('common.page') }} {{ currentPage }} {{ $t('common.of') }} {{ totalPages }}
      </div>
      <div class="flex gap-2">
        <UiButton variant="outline" size="sm" :disabled="currentPage === 1">
          <ChevronLeft />
        </UiButton>
        <UiButton variant="outline" size="sm" :disabled="currentPage === totalPages">
          <ChevronRight />
        </UiButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import UiInput from '~/components/ui/input/Input.vue'
import UiButton from '~/components/ui/button/Button.vue'
import UiCard from '~/components/ui/card/Card.vue'
import UiTable from '~/components/ui/table/Table.vue'
import UiTableHeader from '~/components/ui/table/TableHeader.vue'
import UiTableBody from '~/components/ui/table/TableBody.vue'
import UiTableRow from '~/components/ui/table/TableRow.vue'
import UiTableCell from '~/components/ui/table/TableCell.vue'
import UiBadge from '~/components/ui/badge/Badge.vue'
import UiDropdownMenu from '~/components/ui/dropdown-menu/DropdownMenu.vue'
import UiDropdownMenuTrigger from '~/components/ui/dropdown-menu/DropdownMenuTrigger.vue'
import UiDropdownMenuContent from '~/components/ui/dropdown-menu/DropdownMenuContent.vue'
import UiDropdownMenuItem from '~/components/ui/dropdown-menu/DropdownMenuItem.vue'
import UiSelect from '~/components/ui/select/Select.vue'
import { EllipsisVertical, Edit, Trash2, Download, ChevronLeft, ChevronRight } from 'lucide-vue-next'

interface Reward {
  id: number
  title: string
  points: number
  includes: string
  credit: string
  usage: string
  status: 'active' | 'inactive'
}

// Sample data
const rewards = ref<Reward[]>([
  {
    id: 1,
    title: 'Enim obcaeacit in vo',
    points: 79,
    includes: '79 اعتبار',
    credit: 'نامحدود',
    usage: '92 / 0',
    status: 'active'
  }
])

const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = ref(25)

// Computed properties
const filteredRewards = computed(() => {
  return rewards.value.filter((reward) => {
    const query = searchQuery.value.toLowerCase()
    return reward.title.toLowerCase().includes(query)
  })
})

const totalPages = computed(() => {
  return Math.ceil(filteredRewards.value.length / itemsPerPage.value)
})
</script>