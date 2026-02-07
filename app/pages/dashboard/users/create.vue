<template>
	<section class="flex flex-col gap-6 min-h-screen items-center bg-muted/40 px-4 py-12">
		<Card class="w-full max-w-md rounded-xl border border-border bg-card text-card-foreground shadow-lg">
			<CardHeader class="space-y-2 p-6!">
				<CardTitle class="text-3xl font-semibold tracking-tight text-foreground">
					{{ $t('dashboard.new_user') }}
				</CardTitle>
				<CardDescription class="text-sm text-muted-foreground">
					{{ $t('common.enter_user_details') }}
				</CardDescription>
			</CardHeader>
			<CardContent class="px-8 pb-8">
				<form class="space-y-5">
					<div class="space-y-2">
						<Label for="email" class="text-sm font-medium text-foreground">
							{{ $t('common.email') }}
						</Label>
						<Input
							id="email"
							v-model="formData.email"
							type="email"
							:placeholder="$t('common.email_placeholder')"
							class="h-10 border-input bg-background ring-offset-background focus-visible:ring-ring"
							required
						/>
					</div>
					
					<div class="space-y-2">
						<Label for="phone" class="text-sm font-medium text-foreground">
							{{ $t('common.phone') }}
						</Label>
						<Input
							id="phone"
							v-model="formData.phone"
							type="tel"
							:placeholder="$t('common.phone_placeholder')"
							class="h-10 border-input bg-background ring-offset-background focus-visible:ring-ring"
							required
						/>
					</div>
					
					<div class="space-y-2">
						<Label for="password" class="text-sm font-medium text-foreground">
							{{ $t('common.password') }}
						</Label>
						<Input
							id="password"
							v-model="formData.password"
							type="password"
							placeholder="••••••••"
							class="h-10 border-input bg-background ring-offset-background focus-visible:ring-ring"
							required
						/>
					</div>
					
					<div class="space-y-2">
						<Label for="avatar" class="text-sm font-medium text-foreground">
							{{ $t('common.avatar') }}
							<span v-if="avatarFileName" class="text-xs text-muted-foreground">
								({{ avatarFileName }})
							</span>
						</Label>
						<Input
							id="avatar"
							type="file"
							accept="image/*"
							@change="handleAvatarChange"
							class="h-10 border-input bg-background file:mr-4 file:rounded-md 
                            file:border-0 file:bg-primary file:px-3 file:py-1 file:text-sm file:font-medium 
                            file:text-primary-foreground hover:file:bg-primary/90"
						/>
					</div>

					<div class="flex gap-x-2 items-center h-11">
						<Button 
						@click.prevent="createUser"
						:disabled="isLoading"
						class="bg-primary text-primary-foreground cursor-pointer shadow hover:bg-primary/90 
						focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed">
							<p v-if="!isLoading">{{ $t('common.create_account') }}</p>
							<UiLoadingSpinner v-else />
						</Button>
						<Button variant="outline" @click="$router.back()">
							{{ $t('edit_popup.cancel') }}
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	</section>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '~/components/ui/card'
import Label from '~/components/ui/label/Label.vue';
import Input from '~/components/ui/input/Input.vue';
import Button from '~/components/ui/button/Button.vue';
import { useClientFetch } from '~/composables/useClientFetch'
import { ArrowRight } from 'lucide-vue-next';

const router = useRouter()

const formData = ref({
    email: '',
    phone: '',
    password: '',
})

const avatarFile = ref(null)
const avatarFileName = ref('')
const isLoading = ref(false)

const handleAvatarChange = (event) => {
    const file = event.target.files?.[0]
    if (file) {
        avatarFile.value = file
        avatarFileName.value = file.name
    }
}

const createUser = async () => {
    if (!formData.value.email || !formData.value.phone || !formData.value.password) {
        alert('Please fill in all fields')
        return
    }

    isLoading.value = true
    try {
        const body = new FormData()
        body.append('email', formData.value.email)
        body.append('phone', formData.value.phone)
        body.append('password', formData.value.password)
        
        if (avatarFile.value) {
            body.append('avatar', avatarFile.value)
        }

        const result = await useClientFetch('/users', 'POST', body)
        
        if (result?.success) {
            console.log('User created successfully:', result)
            // Redirect to user management page
            router.push('/dashboard/user-managment')
        }
    } catch (error) {
        console.error('Error creating user:', error)
        alert('Failed to create user. Please try again.')
    } finally {
        isLoading.value = false
    }
}
</script>