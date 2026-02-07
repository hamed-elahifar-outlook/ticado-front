<template>
  <div class="space-y-4">
    <!-- Header Section -->
    <div class="flex items-center justify-between gap-4">
      <div class="flex-1 max-w-sm">
        <UiInput
          v-model="searchQuery"
          :placeholder="$t('customers.search_placeholder')"
          class="w-full"
        />
      </div>
      <UiButton variant="outline" size="sm">
        <Download />
        {{ $t('customers.export_excel') }}
      </UiButton>
    </div>

    <!-- Table Section -->
    <UiCard>
      <UiTable>
        <UiTableHeader>
          <UiTableRow>
            <UiTableCell class="font-semibold">{{ $t('customers.organization_name') }}</UiTableCell>
            <UiTableCell class="font-semibold">{{ $t('customers.responsible_name') }}</UiTableCell>
            <UiTableCell class="font-semibold">{{ $t('customers.responsible_phone') }}</UiTableCell>
            <UiTableCell class="font-semibold">{{ $t('customers.email') }}</UiTableCell>
            <UiTableCell class="font-semibold">{{ $t('customers.questionnaire_completed') }}</UiTableCell>
            <UiTableCell class="font-semibold">{{ $t('customers.status') }}</UiTableCell>
            <UiTableCell class="font-semibold">{{ $t('customers.actions') }}</UiTableCell>
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          <UiTableRow v-for="customer in filteredCustomers" :key="customer.id">
            <UiTableCell class="font-medium">{{ customer.organizationName }}</UiTableCell>
            <UiTableCell>{{ customer.responsibleName }}</UiTableCell>
            <UiTableCell>{{ customer.responsiblePhone }}</UiTableCell>
            <UiTableCell>{{ customer.email }}</UiTableCell>
            <UiTableCell>
                0
            </UiTableCell>
            <UiTableCell>
              <UiBadge :variant="customer.status === 'active' ? 'outline' : 'muted'">
                {{ customer.status === 'active' ? $t('customers.status_active') : $t('customers.status_inactive') }}
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
                      <UserMinus />
                      {{ $t('common.delete') }}
                  </UiDropdownMenuItem>
                </UiDropdownMenuContent>
              </UiDropdownMenu>
            </UiTableCell>
          </UiTableRow>
        </UiTableBody>
      </UiTable>

      <!-- Empty State -->
      <div v-if="filteredCustomers.length === 0" class="p-8 text-center">
        <p class="text-muted-foreground">{{ $t('customers.no_data') }}</p>
      </div>
    </UiCard>
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
import {EllipsisVertical, UserMinus, Edit, Download} from "lucide-vue-next"

interface Customer {
  id: number
  organizationName: string
  responsibleName: string
  responsiblePhone: string
  email: string
  questionnaireCompleted: boolean
  status: 'active' | 'inactive'
}

// Sample data
const customers = ref<Customer[]>([
  {
    id: 1,
    organizationName: 'Hughes Nolan LLC',
    responsibleName: 'Autumn Mcclain',
    responsiblePhone: 'Assumenda voluptatem',
    email: 'tupefyr@mailinator.com',
    questionnaireCompleted: true,
    status: 'active'
  },
  {
    id: 2,
    organizationName: 'Tech Solutions Inc',
    responsibleName: 'John Smith',
    responsiblePhone: '+1-234-567-8900',
    email: 'john@techsolutions.com',
    questionnaireCompleted: false,
    status: 'active'
  },
  {
    id: 3,
    organizationName: 'Global Enterprises',
    responsibleName: 'Sarah Johnson',
    responsiblePhone: '+1-234-567-8901',
    email: 'sarah@global.com',
    questionnaireCompleted: true,
    status: 'inactive'
  }
])

const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = 10

// Computed properties
const filteredCustomers = computed(() => {
  return customers.value.filter((customer) => {
    const query = searchQuery.value.toLowerCase()
    return (
      customer.organizationName.toLowerCase().includes(query) ||
      customer.responsibleName.toLowerCase().includes(query) ||
      customer.email.toLowerCase().includes(query) ||
      customer.responsiblePhone.toLowerCase().includes(query)
    )
  })
})

const totalPages = computed(() => {
  return Math.ceil(filteredCustomers.value.length / itemsPerPage)
})

const pageInfo = computed(() => {
  const total = filteredCustomers.value.length
  const startItem = (currentPage.value - 1) * itemsPerPage + 1
  const endItem = Math.min(currentPage.value * itemsPerPage, total)
  return {
    startItem: total === 0 ? 0 : startItem,
    endItem,
    total
  }
})
</script>