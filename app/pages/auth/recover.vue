<script setup lang="ts">
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '~/components/ui/card'

const email = ref('')

const handleRecover = async () => {
    // Implement API call
    alert('Recovery link sent (Simulated)')
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-background">
     <Card class="w-full max-w-sm">
        <CardHeader>
           <CardTitle class="text-2xl">Recover Password</CardTitle>
           <CardDescription>Enter your email to reset password</CardDescription>
        </CardHeader>
        <CardContent class="grid gap-4">
           <div class="grid gap-2">
              <Label for="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" v-model="email" />
           </div>
        </CardContent>
        <CardFooter>
           <Button class="w-full" @click="handleRecover">Send Reset Link</Button>
        </CardFooter>
     </Card>
  </div>
</template>
