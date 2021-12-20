<template>
  <div v-if="loged === null" class="nav">
    <b-navbar toggleable="lg" type="dark" variant="warning" class="fixed-top">
      <b-navbar-brand href="#" class="nav-title">Notas</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" class="burguer"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/" class="nav-link">Inicio de sesión</b-nav-item>
          <b-nav-item href="/signUp" class="nav-link">Registro</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="bottom-nav"></div>
  </div>
  <div v-else-if="loged === `true`" class="nav">
    <b-navbar toggleable="lg" type="dark" variant="warning" class="fixed-top">
      <b-navbar-brand href="#" class="nav-title">Notas</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" class="burguer"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/home" class="nav-link"
            >Inicio</b-nav-item>
          <b-nav-item href="/notas" class="nav-link">Mis notas</b-nav-item>
          <b-nav-item @click="logOut" href="/" class="nav-link">Cerrar sesión</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="bottom-nav"></div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return { loged: null };
  },
  methods: {
    login() {
      this.loged = this.$cookies.get("loged");
      // console.log(loged)
    },
    logOut() {
      this.$cookies.remove("loged");
      this.$cookies.remove("token");
      this.$cookies.remove("logedMessage");
    },
  },
  mounted() {
    this.login();
  },
  beforeMount() {
    this.login();
  },
};
</script>
<style >
.nav-title {
  margin-left: 30px;
}
</style>