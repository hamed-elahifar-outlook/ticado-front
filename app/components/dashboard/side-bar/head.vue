<template>
    <div class="h-16 flex items-center px-4">
      <div class="flex items-center gap-3">
        <div
          class="h-10 w-10 bg-gradient-to-br from-chart-2 to-chart-3 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20"
        >
          <span class="text-white font-bold text-lg">T</span>
        </div>
        <div>
          <h1 class="font-bold text-lg text-slate-900">{{$t('dashboard.panel')}}</h1>
          <p class="text-xs text-slate-500">{{$t('dashboard.header_title')}}</p>
        </div>
      </div>
    </div>
</template>
<script setup>

</script>