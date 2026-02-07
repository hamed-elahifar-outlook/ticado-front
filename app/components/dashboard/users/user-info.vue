<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    <!-- Birth Date -->
    <div class="flex items-center gap-3">
      <div class="p-2 bg-gray-100 rounded-lg">
        <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1 4.5 4.5 0 1-4.384 5.98z" />
        </svg>
      </div>
      <div>
        <p class="text-sm text-gray-600">{{ $t('user_info.birth_date') }}</p>
        <p class="text-lg font-semibold">{{ birthDate }}</p>
      </div>
    </div>

    <!-- Gender -->
    <div class="flex items-center gap-3">
      <div class="p-2 bg-gray-100 rounded-lg">
        <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
        </svg>
      </div>
      <div>
        <p class="text-sm text-gray-600">{{ $t('user_info.gender') }}</p>
        <p class="text-lg font-semibold">{{ gender }}</p>
      </div>
    </div>

    <!-- Has Children -->
    <div class="flex items-center gap-3">
      <div class="p-2 bg-gray-100 rounded-lg">
        <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
        </svg>
      </div>
      <div>
        <p class="text-sm text-gray-600">{{ $t('user_info.has_children') }}</p>
        <p class="text-lg font-semibold">{{ hasChildren }}</p>
      </div>
    </div>

    <!-- State -->
    <div class="flex items-center gap-3">
      <div class="p-2 bg-gray-100 rounded-lg">
        <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
        </svg>
      </div>
      <div>
        <p class="text-sm text-gray-600">{{ $t('user_info.state') }}</p>
        <p class="text-lg font-semibold">{{ state }}</p>
      </div>
    </div>

    <!-- Number of Family Members -->
    <div class="flex items-center gap-3">
      <div class="p-2 bg-gray-100 rounded-lg">
        <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
        </svg>
      </div>
      <div>
        <p class="text-sm text-gray-600">{{ $t('user_info.family_members_count') }}</p>
        <p class="text-lg font-semibold">{{ familyMembersCount }}</p>
      </div>
    </div>

    <!-- City -->
    <div class="flex items-center gap-3">
      <div class="p-2 bg-gray-100 rounded-lg">
        <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
        </svg>
      </div>
      <div>
        <p class="text-sm text-gray-600">{{ $t('user_info.city') }}</p>
        <p class="text-lg font-semibold">{{ city }}</p>
      </div>
    </div>

    <!-- Education -->
    <div class="flex items-center gap-3">
      <div class="p-2 bg-gray-100 rounded-lg">
        <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </div>
      <div>
        <p class="text-sm text-gray-600">{{ $t('user_info.education') }}</p>
        <p class="text-lg font-semibold">{{ education }}</p>
      </div>
    </div>

    <!-- Residence Type -->
    <div class="flex items-center gap-3">
      <div class="p-2 bg-gray-100 rounded-lg">
        <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
        </svg>
      </div>
      <div>
        <p class="text-sm text-gray-600">{{ $t('user_info.residence_type') }}</p>
        <p class="text-lg font-semibold">{{ residenceType }}</p>
      </div>
    </div>

    <!-- Job -->
    <div class="flex items-center gap-3">
      <div class="p-2 bg-gray-100 rounded-lg">
        <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
        </svg>
      </div>
      <div>
        <p class="text-sm text-gray-600">{{ $t('user_info.job') }}</p>
        <p class="text-lg font-semibold">{{ job }}</p>
      </div>
    </div>

    <!-- Membership Date -->
    <div class="flex items-center gap-3">
      <div class="p-2 bg-gray-100 rounded-lg">
        <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
        </svg>
      </div>
      <div>
        <p class="text-sm text-gray-600">{{ $t('user_info.membership_date') }}</p>
        <p class="text-lg font-semibold">{{ membershipDate }}</p>
      </div>
    </div>

    <!-- Monthly Budget -->
    <div class="flex items-center gap-3">
      <div class="p-2 bg-gray-100 rounded-lg">
        <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8.16 5.314l4.897-1.596A2 2 0 0116 5.856v10.29a2 2 0 01-2.927 1.738l-4.897-1.596A2 2 0 008 12.143V7.143a2 2 0 01.16-.829zm5.68 12.372a2 2 0 01-2.927-1.738V5.856a2 2 0 012.927 1.738v10.092z" />
        </svg>
      </div>
      <div>
        <p class="text-sm text-gray-600">{{ $t('user_info.monthly_budget') }}</p>
        <p class="text-lg font-semibold">{{ monthlyBudget }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const birthDate = ref('14/01/2026')
const gender = ref('زن')
const hasChildren = ref('بله')
const state = ref('قم')
const familyMembersCount = ref('4')
const city = ref('-')
const education = ref('کارشناسی')
const residenceType = ref('بله')
const job = ref('آزاد')
const membershipDate = ref('26/01/2026')
const monthlyBudget = ref('کمتر از 12 میلیون')

import { ref } from 'vue'
</script>

<style scoped>

</style>