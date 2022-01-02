<template>
	<div id="app">
		<h1>Diretivas</h1>

		<p v-text="'Sou um <b>v-text </b>'"></p>
		<p v-html="'Já eu sou um <b>v-html</b>'"></p>
		<p v-destaque:back.delay="'red'">Sou a diretiva Global.</p>
		<p v-destaque="color" v-html="'Estou usando o valor do <b> data() </b>'"></p>
		<p v-destaque-local:back.delay="'orange'">Sou a diretiva Local com delay.</p>
		<p v-destaque-local.delay.toggle="'red'">Sou a diret iva Local com mais modificadores.</p>
	</div>
</template>

<script>
export default {
    data() {
        return {
            color: "green",
        };
    },

    directives: {
        "destaque-local": {
            bind(el, binding) {
                /**
                 * Teste do comentário.
                 * @param {string} color
                 * @returns {void}
                 */
                const applyColor = (color) => {
                    if (binding.arg === "back")
                        el.style.backgroundColor = color;
                    else el.style.color = color;
                };

                /**
                 * @param {string[]} colorList Lista de cores randomicas.
                 * @returns {string} Retorna uma string, referente a cor sorteada.
                 */
                const randomColor = (colorList) => {
                    const random = Math.floor(
                        Math.random() * (colorList.length + 1)
                    );

                    return colorList[random];
                };

                const colors = ["red", "green", "purple"];
                let actualColor = colors[1];

                let delayTime = 0;
                if (binding.modifiers["delay"]) delayTime = 1000;

                setTimeout(() => {
                    if (binding.modifiers["toggle"]) {
                        setInterval(() => {
                            applyColor(actualColor);
                            actualColor = randomColor(colors);
                        }, 1000);
                    }

                    applyColor(binding.value);
                }, delayTime);
            },
        },
    },
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-size: 2.5rem;
}
</style>
