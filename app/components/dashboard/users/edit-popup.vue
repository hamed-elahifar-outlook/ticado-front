<template>
  <Teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div class="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto hide-scrollbar">
        <!-- Header -->
        <div class="flex items-center justify-between p-6 border-b">
          <h2 class="text-2xl font-bold">{{ $t('edit_popup.title') }}</h2>
          <button 
            @click="$emit('close')"
            class="text-gray-500 hover:text-gray-700 text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <!-- Content -->
        <form @submit.prevent="handleSubmit" class="p-6 space-y-6">
          <!-- Full Name & Phone -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <UiLabel>{{ $t('user_info.birth_date') }} *</UiLabel>
              <UiInput 
                v-model="formData.birthDate"
                type="date"
                class="mt-2"
              />
            </div>
            <div>
              <UiLabel>{{ $t('common.phone') }} *</UiLabel>
              <UiInput 
                v-model="formData.phone"
                type="tel"
                class="mt-2"
              />
            </div>
          </div>

          <!-- Gender & Status -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <UiLabel>{{ $t('user_info.gender') }}</UiLabel>
              <UiSelect v-model="formData.gender" class="mt-2">
                <UiSelectTrigger>
                  <UiSelectValue :placeholder="$t('edit_popup.select_gender')" />
                </UiSelectTrigger>
                <UiSelectContent>
                  <UiSelectItem value="male">{{ $t('edit_popup.gender_male') }}</UiSelectItem>
                  <UiSelectItem value="female">{{ $t('edit_popup.gender_female') }}</UiSelectItem>
                </UiSelectContent>
              </UiSelect>
            </div>
            <div>
              <UiLabel>{{ $t('user_info.has_children') }}</UiLabel>
              <div class="mt-2 flex items-center">
                <UiInputRadio v-model="formData.hasChildren" />
              </div>
            </div>
          </div>

          <!-- State & Family Members -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <UiLabel>{{ $t('user_info.state') }}</UiLabel>
              <UiSelect v-model="formData.state" class="mt-2">
                <UiSelectTrigger>
                  <UiSelectValue :placeholder="$t('edit_popup.select_state')" />
                </UiSelectTrigger>
                <UiSelectContent>
                  <UiSelectItem value="tehran">{{ $t('edit_popup.state_tehran') }}</UiSelectItem>
                  <UiSelectItem value="tabriz">{{ $t('edit_popup.state_tabriz') }}</UiSelectItem>
                  <UiSelectItem value="qom">{{ $t('edit_popup.state_qom') }}</UiSelectItem>
                  <UiSelectItem value="isfahan">{{ $t('edit_popup.state_isfahan') }}</UiSelectItem>
                </UiSelectContent>
              </UiSelect>
            </div>
            <div>
              <UiLabel>{{ $t('user_info.family_members_count') }}</UiLabel>
              <UiInput 
                v-model="formData.familyMembers"
                type="number"
                class="mt-2"
              />
            </div>
          </div>

          <!-- City & Rural -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <UiLabel>{{ $t('user_info.city') }}</UiLabel>
              <UiSelect v-model="formData.city" class="mt-2">
                <UiSelectTrigger>
                  <UiSelectValue :placeholder="$t('edit_popup.select_city')" />
                </UiSelectTrigger>
                <UiSelectContent>
                  <UiSelectItem value="option1">{{ $t('edit_popup.city_option_1') }}</UiSelectItem>
                  <UiSelectItem value="option2">{{ $t('edit_popup.city_option_2') }}</UiSelectItem>
                </UiSelectContent>
              </UiSelect>
            </div>
            <div>
              <UiLabel>{{ $t('user_info.residence_type') }}</UiLabel>
              <div class="mt-2 flex items-center">
                <UiInputRadio v-model="formData.isRural" />
              </div>
            </div>
          </div>

          <!-- Education & Job -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <UiLabel>{{ $t('user_info.education') }}</UiLabel>
              <UiSelect v-model="formData.education" class="mt-2">
                <UiSelectTrigger>
                  <UiSelectValue :placeholder="$t('edit_popup.select_education')" />
                </UiSelectTrigger>
                <UiSelectContent>
                  <UiSelectItem value="high_school">{{ $t('edit_popup.education_high_school') }}</UiSelectItem>
                  <UiSelectItem value="associate">{{ $t('edit_popup.education_associate') }}</UiSelectItem>
                  <UiSelectItem value="bachelor">{{ $t('edit_popup.education_bachelor') }}</UiSelectItem>
                  <UiSelectItem value="master">{{ $t('edit_popup.education_master') }}</UiSelectItem>
                </UiSelectContent>
              </UiSelect>
            </div>
            <div>
              <UiLabel>{{ $t('user_info.job') }}</UiLabel>
              <UiSelect v-model="formData.job" class="mt-2">
                <UiSelectTrigger>
                  <UiSelectValue :placeholder="$t('edit_popup.select_job')" />
                </UiSelectTrigger>
                <UiSelectContent>
                  <UiSelectItem value="employed">{{ $t('edit_popup.job_employed') }}</UiSelectItem>
                  <UiSelectItem value="self_employed">{{ $t('edit_popup.job_self_employed') }}</UiSelectItem>
                  <UiSelectItem value="student">{{ $t('edit_popup.job_student') }}</UiSelectItem>
                </UiSelectContent>
              </UiSelect>
            </div>
          </div>

          <!-- Monthly Budget & Status -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <UiLabel>{{ $t('user_info.monthly_budget') }}</UiLabel>
              <UiSelect v-model="formData.monthlyBudget" class="mt-2">
                <UiSelectTrigger>
                  <UiSelectValue :placeholder="$t('edit_popup.select_budget')" />
                </UiSelectTrigger>
                <UiSelectContent>
                  <UiSelectItem value="under_5">{{ $t('edit_popup.budget_under_5') }}</UiSelectItem>
                  <UiSelectItem value="5_10">{{ $t('edit_popup.budget_5_10') }}</UiSelectItem>
                  <UiSelectItem value="10_20">{{ $t('edit_popup.budget_10_20') }}</UiSelectItem>
                  <UiSelectItem value="over_20">{{ $t('edit_popup.budget_over_20') }}</UiSelectItem>
                </UiSelectContent>
              </UiSelect>
            </div>
            <div>
              <UiLabel>{{ $t('common.status') }}</UiLabel>
              <UiSelect v-model="formData.status" class="mt-2">
                <UiSelectTrigger>
                  <UiSelectValue :placeholder="$t('edit_popup.select_status')" />
                </UiSelectTrigger>
                <UiSelectContent>
                  <UiSelectItem value="active">{{ $t('edit_popup.status_active') }}</UiSelectItem>
                  <UiSelectItem value="inactive">{{ $t('edit_popup.status_inactive') }}</UiSelectItem>
                </UiSelectContent>
              </UiSelect>
            </div>
          </div>

          <!-- Tags -->
          <div>
            <UiLabel>{{ $t('edit_popup.tags') }}</UiLabel>
            <div class="mt-2 flex flex-wrap gap-2">
              <UiBadge v-for="tag in formData.tags" :key="tag" variant="outline">
                {{ tag }}
              </UiBadge>
            </div>
          </div>

          <!-- Buttons -->
          <div class="grid grid-cols-2 gap-3 pt-6 border-t">
            <UiButton 
              type="button"
              variant="outline"
              @click="closeModal"
              class="flex-1"
            >
              {{ $t('edit_popup.cancel') }}
            </UiButton>
            <UiButton 
              type="submit" 
              variant="default"
            >
              {{ $t('edit_popup.submit') }}
            </UiButton>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps({
    renderComponent: Boolean
})
interface FormData {
  birthDate: string
  phone: string
  gender: string
  hasChildren: boolean
  state: string
  familyMembers: number
  city: string
  isRural: boolean
  education: string
  job: string
  monthlyBudget: string
  status: string
  tags: string[]
}

const isOpen = computed(() => props.renderComponent)

const formData = ref<FormData>({
  birthDate: '2026/01/14',
  phone: '09050690417',
  gender: 'female',
  hasChildren: true,
  state: 'qom',
  familyMembers: 4,
  city: 'option1',
  isRural: true,
  education: 'bachelor',
  job: 'self_employed',
  monthlyBudget: 'under_5',
  status: 'active',
  tags: ['test']
})

const closeModal = () => {
//   isOpen.value = false
  // Emit an event to parent to close the modal
  // emit('close')      
}

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
  // Handle form submission here
  closeModal()
}
</script>

<style scoped>

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

:deep(.hide-scrollbar::-webkit-scrollbar) {
  width: 0;
  height: 0;
}

</style>