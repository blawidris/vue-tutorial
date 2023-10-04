<script setup>
import { ref } from 'vue';
import VContact from './pages/Contact.vue';
import VFancyList from './components/slots/FancyList.vue';
import { useMouse } from './composable/mouse';

const url = ref('')

const { x, y } = useMouse()
</script>

<template>
  <div class="bg-white w-screen min-h-full">

    <v-fancy-list api-url="url" :per-page="10">
      <template #item="{ body, username, likes }">
        <div class="flex px-3 py-2 flex-col align-start">
          <p class="font-medium font-base mb-2">{{ body }}</p>
          <p class="text-green-500">by {{ username }} | {{ likes }} likes</p>
        </div>

        <div class="">Mouse position is at: {{ x }}, {{ y }}</div>
      </template>
    </v-fancy-list>

    <!-- <v-contact /> -->

  </div>
</template>