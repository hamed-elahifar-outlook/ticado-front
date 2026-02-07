<template>
	<div class="space-y-4">
		<!-- Header Section -->
		<div class="flex items-center justify-between gap-4">
			<UiButton variant="outline" size="sm">
				<Download class="size-4 mr-2" />
				{{ $t('collabrators.export_excel') }}
			</UiButton>

			<div class="flex items-center gap-2">
				<UiButton variant="outline" size="sm">
					<SlidersHorizontal class="size-4 mr-2" />
					{{ $t('collabrators.filter') }}
				</UiButton>
				<div class="relative">
					<Search class="size-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
					<UiInput
						v-model="searchQuery"
						:placeholder="$t('collabrators.search_placeholder')"
						class="pl-9 w-64"
					/>
				</div>
			</div>
		</div>

		<!-- Table Section -->
		<UiCard>
			<UiTable>
				<UiTableHeader>
					<UiTableRow>
						<UiTableCell class="font-semibold">{{ $t('collabrators.name') }}</UiTableCell>
						<UiTableCell class="font-semibold">{{ $t('collabrators.phone') }}</UiTableCell>
						<UiTableCell class="font-semibold">{{ $t('collabrators.role') }}</UiTableCell>
						<UiTableCell class="font-semibold">{{ $t('collabrators.access_level') }}</UiTableCell>
						<UiTableCell class="font-semibold">{{ $t('collabrators.status') }}</UiTableCell>
						<UiTableCell class="font-semibold">{{ $t('collabrators.actions') }}</UiTableCell>
					</UiTableRow>
				</UiTableHeader>
				<UiTableBody>
					<UiTableRow v-for="collaborator in paginatedCollaborators" :key="collaborator.id">
						<UiTableCell>
							<div class="flex items-center gap-3">
								<div class="size-8 rounded-full bg-secondary text-primary flex items-center justify-center text-xs font-semibold">
									{{ collaborator.initials }}
								</div>
								<div class="flex flex-col">
									<span class="font-medium">{{ collaborator.name }}</span>
									<span class="text-xs text-muted-foreground">{{ collaborator.email }}</span>
								</div>
							</div>
						</UiTableCell>
						<UiTableCell>{{ collaborator.phone }}</UiTableCell>
						<UiTableCell>{{ collaborator.role || '-' }}</UiTableCell>
						<UiTableCell>{{ collaborator.accessLevel }}</UiTableCell>
						<UiTableCell>
							<UiBadge :variant="collaborator.status === 'active' ? 'success' : 'muted'">
								{{ collaborator.status === 'active' ? $t('collabrators.status_active') : $t('collabrators.status_inactive') }}
							</UiBadge>
						</UiTableCell>
						<UiTableCell>
							<UiDropdownMenu>
								<UiDropdownMenuTrigger as-child>
									<UiButton variant="ghost" size="sm">
										<EllipsisVertical class="size-4" />
									</UiButton>
								</UiDropdownMenuTrigger>
								<UiDropdownMenuContent>
									<UiDropdownMenuItem>{{ $t('common.edit') }}</UiDropdownMenuItem>
									<UiDropdownMenuItem>{{ $t('common.delete') }}</UiDropdownMenuItem>
								</UiDropdownMenuContent>
							</UiDropdownMenu>
						</UiTableCell>
					</UiTableRow>
				</UiTableBody>
			</UiTable>

			<!-- Empty State -->
			<div v-if="paginatedCollaborators.length === 0" class="p-8 text-center">
				<p class="text-muted-foreground">{{ $t('collabrators.no_data') }}</p>
			</div>
		</UiCard>

		<!-- Pagination Section -->
		<div class="flex items-center justify-between">
			<div class="text-sm text-muted-foreground">
				{{ $t('collabrators.page') }} <span class="font-semibold">{{ pageInfo.startItem }}</span>
				{{ $t('collabrators.to') }} <span class="font-semibold">{{ pageInfo.endItem }}</span>
				{{ $t('collabrators.of') }} <span class="font-semibold">{{ pageInfo.total }}</span>
				{{ $t('collabrators.collaborators') }}
			</div>
			<div class="flex gap-2">
				<UiButton
					variant="outline"
					size="sm"
					:disabled="currentPage === 1"
					@click="currentPage--"
				>
					{{ $t('collabrators.pagination_previous') }}
				</UiButton>
				<UiButton
					variant="outline"
					size="sm"
					:disabled="currentPage >= totalPages"
					@click="currentPage++"
				>
					{{ $t('collabrators.pagination_next') }}
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
import { Download, Search, SlidersHorizontal, EllipsisVertical } from 'lucide-vue-next'

interface Collaborator {
	id: number
	name: string
	email: string
	phone: string
	role: string | null
	accessLevel: string
	status: 'active' | 'inactive'
	initials: string
}

const collaborators = ref<Collaborator[]>([
	{
		id: 1,
		name: 'Zelda Valencia',
		email: 'mesovuuqz@mailinator.com',
		phone: 'Ratione eu harum neq',
		role: null,
		accessLevel: 'Read Only',
		status: 'active',
		initials: 'Z'
	}
])

const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = 10

const filteredCollaborators = computed(() => {
	const query = searchQuery.value.toLowerCase()
	return collaborators.value.filter((item) => {
		return (
			item.name.toLowerCase().includes(query) ||
			item.email.toLowerCase().includes(query) ||
			item.phone.toLowerCase().includes(query)
		)
	})
})

const totalPages = computed(() => {
	return Math.ceil(filteredCollaborators.value.length / itemsPerPage)
})

const paginatedCollaborators = computed(() => {
	const start = (currentPage.value - 1) * itemsPerPage
	const end = start + itemsPerPage
	return filteredCollaborators.value.slice(start, end)
})

const pageInfo = computed(() => {
	const total = filteredCollaborators.value.length
	const startItem = (currentPage.value - 1) * itemsPerPage + 1
	const endItem = Math.min(currentPage.value * itemsPerPage, total)
	return {
		startItem: total === 0 ? 0 : startItem,
		endItem,
		total
	}
})
</script>