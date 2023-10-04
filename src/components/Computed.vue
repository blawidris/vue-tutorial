<template>
      <div>
            <div class="author">
                  <div class="author-name">Name: {{ author.name }}</div>
                  <div class="has-published-book">Has published Book: {{ publishedBook }}</div>
                  <div class="has-published-book">Total books published: {{ totalBooksPublised }}</div>
                  <div class="books flex flex-column">
                        <span class="subtitle">List of Books: </span>
                        <ul class="list">
                              <li class="title" v-for="book in author.books" :key="book">{{ book }}</li>
                              <!-- {{ author.books }} -->
                        </ul>
                  </div>

                  <div class="name">{{ fullName.value }}</div>
            </div>
      </div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';

const author = reactive({
      name: 'John Doe',
      books: [
            'Vue 2 - Advanced Guide',
            'Vue 3 - Basic Guide',
            'Vue 4 - The Mystery'
      ]
})


const publishedBook = computed(() => {
      return author.books.length > 0 ? 'Yes' : 'No'
});

const totalBooksPublised = computed(() => {
      return author.books.length;
})

// writable computed (getter and setter)
const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
      get() {
            return firstName.value + ' ' + lastName.value
      },

      set(newValue) {
            [firstName.value, lastName.value] = newValue.split(' ')
      }
})
</script>

<style scoped>
.author {
      background-color: #f4f4f4;
      padding: 1rem 1.875rem;
      border-radius: 5px;
      color: #888;
      box-shadow: 0 10px 5px 0 rgba(91, 91, 91, .5);
}

.author>.author-name {
      font-weight: 500;
      color: #777;
}

.flex {
      display: flex;
}

.flex-column {
      flex-direction: column;
}

ul {
      list-style: none;
      padding: 0;
}

ul li {
      padding-inline: 5px;
}
</style>