<script setup lang="ts">
import { ref, reactive, computed, inject, watch } from 'vue'

import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import UiSelect from '~/components/ui/select/Select.vue'
import SelectContent from '~/components/ui/select/SelectContent.vue'
import SelectItem from '~/components/ui/select/SelectItem.vue'
import SelectTrigger from '~/components/ui/select/SelectTrigger.vue'
import SelectValue from '~/components/ui/select/SelectValue.vue'

interface Props {
  isOpen?: boolean
  mode?: 'create' | 'edit'
  initialData?: {
    organizationName?: string
    responsibleName?: string
    phone?: string
    email?: string
    status?: 'active' | 'inactive'
    permissionLevel?: 'silver' | 'gold' | 'platinum'
    sections?: string[]
  }
}

interface FormData {
  organizationName: string
  responsibleName: string
  phone: string
  email: string
  status: 'active' | 'inactive'
  permissionLevel: 'silver' | 'gold' | 'platinum'
  sections: string[]
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
  mode: 'create',
})

const emit = defineEmits<{
  'update:isOpen': [value: boolean]
  close: []
  submit: [data: FormData]
}>()

const dialogOpen = ref(props.isOpen)
const loading = ref(false)
const errors = reactive<Partial<FormData>>({})

watch(() => props.isOpen, (newVal) => {
  dialogOpen.value = newVal
})

const formData = reactive<FormData>({
  organizationName: props.initialData?.organizationName || '',
  responsibleName: props.initialData?.responsibleName || '',
  phone: props.initialData?.phone || '',
  email: props.initialData?.email || '',
  status: props.initialData?.status || 'active',
  permissionLevel: props.initialData?.permissionLevel || 'silver',
  sections: props.initialData?.sections || [],
})

const { t } = useI18n()

const isEditMode = computed(() => props.mode === 'edit')
const formTitle = computed(() =>
  isEditMode.value
    ? t('customers.edit_title')
    : t('customers.create_title')
)

const sections = [
  { id: 'reports', label: t('customers.form.reports') },
  { id: 'questionnaires', label: t('customers.form.questionnaires') },
  { id: 'user_management', label: t('customers.form.user_management') },
  { id: 'settings', label: t('customers.form.settings') },
  { id: 'finance', label: t('customers.form.finance') },
]

const statusOptions = [
  { value: 'active', label: t('common.status_active') },
  { value: 'inactive', label: t('common.status_inactive') },
]

const permissionLevels = [
  { value: 'silver', label: t('customers.form.permission_silver') },
  { value: 'gold', label: t('customers.form.permission_gold') },
  { value: 'platinum', label: t('customers.form.permission_platinum') },
]

const validateForm = (): boolean => {
  errors.organizationName = ''
  errors.responsibleName = ''
  errors.phone = ''
  errors.email = ''

  let isValid = true

  if (!formData.organizationName.trim()) {
    errors.organizationName = t('customers.form.error_required')
    isValid = false
  }

  if (!formData.responsibleName.trim()) {
    errors.responsibleName = t('customers.form.error_required')
    isValid = false
  }

  if (!formData.phone.trim()) {
    errors.phone = t('customers.form.error_required')
    isValid = false
  }

  if (!formData.email.trim()) {
    errors.email = t('customers.form.error_required')
    isValid = false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.email)) {
    errors.email = t('customers.form.error_invalid_email')
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

  loading.value = true
  try {
    emit('submit', { ...formData })
    handleClose()
  } catch (error) {
    console.error('Form submission error:', error)
  } finally {
    loading.value = false
  }
}

const handleClose = () => {
  dialogOpen.value = false
  emit('update:isOpen', false)
  emit('close')
}

const toggleSection = (sectionId: string) => {
  const index = formData.sections.indexOf(sectionId)
  if (index > -1) {
    formData.sections.splice(index, 1)
  } else {
    formData.sections.push(sectionId)
  }
}

const isSectionSelected = (sectionId: string) => {
  return formData.sections.includes(sectionId)
}
</script>

<template>
    <UiCardHeader>
        <UiCardTitle>
            {{ formTitle }}
        </UiCardTitle>
    </UiCardHeader>
    <UiCardContent>
        <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Organization and Responsible Name Row -->
        <div class="grid grid-cols-2 gap-4">
            <div class="space-y-2">
            <Label :for="`org-name-${Math.random()}`">
                {{ $t('customers.form.organization_name') }}
                <span class="text-red-500">*</span>
            </Label>
            <Input
                v-model="formData.organizationName"
                type="text"
                :placeholder="$t('customers.form.organization_name')"
                class="w-full"
            />
            <span v-if="errors.organizationName" class="text-sm text-red-500">
                {{ errors.organizationName }}
            </span>
            </div>
    
            <div class="space-y-2">
            <Label :for="`responsible-name-${Math.random()}`">
                {{ $t('customers.form.responsible_name') }}
                <span class="text-red-500">*</span>
            </Label>
            <Input
                v-model="formData.responsibleName"
                type="text"
                :placeholder="$t('customers.form.responsible_name')"
                class="w-full"
            />
            <span v-if="errors.responsibleName" class="text-sm text-red-500">
                {{ errors.responsibleName }}
            </span>
            </div>
        </div>
    
        <!-- Phone and Email Row -->
        <div class="grid grid-cols-2 gap-4">
            <div class="space-y-2">
            <Label :for="`phone-${Math.random()}`">
                {{ $t('customers.form.phone') }}
                <span class="text-red-500">*</span>
            </Label>
            <Input
                v-model="formData.phone"
                type="tel"
                :placeholder="$t('customers.form.phone')"
                class="w-full"
            />
            <span v-if="errors.phone" class="text-sm text-red-500">
                {{ errors.phone }}
            </span>
            </div>
    
            <div class="space-y-2">
            <Label :for="`email-${Math.random()}`">
                {{ $t('customers.form.email') }}
                <span class="text-red-500">*</span>
            </Label>
            <Input
                v-model="formData.email"
                type="email"
                :placeholder="$t('customers.form.email')"
                class="w-full"
            />
            <span v-if="errors.email" class="text-sm text-red-500">
                {{ errors.email }}
            </span>
            </div>
        </div>
    
        <!-- Status and Permission Level Row -->
        <div class="grid grid-cols-2 gap-4">
            <div class="space-y-2">
            <Label>
                {{ $t('customers.form.status') }}
                <span class="text-red-500">*</span>
            </Label>
            <UiSelect v-model="formData.status">
                <SelectTrigger class="w-full">
                <SelectValue :placeholder="$t('customers.form.status')" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem
                    v-for="option in statusOptions"
                    :key="option.value"
                    :value="option.value"
                >
                    {{ option.label }}
                </SelectItem>
                </SelectContent>
            </UiSelect>
            </div>
    
            <div class="space-y-2">
            <Label>
                {{ $t('customers.form.permission_level') }}
            </Label>
            <UiSelect v-model="formData.permissionLevel">
                <SelectTrigger class="w-full">
                <SelectValue :placeholder="$t('customers.form.permission_level')" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem
                    v-for="option in permissionLevels"
                    :key="option.value"
                    :value="option.value"
                >
                    {{ option.label }}
                </SelectItem>
                </SelectContent>
            </UiSelect>
            </div>
        </div>
    
        <!-- Access Sections -->
        <div class="space-y-3">
            <Label>{{ $t('customers.form.access_permissions') }}</Label>
            <div class="grid grid-cols-3 gap-3">
            <div v-for="section in sections" :key="section.id" 
            class="flex items-center gap-3 border border-gray-200 rounded-lg p-1 cursor-pointer hover:bg-gray-50">
                <UiInputCheckBox 
                    :label="section.label" 
                    :id="section.id" 
                    :model-value="isSectionSelected(section.id)" 
                    @update:model-value="toggleSection(section.id)" 
                />  
            </div>
            </div>
        </div>
    
        <!-- Documents -->
        <div class="space-y-2">
            <Label>{{ $t('customers.form.documents') }}</Label>
            <Button
            type="button"
            variant="outline"
            class="w-full"
            >
            {{ $t('customers.form.upload_documents') }}
            </Button>
        </div>
    
        <!-- Footer -->
        <UiCardFooter class="w-full flex gap-x-3 px-0">
            <Button
            type="button"
            variant="outline"
            @click="$router.back()"
            >
            {{ $t('customers.form.cancel') }}
            </Button>
            <Button
            type="submit"
            :disabled="loading"
            >
            {{ isEditMode ? $t('customers.form.save') : $t('customers.form.create') }}
            </Button>
        </UiCardFooter>
        </form>
    </UiCardContent>

</template>