import Vue from 'vue'
export default new Vue({
    methods: {
        onUsuarioSelecionado(callback) {
            this.$on('usuarioSelecionado', callback)
        },
        emitUsuarioSelecionado(usuario) {
            this.$emit('usuarioSelecionado', usuario)
        }
    }
})