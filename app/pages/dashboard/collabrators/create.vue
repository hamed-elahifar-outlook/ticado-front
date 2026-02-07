<template>
    <section class="flex min-h-screen items-center justify-center bg-muted/40 px-4 py-12">
        <UiCard class="w-full max-w-2xl rounded-xl border border-border bg-card text-card-foreground shadow-lg">
            <div class="w-full">
                <!-- <h1 class="text-xl font-semibold mb-4">{{ $t('collabrators.create_title') }}</h1>
                  -->
                <UiCardHeader class="space-y-2">
                    <UiCardTitle>
                        {{ $t('collabrators.create_title') }}
                    </UiCardTitle>
                </UiCardHeader>
                <UiCardContent>
                    <form class="space-y-4" @submit.prevent="handleSubmit">
                        <div class="space-y-2">
                            <Label>
                                {{ $t('collabrators.form.full_name') }}
                                <span class="text-red-500">*</span>
                            </Label>
                            <Input
                                v-model="formData.fullName"
                                type="text"
                                :placeholder="$t('collabrators.form.full_name_placeholder')"
                            />
                        </div>
        
                            <div class="space-y-2">
                                <Label>
                                    {{ $t('collabrators.form.email') }}
                                    <span class="text-red-500">*</span>
                                </Label>
                                <Input
                                    v-model="formData.email"
                                    type="email"
                                    :placeholder="$t('collabrators.form.email_placeholder')"
                                />
                            </div>
        
                            <div class="space-y-2">
                                <Label>
                                    {{ $t('collabrators.form.phone') }}
                                    <span class="text-red-500">*</span>
                                </Label>
                                <Input
                                    v-model="formData.phone"
                                    type="tel"
                                    :placeholder="$t('collabrators.form.phone_placeholder')"
                                />
                            </div>
        
                            <div class="space-y-2">
                                <Label>{{ $t('collabrators.form.role') }}</Label>
                                <UiSelect v-model="formData.role">
                                    <SelectTrigger>
                                        <SelectValue :placeholder="$t('collabrators.form.role_placeholder')" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem v-for="role in roleOptions" :key="role.value" :value="role.value">
                                            {{ role.label }}
                                        </SelectItem>
                                    </SelectContent>
                                </UiSelect>
                            </div>
        
                            <div class="space-y-2">
                                <Label>{{ $t('collabrators.form.access_level') }}</Label>
                                <UiSelect v-model="formData.accessLevel">
                                    <SelectTrigger>
                                        <SelectValue :placeholder="$t('collabrators.form.access_level_placeholder')" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem v-for="level in accessLevels" :key="level.value" :value="level.value">
                                            {{ level.label }}
                                        </SelectItem>
                                    </SelectContent>
                                </UiSelect>
                            </div>
        
                            <div class="space-y-2">
                                <Label>{{ $t('collabrators.form.status') }}</Label>
                                <UiSelect v-model="formData.status">
                                    <SelectTrigger>
                                        <SelectValue :placeholder="$t('collabrators.form.status')" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="active">{{ $t('common.status_active') }}</SelectItem>
                                        <SelectItem value="inactive">{{ $t('common.status_inactive') }}</SelectItem>
                                    </SelectContent>
                                </UiSelect>
                            </div>
        
                        <div class="flex items-center gap-2 pt-2">
                            <Button type="button" variant="outline" @click="$router.back()">
                                {{ $t('collabrators.form.cancel') }}
                            </Button>
                            <Button type="submit">{{ $t('collabrators.form.create') }}</Button>
                        </div>
                    </form>
                </UiCardContent>
            </div>
        </UiCard>
    </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import {
    Select as UiSelect,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '~/components/ui/select'

const { t } = useI18n()

const formData = ref({
	fullName: '',
	email: '',
	phone: '',
	role: '',
	accessLevel: 'full',
	status: 'active'
})

const roleOptions = computed(() => [
	{ value: 'admin', label: t('collabrators.roles.admin') },
	{ value: 'questionnaire_designer', label: t('collabrators.roles.questionnaire_designer') },
	{ value: 'project_manager', label: t('collabrators.roles.project_manager') },
	{ value: 'financial_expert', label: t('collabrators.roles.financial_expert') },
	{ value: 'support', label: t('collabrators.roles.support') }
])

const accessLevels = computed(() => [
	{ value: 'full', label: t('collabrators.access.full') },
	{ value: 'limited', label: t('collabrators.access.limited') },
	{ value: 'read_only', label: t('collabrators.access.read_only') }
])

const handleSubmit = () => {
	// submit handler placeholder
}

const handleCancel = () => {}
</script>