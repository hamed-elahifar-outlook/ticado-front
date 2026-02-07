<template>
    <div>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead v-for="item in headData" :key="item">
                        {{$t('common.' + item)}}
                    </TableHead>
                    <TableHead class="text-right">
                        {{$t('common.actions')}}
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow v-for="user in users.data" :key="user._id">
                    <TableCell v-for="head in headData" :key="head" style="unicode-bidi: plaintext;" class="text-right">
                        <nuxt-link :to="head == 'name' ? `/dashboard/users/${user._id}` : ''" 
                        :class="{'hover:text-primary transition-all': head == 'name'}">
                            {{head == 'id' ? user._id : user[head]}}
                        </nuxt-link>
                    </TableCell>
                    <TableCell class="text-right">
                        <DropdownMenu>
                            <DropdownMenuTrigger as-child>
                                <Button variant="ghost" class="h-8 w-8 p-0">
                                    <EllipsisVertical class="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem @click="editUser(user._id)" class="cursor-pointer">
                                    <UserRoundPen class="mr-2 h-4 w-4" />
                                    <span>{{ $t('common.edit') }}</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem @click="deleteUser(user._id)" class="cursor-pointer text-destructive">
                                    <UserMinus class="mr-2 h-4 w-4" />
                                    <span>{{ $t('common.delete') }}</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        <DashboardUsersEditPopup :renderComponent="isOpenEditPopup" @close="isOpenEditPopup = false"/>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import Button from '~/components/ui/button/Button.vue'
import { EllipsisVertical, UserMinus, UserRoundPen } from 'lucide-vue-next'

const router = useRouter()
const isOpenEditPopup = ref(false);
const {data:users, status} = await useApi('/users')
if(status.value !== 'success') {
    console.error('Failed to fetch users')
}
const headData = ref([
    'name',
    'email',
    'phone',
    'createdAt',
    'updatedAt'
])

const editUser = (userId) => {
    // router.push(`/dashboard/users/${userId}`)
    isOpenEditPopup.value = true;
}

const deleteUser = async (userId) => {
    if (confirm('Are you sure you want to delete this user?')) {
        try {
            await useClientFetch(`/users/${userId}`, 'DELETE')
            // Refresh the page or remove user from list
            window.location.reload()
        } catch (error) {
            console.error('Failed to delete user:', error)
            alert('Failed to delete user')
        }
    }
}
</script>