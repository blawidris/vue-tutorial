<template>
      <ul>
            <li v-if="!items.length">
                  loading
            </li>

            <li v-for="item in items" class="bg-gray-100 mb-3 py-4 max-w-sm">
                  <!-- scope slot -->
                  <slot name="item" v-bind="item"></slot>
            </li>
      </ul>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['api-url', 'per-page'])

const items = ref([])

// mock remote data fetching
setTimeout(() => {
      items.value = [
            { body: "Great day today!", username: "user1", likes: 20 },
            { body: "Enjoying the sunshine!", username: "user2", likes: 15 },
            { body: "Coding is fun!", username: "user3", likes: 30 },
      ]
}, 1000)
</script>