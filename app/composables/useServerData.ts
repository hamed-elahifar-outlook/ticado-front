export const useServerData = () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiBase;
    const token = useCookie("auth_token");
    const headers = {
        Authorization: token.value ? `Bearer ${token.value}` : '',
        Accept: "application/json",
        'User-Agent': 'nuxt-ssr',
    }
    return {
        baseUrl, headers
    }
}