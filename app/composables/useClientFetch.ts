export const useClientFetch = async(
    route:  string,
    method: 'POST' | 'PUT' | 'DELETE'| 'GET',
    body: object
) => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiBase;
    const url = baseUrl + route;
    const token = useCookie("auth_token");
    const headers = {
        Authorization: token.value ? 'Bearer '+ token.value : '',
    }
    return await $fetch(url, {
        method,
        body,
        headers
    })
}