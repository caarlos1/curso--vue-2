<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>
    <p>Nome de Usuário: {{ nomeProps }}</p>
    <p>Idade: {{ idadeProps }}</p>
    <button @click="alterarIdade()">Alterar Idade de Usuário</button>
  </div>
</template>

<script>
import barramento from "@/barramento.js";

export default {
  props: { nome: String, idade: Number },

  data() {
    return {
      nomeProps: this.nome,
      idadeProps: this.idade,
    };
  },

  methods: {
    alterarIdade() {
      // Emitindo um evento como nome novaIdade
      let idade = 18;
      barramento.$emit("novaIdade", idade);
      this.idadeProps = idade;
    },
  },

  watch: {
    nome(novo, antigo) {
      this.nomeProps = novo;
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
