export const useApi = (
  // request: Parameters<typeof useFetch>[0],
  // opts?: Parameters<typeof useFetch<T>>[1],
  route: string,
  method: 'GET'
) => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.apiBase;
  const url = baseUrl + route;
  const token = useCookie("auth_token");
  // const headers = useRequestHeaders(['cookie'])

  return useFetch(url, {
    method,
    headers: {
      Accept: 'application/json',
      Authorization: token.value ? `Bearer ${token.value}` : '',
    },
    server: false
  })
  // return useFetch<T>(request, {
  //   baseURL: config.public.apiBase || "/",
  //   ...opts,
  //   onRequest({ options }) {
  //     const token = useCookie("auth_token");
  //     const nuxtApp = useNuxtApp();
  //     // @ts-ignore
  //     const locale = nuxtApp.$i18n.locale.value;

  //     options.headers = options.headers || {};
  //     // @ts-ignore
  //     options.headers["Accept-Language"] = locale;

  //     if (token.value) {
  //       options.headers = options.headers || {};
  //       // @ts-ignore
  //       options.headers.Authorization = `Bearer ${token.value}`;
  //     }
  //   },
  //   onResponseError({ response }) {
  //     if (response.status === 401) {
  //       const token = useCookie("auth_token");
  //       token.value = null;
  //       navigateTo("/auth/login");
  //     }
  //   },
  // });
};
