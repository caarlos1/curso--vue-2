new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },

    methods:{
        exibirAlerta(e){
            alert("Você clicou no botão!");
        },
        apertarBotao(e){
            this.valor = e.target.value;
        },
    },
})