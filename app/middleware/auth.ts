export default defineNuxtRouteMiddleware((to) => {
    const token = useCookie<string | null>("auth_token", { watch: false })
    const hasToken = Boolean(token.value)

    if (to.path === "/") {
        return navigateTo(hasToken ? "/dashboard" : "/auth/login", { replace: true })
    }

    if (to.path.startsWith("/dashboard") && !hasToken) {
        return navigateTo("/auth/login", { replace: true })
    }

    if (to.path.startsWith("/auth") && hasToken) {
        return navigateTo("/dashboard", { replace: true })
    }
})
