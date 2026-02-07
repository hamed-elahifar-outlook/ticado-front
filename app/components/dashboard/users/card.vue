<template>
  <UiCard class="mb-6">
    <div class="p-6">
      <div class="flex flex-col md:flex-row items-start gap-6">
        <span
          class="relative flex shrink-0 overflow-hidden rounded-full h-24 w-24"
          ><span
            class="flex h-full w-full items-center justify-center rounded-full text-2xl bg-blue-100 text-blue-600"
            >f</span
          ></span
        >
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-2">
            <h2 class="text-xl font-bold">fatemeh nassari</h2>
            <UiBadge variant="outline">فعال</UiBadge>
          </div>
          <p class="text-slate-500 mb-3">09050690417</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <UiBadge variant="secondary">
                تست
            </UiBadge>
          </div>
          <!-- ? item section -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <UiCard v-for="item in statsItems" :key="item.id" 
            class="p-3 rounded-lg text-2xl text-center space-y-2 bg-primary bg-opacity-35">
                <UiCardTitle class="text-primary">
                    {{ item.value }}
                </UiCardTitle>
                <UiCardDescription class="font-bold text-xs opacity-40">
                    {{ item.id }}
                </UiCardDescription>
            </UiCard>
            <!-- <div class="text-center p-3 bg-blue-50 rounded-lg">
              <p class="text-2xl font-bold text-blue-600">۰</p>
              <p class="text-xs text-blue-600">امتیاز</p>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </UiCard>
</template>
<script setup>
const statsItems = ref([
  {
    id: "score",
    value: "0",
  },
  {
    id: "chance",
    value: "0",
  },
  {
    id: "questionnaire_completed",
    value: "0",
  },
  {
    id: "wallet_balance",
    value: "0",
  },
])

</script>