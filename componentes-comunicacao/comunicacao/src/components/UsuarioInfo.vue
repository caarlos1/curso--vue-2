<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>Nome de Usuário: {{ nomeProps }}</p>
    <p>Idade: {{ idadeProps }}</p>
    <button @click="reiniciarNome()">Nome Padrão</button>
  </div>
</template>

<script>
import barramento from "@/barramento.js";

export default {
  props: {
    nome: {
      type: String, // Validando as propriedades.
      required: true,
      // default: ...
      default: function () {
        return { nomeUsuario: "Joãozinho" };
      },
    },
    idade: Number,
  },

  data() {
    return {
      nomeProps: this.nome,
      idadeProps: this.idade,
    };
  },

  methods: {
    reiniciarNome() {
      this.$emit("novoNome", "Pedro"); // Evento necessário para atualizar no pai.
    },
  },

  mounted() {
    // Criando uma escuta para ouvir evento novaIdade
    barramento.$on("novaIdade", (idade) => {
      this.idadeProps = idade;
    });
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
  background-color: #ec485f;
  color: #fff;
}
</style>
