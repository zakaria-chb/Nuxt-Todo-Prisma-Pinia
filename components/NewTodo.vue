<template>
  <div>
    <form @submit.prevent=addTodo>
      <input v-model="inputTodo" placeholder="Buy pizza..." type="text" name="todo" id="todo" min="1" max="30" required
        class="box-border p-5 h-10 w-52 mr-5 rounded-full">
      <button class="hover:animate-pulse h-10 w-52 text-slate-50 bg-black rounded-full">+ ADD</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
const todoStore = useMyTodoStore()
const inputTodo = ref('')

const addTodo = async () => {
  todoStore.addTodo(inputTodo.value)
  inputTodo.value = ''
}

</script>

<style></style>