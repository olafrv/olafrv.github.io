import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSnackStore = defineStore('snack', () => {
  const visible = ref(false)
  const text = ref('')
  function setVisible(visible){
    this.visible = visible
  }
  function setText(text){
    this.text = text
  }
  return { visible, text, setVisible, setText }
})