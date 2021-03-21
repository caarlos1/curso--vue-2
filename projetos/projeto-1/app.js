new Vue({
    el: "#jogo",
    data: {
        vidaJogador: 30,
        vidaMonstro: 20,
    },
    computed: {
        classesJogador(){
            if (this.vidaJogador > 20)
                return ['vida-positiva']
            else
                return ['vida-fraca']
        },

        classesMonstro(){
            if (this.vidaMonstro > 20)
                return ['vida-positiva-monstro']
            else
                return ['vida-fraca']
        },


        calcVidaJogador(){
            return {
                height: 100 + '%',
                width: this.vidaJogador + '%',
            }
        },

        calcVidaMonstro(){
            return {
                height: 100 + '%',
                width: this.vidaMonstro + '%',
            }
        },
        
        corBorda(){
            return this.vidaJogador > 20 ? 'borda-verde' : 'borda-vermelha';
        },
    }

});