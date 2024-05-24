'use strict'

console.log('HOLA MI GENTEEE')


const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')