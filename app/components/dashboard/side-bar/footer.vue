<template>
    <div
      class="absolute bottom-0 right-0 left-0 p-3 border-t border-slate-200 bg-white"
    >
      <button
        class="items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors 
        focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none 
        disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground 
        h-9 px-4 py-2 w-full justify-start hidden lg:flex"
      >
        <Tally4 class="rotate-90" />
        <span class="mr-3">جمع کردن منو</span>
      </button>
    </div>
</template>
<script setup>
    import {Tally4} from "lucide-vue-next"
</script>