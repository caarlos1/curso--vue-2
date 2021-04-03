<template>
  <div class="citacao">
    <slot name="autor"></slot>
    <slot name="texto"></slot>
    <slot name="fonte"></slot>
  </div>
</template>

<script>
export default {
  // Métodos que executam quando ativados e desativados os componentes dinâmicos.
  activated() {
    // eslint-disable-next-line
    console.log("Citação: activated");
  },
  deactivated() {
    // eslint-disable-next-line
    console.log("Citação: deactivated");
  },
};
</script>

<style scoped>
.citacao {
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 450px;
}
</style>
