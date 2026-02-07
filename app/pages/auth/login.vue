<script setup>
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '~/components/ui/card'

const email = ref('')
const password = ref('')
const phone = ref('')
const code = ref('')
const enableOtp = ref(false)
const enableLoading = ref(false)
const { locale} = useI18n();

const handleLogin = async () => {
    try {
        enableLoading.value = true;
        const body = {
            phone: phone.value, locale: locale.value
        }
        const result = await useClientFetch('/auth/sign-up', 'POST', body)

        if (result.success) {
            enableLoading.value = false;
            enableOtp.value = true;
        }
    } 
    catch (err) {
        alert('An error occurred')
        console.log(error.data);
        enableLoading.value = false;
    }
}

const verifyCode = async () => {
    try {
        enableLoading.value = true;
        const body = {
            phone: phone.value,
            code: code.value
        }    
        const result = await useClientFetch('/auth/sign-in', 'POST', body);
        if(result.success) {
            const token = useCookie('auth_token')
            token.value = result.data?.accessToken;
            await navigateTo("/")
            enableLoading.value = false;
            enableOtp.value = false;
        }
    } 
    catch (error) {
        console.log(error.data);
        alert(error.data?.message || 'Error happened')
        enableLoading.value = false;
    }
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-background relative">
    <LanguageSwitcher class="absolute top-4 right-4" />
    <Card class="w-full max-w-sm">
      <CardHeader>
        <CardTitle class="text-2xl">{{ $t('login.title') }}</CardTitle>
        <CardDescription>{{ $t('login.subtitle') }}</CardDescription>
      </CardHeader>

        <Transition name="fade-slide" mode="out-in">
           <CardContent class="grid gap-4" v-if="!enableOtp" key="form">
                <div class="grid gap-2">
                    <Label for="name">{{ $t('signup.phone_label') }}</Label>
                    <Input id="name" type="text" placeholder="+989123456789" v-model="phone" />
                </div>
           </CardContent>
           <CardContent v-else key="otp">
                <div class="grid gap-2">
                    <Label for="name">{{ $t('signup.otp_label') }}</Label>
                    <Input id="name" type="text" placeholder="1234" v-model="code" max="4" />
                </div>
           </CardContent>
        </Transition>
      <CardFooter>
        <Button class="w-full" @click="handleLogin" v-if="!enableOtp">
            <p v-if="!enableLoading">
                {{ $t('login.submit') }}
            </p>
            <UiLoadingSpinner v-else/>
        </Button>
        <Button class="w-full" @click="verifyCode" v-else>
            <p v-if="!enableLoading">
                {{ $t('login.verify_code') }}
            </p>
            <UiLoadingSpinner v-else/>
        </Button>

      </CardFooter>
      <div class="text-center text-sm pb-6">
        <NuxtLink to="/auth/signup" class="underline">
           {{ $t('login.sign_up_link') }}
        </NuxtLink>
      </div>
    </Card>
  </div>
</template>
