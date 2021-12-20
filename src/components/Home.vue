<template>
  <div v-if="loged === `true`">
    <h1 class="logedM">{{ logedMessage }}</h1>
    <p>Accede a tus notas.<button @click="goNotas">Notas</button></p>
    <p>
      Podrás crear nuevas notas, modificar las existentes o borrar las antiguas.
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logedMessage: "",
      loged: null,
    };
  },
  name: "Home",
  methods: {
    getCookie() {
      this.logedMessage = this.$cookies.get("logedMessage");
      this.loged = this.$cookies.get("loged");
    },
    goNotas(){
      this.$router.push("/notas")
  }
  },
  beforeMount() {
    this.getCookie();
  },
  
};
</script>
<style scoped>
.logedM {
  margin: 40px;
}
</style>
