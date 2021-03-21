new Vue({
    el: "#desafio",
    data: {
        nome: "Carlos Roberto",
        idade: 22,
        linkImagem: "https://static-cdn.jtvnw.net/jtv_user_pictures/80be7eba-fea6-4f42-b3f2-1d9f03d75ed5-profile_image-300x300.png",
    },
    methods: {
        numeroAleatorio: () => (Math.random(0, 1)).toString(),
    }
});