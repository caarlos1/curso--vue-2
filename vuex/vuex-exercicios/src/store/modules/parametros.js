export default {
  namespaced: true,
  state: {
    quantidade: 2,
    preco: 15.99,
  },
  mutations: {
    setQuantidade(state, quantidade) {
      state.quantidade = quantidade;
    },
    setPreco(state, preco) {
      state.preco = preco;
    },
  },
};
