<template>
  <div class="min-h-screen bg-stone-800 flex flex-col items-center justify-center">
    <h1 class="text-5xl font-extrabold text-lime-200 text-center mb-5">TODO LIST</h1>
    <NewTodo />
    <TodosList />
  </div>
</template>

<script lang="ts" setup>

onMounted(async () => {
  useMyTodoStore().getTodos()
})

</script>

<style></style>