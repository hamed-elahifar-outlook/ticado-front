<template>
  <section class="flex gap-x-4 w-full bg-sidebar p-4 min-h-screen">
    <aside
      class="h-screen bg-sidebar 
      z-50 transition-all duration-300 translate-x-full lg:translate-x-0 basis-1/6
      flex flex-col text-sidebar-foreground">
      <DashboardSideBarHead />
      <DashboardSideBarMain />
      <!-- <DashboardSideBarFooter /> -->
    </aside>
    <main class="transition-all duration-300 min-h-screen basis-5/6 px-5 bg-background text-foreground rounded-lg">
      <slot  />
    </main>
  </section>
</template>
