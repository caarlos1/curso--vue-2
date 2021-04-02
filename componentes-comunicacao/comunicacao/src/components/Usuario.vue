<template>
  <div class="container">
    <h1>Componente Usuário</h1>
    <p>Esse é um componente muito legal!</p>
    <p>Nome de Usuário: {{ nome }}</p>
    <p>Idade: {{ idade }}</p>
    <button @click="alterarNomeUsuario()">Alterar nome de Usuário</button>
    <hr />
    <div class="componentes">
      <!-- Para passar um atributo de data em props é necessário usar o v-bind ou : -->
      <!-- Para atualziar de filho pra pai é necessário criar um evento -->
      <!-- Objetos atualizam sozinho e não tem necessidade de eventos, pelo que testei -->
      <app-usuario-info :nome="nome" :idade="idade" @novoNome="nome = $event" />
      <app-usuario-editar :nome="nome" :idade="idade" />
    </div>
  </div>
</template>

<script>
import AppUsuarioInfo from "./UsuarioInfo";
import AppUsuarioEditar from "./UsuarioEditar";

export default {
  components: { AppUsuarioInfo, AppUsuarioEditar },

  data() {
    return {
      nome: "Pedro",
      idade: 15,
    };
  },

  methods: {
    alterarNomeUsuario() {
      this.nome = "Robson";
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}
</style>
