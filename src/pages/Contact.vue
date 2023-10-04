<template>
      <form action="POST" class="max-w-md mx-auto my-40 bg-gray-100 px-4 py-5">

            <v-form-input v-model:value="form.name" label="Fullname" type="text" />

            <v-form-input v-model:value="form.email" label="Email Address" type="text" />

            <v-primary-button @click.prevent="submitForm">Save Data</v-primary-button>
      </form>
</template>

<script setup>
import { reactive, ref } from 'vue';
import VFormInput from '../components/v-model/FormInput.vue';
import VPrimaryButton from '../components/slots/PrimaryButton.vue';

const form = reactive({
      email: '',
      name: '',
      message: '',
      processing: false
}
)
const submitForm = () => {
      form.processing = true;

      console.log(form);
}
</script>

<style lang="scss" scoped></style>