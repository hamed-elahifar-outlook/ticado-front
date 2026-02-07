<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    <!-- Birth Date -->
    <div class="flex items-center gap-3">
      <div class="p-2 bg-gray-100 rounded-lg">
        <Cake />
      </div>
      <div>
        <p class="text-sm text-gray-600">{{ $t('user_info.birth_date') }}</p>
        <p class="text-lg font-semibold">{{ birthDate }}</p>
      </div>
    </div>

    <!-- Gender -->
    <div class="flex items-center gap-3">
      <div class="p-2 bg-gray-100 rounded-lg">
        <VenusAndMars />
      </div>
      <div>
        <p class="text-sm text-gray-600">{{ $t('user_info.gender') }}</p>
        <p class="text-lg font-semibold">{{ gender }}</p>
      </div>
    </div>

    <!-- Has Children -->
    <div class="flex items-center gap-3">
      <div class="p-2 bg-gray-100 rounded-lg">
        <Baby />
      </div>
      <div>
        <p class="text-sm text-gray-600">{{ $t('user_info.has_children') }}</p>
        <p class="text-lg font-semibold">{{ hasChildren }}</p>
      </div>
    </div>

    <!-- State -->
    <div class="flex items-center gap-3">
      <div class="p-2 bg-gray-100 rounded-lg">
        <MapPin />
      </div>
      <div>
        <p class="text-sm text-gray-600">{{ $t('user_info.state') }}</p>
        <p class="text-lg font-semibold">{{ state }}</p>
      </div>
    </div>

    <!-- Number of Family Members -->
    <div class="flex items-center gap-3">
      <div class="p-2 bg-gray-100 rounded-lg">
        <UsersRound />
      </div>
      <div>
        <p class="text-sm text-gray-600">{{ $t('user_info.family_members_count') }}</p>
        <p class="text-lg font-semibold">{{ familyMembersCount }}</p>
      </div>
    </div>

    <!-- City -->
    <div class="flex items-center gap-3">
      <div class="p-2 bg-gray-100 rounded-lg">
        <MapPin />
      </div>
      <div>
        <p class="text-sm text-gray-600">{{ $t('user_info.city') }}</p>
        <p class="text-lg font-semibold">{{ city }}</p>
      </div>
    </div>

    <!-- Education -->
    <div class="flex items-center gap-3">
      <div class="p-2 bg-gray-100 rounded-lg">
        <GraduationCap />
      </div>
      <div>
        <p class="text-sm text-gray-600">{{ $t('user_info.education') }}</p>
        <p class="text-lg font-semibold">{{ education }}</p>
      </div>
    </div>

    <!-- Residence Type -->
    <div class="flex items-center gap-3">
      <div class="p-2 bg-gray-100 rounded-lg">
        <Landmark />
      </div>
      <div>
        <p class="text-sm text-gray-600">{{ $t('user_info.residence_type') }}</p>
        <p class="text-lg font-semibold">{{ residenceType }}</p>
      </div>
    </div>

    <!-- Job -->
    <div class="flex items-center gap-3">
      <div class="p-2 bg-gray-100 rounded-lg">
        <BriefcaseBusiness />
      </div>
      <div>
        <p class="text-sm text-gray-600">{{ $t('user_info.job') }}</p>
        <p class="text-lg font-semibold">{{ job }}</p>
      </div>
    </div>

    <!-- Membership Date -->
    <div class="flex items-center gap-3">
      <div class="p-2 bg-gray-100 rounded-lg">
        <Calendar />
      </div>
      <div>
        <p class="text-sm text-gray-600">{{ $t('user_info.membership_date') }}</p>
        <p class="text-lg font-semibold">{{ membershipDate }}</p>
      </div>
    </div>

    <!-- Monthly Budget -->
    <div class="flex items-center gap-3">
      <div class="p-2 bg-gray-100 rounded-lg">
        <BanknoteArrowDown />
      </div>
      <div>
        <p class="text-sm text-gray-600">{{ $t('user_info.monthly_budget') }}</p>
        <p class="text-lg font-semibold">{{ monthlyBudget }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Cake, VenusAndMars, Baby, MapPin, UsersRound, GraduationCap, Landmark,
  BriefcaseBusiness, Calendar, BanknoteArrowDown,
  VenusAndMarsIcon
} from "lucide-vue-next"

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