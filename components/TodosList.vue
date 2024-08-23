<template>
  <div v-for="todo in todoStore.myTodos" :key="todo.id" class="grid grid-cols-12 items-center gap-5 mt-6">
    <p @click="updateTodo(todo.id)"
      :style="todo.isFinished ? 'background-color: #365314; text-decoration:line-through' : ''"
      class="cursor-pointer col-span-10 bg-lime-200 rounded-full p-5">{{ todo.theTodo }}</p>
    <button @click="deleteTodo(todo.id)"
      class="hover:animate-pulse col-span-2 bg-red-600 h-10 w-10 rounded-full">X</button>
  </div>
</template>

<script lang="ts" setup>
const todoStore = useMyTodoStore()

const updateTodo = async (id: string) => {
  await todoStore.updateTodo(id)
}

const deleteTodo = async (id: string) => {
  await todoStore.deleteTodo(id)
}
</script>

<style></style>