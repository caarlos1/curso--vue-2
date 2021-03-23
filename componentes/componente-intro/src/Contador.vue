<template>
    <div class="contador">
        {{ contador }}
        <button @click="add()">+</button>
        <button @click="sub()">-</button>
  </div>
</template>

<script>
export default {
    data(){
      return {
        contador: 0,
      }
    },
    methods: {
        add(){
            this.contador++
        },
        sub(){
        this.contador--
        } 
    },
    
}
</script>