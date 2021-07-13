import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // Dados compartilhados
  state: {
    produtos: [],
    quantidade: 2,
    preco: 15.99,
  },
  getters: {
    valorTotal(state) {
      return state.produtos
        .map((p) => p.quantidade * p.preco)
        .reduce((total, atual) => total + atual, 0);
    },
  },
  // São como os "Setters"
  // Tem o objetivo de alterar dados.
  mutations: {
    adicionarProduto(state, produto) {
      state.produtos.push(produto);
    },
    setQuantidade(state, quantidade) {
      state.quantidade = quantidade;
    },
    setPreco(state, preco) {
      state.preco = preco;
    },
  },
  // Local para criar regras e lógicas de mutações,
  // podendo utilizar as mutations.
  // Ideal para utilizar assincronismos.
  actions: {
    // ao invez de acessar o state, acecssa o contexto do store,
    // que é útil para acessar o os getters e ex: .commit
    actionAdicionarProduto(context, payload) {
      setTimeout(() => {
        context.commit("adicionarProduto", payload);
      }, 1000);
    },
  },
});
