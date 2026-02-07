<template>
    <div class="checkbox-wrapper-6">
        <input class="tgl tgl-light" id="cb1-6" type="checkbox" :value="value"/>
        <label class="tgl-btn" for="cb1-6"></label>
    </div>
</template>

<script setup lang="ts">
defineProps({
    value: {
        type: Boolean,
        default: false
    }
})
// interface Props {
//   modelValue?: boolean
// }

// interface Emits {
//   (e: 'update:modelValue', value: boolean): void
// }

// // defineProps<Props>()
// defineEmits<Emits>()

// const toggleSwitch = () => {
//   const emit = defineEmits<Emits>()
//   emit('update:modelValue', !props.modelValue)
// }

// const props = withDefaults(defineProps<Props>(), {
//   modelValue: false
// })
</script>