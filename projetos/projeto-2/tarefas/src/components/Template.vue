<template>
  <div id="template-app">
    <h1>Tarefas</h1>
    <div v-if="temTarefas" id="barra-progresso">
      <div id="progresso" :style="{ width: progressoTotal }"></div>
    </div>
    <div id="formulario">
      <input
        type="text"
        id="input-tarefas"
        placeholder="Adicionar Tarefa:"
        v-model="inputTarefas"
        v-on:keyup.enter="adicionarTarefa"
      />
      <button @click="adicionarTarefa">+</button>
    </div>

    <lista
      :array-tarefas="arrayTarefas"
      @mudarEstadoTarefaEvent="mudarEstadoTarefa($event)"
    />

    <button @click="deletarTodasTarefas" >Deletar Tarefas</button>
  </div>
</template>

<script>
import Lista from "@/components/Lista.vue";
export default {
  components: {
    Lista,
  },
  data() {
    return {
      inputTarefas: "",
      arrayTarefas: [],
      progresso: 0,
    };
  },

  mounted() {
    if (localStorage.listaTarefas)
      this.arrayTarefas = JSON.parse(localStorage.getItem("listaTarefas"));
    else localStorage.setItem("listaTarefas", JSON.stringify( [] ));

    // setInterval( () => this.calcularProgressoTotal(), 1000)
  },

  beforeUpdate() {
    if (localStorage.listaTarefas) {
      localStorage.listaTarefas = JSON.stringify(this.arrayTarefas);
    }
  },

  methods: {
    adicionarTarefa() {
      if (this.inputTarefas) {
        this.arrayTarefas.push({
          tarefa: this.inputTarefas,
          status: false,
        });
        this.inputTarefas = "";
        this.calcularProgressoTotal();
      }
    },
    mudarEstadoTarefa(i) {
      this.arrayTarefas[i].status = !this.arrayTarefas[i].status;
      this.calcularProgressoTotal();
    },

    calcularProgressoTotal() {
      // let getStatusArray = (item) => item.status
      // let calculoProgresso = (progresso) => progresso + this.porcentagemItem
      // let statusArray = this.arrayTarefas.map(getStatusArray)
      // let progressoTarefas = statusArray.reduce(calculoProgresso)
      // this.progresso = progressoTarefas

      this.progresso = 0
      this.arrayTarefas.forEach( element => {
        if (element["status"] === true) 
          this.progresso += this.porcentagemItem;
      });
    },

    deletarTodasTarefas() {
      this.arrayTarefas = []
      this.calcularProgressoTotal();
    }
  },

  computed: {
    progressoTotal() {
      return this.progresso + "%";
    },

    porcentagemItem() {
      return 100 / this.arrayTarefas.length;
    },

    temTarefas() {
      return this.arrayTarefas.length === 0 ? false : true;
    },
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-width: 1500px;
  margin: auto;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}

#template-app {
  width: 100%;
}

#barra-progresso {
  margin: auto;
  width: 450px;
  height: 30px;
  background: white;
  margin-bottom: 15px;
  box-shadow: 4px 4px 19px 0px rgba(50, 50, 50, 0.46);
}

#progresso {
  height: 100%;
  background-color: rgb(20, 194, 20);
}

#input-tarefas {
  min-width: 300px;
  line-height: 1.8em;
}

#input-tarefas {
  line-height: 2em;
  padding-left: 10px;
}
</style>