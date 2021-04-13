<template>
   <ul id="lista-tarefas">
      <li
        class="item-tarefa"
        :class="{ feita: item.status }"
        v-for="(item, index) in arrayTarefas"
        :key="item.index"
        @click="mudarEstadoTarefa(index)"
      >
        {{ item.tarefa }}
      </li>
    </ul>
</template>

<script>
export default {
    props: ['arrayTarefas'],
    methods: {
        mudarEstadoTarefa(index) {
            this.$emit('mudarEstadoTarefaEvent', index)
            // console.log('clicou');
        }
    }
}
</script>  

<style>
#lista-tarefas {
  padding: 0;
  margin: 0;
  width: 80%;
  padding-top: 20px;
  margin: auto;
}

.item-tarefa {
  text-align: center;
  padding: 30px;
  margin: 5px;
  margin-bottom: 0;
  width: 20%;
  background-color: rgb(216, 58, 58);
  list-style: none;
  margin-left: 0px;
  display: inline-block;
  box-sizing: border-box;
  box-shadow: 4px 4px 19px 0px rgba(50, 50, 50, 0.46);
  border-radius: 5px;
  /* border: 1px solid rgb(199, 199, 199); */
}

.feita {
  background-color: rgb(20, 194, 20);
}
</style>