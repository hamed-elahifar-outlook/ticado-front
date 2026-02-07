<script setup lang="ts">
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '~/components/ui/card'

const title = ref('')
const description = ref('')

const create = async () => {
    const { data, error } = await useApi<any>('/questionnaire', {
        method: 'POST',
        body: {
            title: title.value,
            description: description.value,
            elements: [],
            startTime: new Date().toISOString(),
            endTime: new Date(Date.now() + 30*24*60*60*1000).toISOString()
        }
    })
    
    if (error.value) {
        alert('Failed: ' + (error.value.data?.message || 'Unknown error'))
    } else {
        navigateTo('/builder/' + data.value._id)
    }
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-muted/40 p-4">
    <Card class="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Create New Questionnaire</CardTitle>
        <CardDescription>Start by providing basic details for your survey.</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
         <div class="space-y-2">
            <Label>Title</Label>
            <Input v-model="title" placeholder="e.g. Market Research Phase 1" />
         </div>
         <div class="space-y-2">
            <Label>Description</Label>
            <Textarea v-model="description" placeholder="Short description..." />
         </div>
      </CardContent>
      <CardFooter class="justify-end space-x-2">
         <Button variant="outline" @click="navigateTo('/dashboard')">Cancel</Button>
         <Button @click="create">Create & Start Building</Button>
      </CardFooter>
    </Card>
  </div>
</template>
