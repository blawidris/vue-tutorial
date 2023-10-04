<template>
      <div>
            <button @click="$emit('increment')">
                  You clicked me {{ props.count }} times.
            </button>`
      </div>
</template>

<script setup>
import { ref } from 'vue';
// const count = ref(0)

let props = defineProps({
      count: {
            type: Number,
            default: 0
      }
})

defineEmits(['increment'])
</script>

<style lang="scss" scoped></style>