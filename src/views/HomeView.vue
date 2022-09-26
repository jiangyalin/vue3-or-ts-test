<template>
  <main>
    <the-welcome />
  </main>
</template>

<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'

console.log('dd', Math.PI === 3.141592653589793 ? '假的' : '真的')

const a = 'aaa'
const test = 'bbb'
console.log('a', a)
</script>
