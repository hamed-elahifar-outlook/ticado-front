<script setup>
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '~/components/ui/card'
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
const phone = ref('')
const code = ref('')
const enableOtp = ref(false)
const enableLoading = ref(false)
const { locale} = useI18n();


const handleSignUp = async () => {
   try {
      enableLoading.value = true;
      const body = {
         name: name.value,
         phone: phone.value,
         locale: locale.value
      }
      const result = await useClientFetch('/auth/sign-up', 'POST', body);
      if(result.success) {
         enableLoading.value = false;
         enableOtp.value = true;
      }
      console.log(result);
   } 
   catch (error) {
      console.log(error.data);
      alert(error.data.message)
      enableLoading.value = false;
   }
}

const verifyCode = async() => {
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
         navigateTo('/')
         enableLoading.value = false;
      }
   } 
   catch (error) {
      console.log(error.data);
      enableLoading.value = false;
   }
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-background relative">
     <LanguageSwitcher class="absolute top-4 right-4" />
     <Card class="w-full max-w-sm">
        <CardHeader>
           <CardTitle class="text-2xl">{{ $t('signup.title') }}</CardTitle>
           <CardDescription>{{ $t('signup.subtitle') }}</CardDescription>
        </CardHeader>
        <Transition name="fade-slide" mode="out-in">
           <CardContent class="grid gap-4" v-if="!enableOtp" key="form">
              <div class="grid gap-2">
                 <Label for="name">{{ $t('signup.name_label') }}</Label>
                 <Input id="name" type="text" placeholder="" v-model="name" />
              </div>
              <div class="grid gap-2">
                 <Label for="name">{{ $t('signup.phone_label') }}</Label>
                 <Input id="name" type="text" placeholder="+989123456789" v-model="phone" />
              </div>
              <!-- <div class="grid gap-2">
                 <Label for="email">{{ $t('login.email_label') }}</Label>
                 <Input id="email" type="email" placeholder="m@example.com" v-model="email" />
              </div>
              <div class="grid gap-2">
                 <Label for="password">{{ $t('login.password_label') }}</Label>
                 <Input id="password" type="password" v-model="password" />
              </div> -->
           </CardContent>
           <CardContent v-else key="otp">
               <div class="grid gap-2">
                 <Label for="name">{{ $t('signup.otp_label') }}</Label>
                 <Input id="name" type="text" placeholder="12345" v-model="code" max="5" />
              </div>
           </CardContent>
        </Transition>
        <CardFooter>
            <Button class="w-full" @click="handleSignUp" v-if="!enableOtp">
               <p v-if="!enableLoading">{{ $t('signup.submit') }}</p>
               <UiLoadingSpinner v-else/>
            </Button>
            <Button v-else class="w-full" @click="verifyCode">
               <p v-if="!enableLoading">{{$t('signup.verify_code')}}</p>
               <UiLoadingSpinner v-else/>
            </Button>
        </CardFooter>
        <div class="text-center text-sm pb-6">
          <NuxtLink to="/auth/login" class="underline">
             {{ $t('signup.sign_in_link') }}
          </NuxtLink>
        </div>
     </Card>
  </div>
</template>
