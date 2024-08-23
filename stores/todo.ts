import { defineStore } from 'pinia'
import type { todoType } from '~/types/todo-type'

interface todoState {
  todosData: todoType[]
}

export const useMyTodoStore = defineStore({
  id: 'myTodoStore',
  state: (): todoState => ({
    todosData: []
  }),
  getters: {
    myTodos(state: todoState): todoType[] {
      const todos = state.todosData
      return todos
    }
  },
  actions: {
    async getTodos() {
      try {
        const data = await $fetch<todoType[]>('/api/get-todo')
        console.log(data);

        this.todosData = data
      } catch (error) {
        console.log(error);
      }
    },

    async addTodo(theTodo: string) {
      try {
        await $fetch('/api/add-todo', {
          method: 'POST',
          body: {
            theTodo: theTodo,
            isFinished: false
          }
        })
        await this.getLatestTodo()
      } catch (error) {
        console.log(error);
      }
    },

    async getLatestTodo() {
      try {
        const todo = await $fetch<todoType[]>('/api/get-latest-todo')
        this.todosData.unshift(...todo)
      } catch (error) {
        console.log(error);
      }
    },

    async updateTodo(id: string) {
      const index = this.todosData.findIndex(todo => todo.id === id)
      if (index !== -1) {
        try {
          await $fetch('/api/edit-todo', {
            method: "PATCH",
            body: {
              id: id,
              isFinished: !this.todosData[index].isFinished
            }
          })
          this.todosData[index].isFinished = !this.todosData[index].isFinished
        } catch (error) {
          console.log(error);
          
        }
      }
    },

    async deleteTodo(id: string) {
      try {
        await $fetch('/api/delete-todo', {
          method: 'DELETE',
          body: {
            id: id
          }
        })
        this.todosData = this.todosData.filter(todo => todo.id !== id)
      } catch (error) {
        console.log(error);
      }
    }
  }
})
