<template>
    <CommonPageTitle
    :title="$t('dashboard.user_management')"
    :description="`۱ ${$t('dashboard.registered_user')}`"
    >
        <div class="flex items-center gap-3">
            <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md 
                text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 
                focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none 
                [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            >
                {{$t('dashboard.tag_management')}}
            </button>
            <button
            @click="navigateTo('/dashboard/users/create')"
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors 
                focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 
                [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 
                h-9 px-4 py-2">
                {{$t('dashboard.new_user')}}
            </button>
        </div>
    </CommonPageTitle>
</template>
<script setup>
</script>