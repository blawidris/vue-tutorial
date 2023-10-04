<template>
      <form action="POST">
            <v-form-input v-model:value="username" type="text" label="Full name" />
            <span style="color:red;">{{ username }}</span>
      </form>
</template>

<script setup>
import { reactive, ref } from 'vue';
import VFormInput from '../components/forms/FormInput.vue';

const form = reactive({
      email: '',
      subject: '',
      fullname: '',
      message: ''
})
</script>

<style lang="scss" scoped></style>