<template>
      <div class="flex flex-col mb-4">
            <label :for="label" class="p-1 mb-1.5 font-medium text-base">{{ label }}</label>
            <input :value="value" @input="$emit('update:value', $event.target.value)" v-bind="$attrs" :id="label"
                  class="border  rounded py-2 px-2.5 border-gray-300 focus:outline-none" />
      </div>
</template>

<script setup>

import { computed } from 'vue';

const props = defineProps({
      value: String,
      label: String,
      valueModifiers: { default: () => ({}) }
})


defineEmits(['update:value'])

defineOptions({
      inheritAttrs: false
})

// console.log(props.valueModifiers)

// defineProps(['value', 'label'])

// using computed
// const props = defineProps(['value', 'label'])
// const emit = defineEmits(['update:value'])

// const value = computed({
//       get() {
//             return props.value
//       },
//       set(value) {
//             emit('update:value', value) // update the parent component's prop

//             console.log(value)
//       }
// })

</script>