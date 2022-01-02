import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.directive("destaque", {
    bind(el, binding) {
        let delayTime = 0;
        if (binding.modifiers["delay"]) delayTime = 1000;

        setTimeout(() => {
            if (binding.arg === "back")
                el.style.backgroundColor = binding.value;
            else el.style.color = binding.value;
        }, delayTime);
    },
});

new Vue({
    render: (h) => h(App),
}).$mount("#app");
