new Vue({
	el: '#desafio',
	data: {
		destacado: '',
		bordaRedonda: true,
		classePassada: '',
		userClass: '',
		userClassAtiva: '',
		userStyle: 'blue',
		width: 0,
		progresso: {
			backgroundColor: 'green',

		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.destacado = this.destacado == 'destaque' ? 'encolher' : 'destaque';
			}, 500)
		},
		iniciarProgresso() {
			setInterval(() => {
				if(this.width < 100)
					this.width += 5;
			}, 200);
		}
	},
	computed: {
		estiloUser(){
			return this.userClassAtiva == 'true' ? [this.userClass] : [];
		},
		estiloUser2(){
			return {
				backgroundColor: this.userStyle,
			};
		},
	},
})
