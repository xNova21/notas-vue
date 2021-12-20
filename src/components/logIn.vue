<template>
  <div v-if="loading === false && auth === false">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="margin">
      <b-form-group
        id="input-group-1"
        label="Nombre de usuario:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          placeholder="Introduce tu nombre de usuario"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Tu contraseña:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="Introduce tu contraseña"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <div>{{ message }}</div>
  </div>
  <div v-else-if="loading === true"><Loading/></div>
</template>

<script>
import Loading from "./Loading.vue";
import axios from "axios";
export default {
  components: {Loading},
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      show: true,
      loading: false,
      auth: false,
      message: "",
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.inicioSesion();
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.username = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    async inicioSesion() {
      this.loading = true;
      let url = "http://localhost:5000/api/auth/login";
      let info;
      try {
        info = await axios.post(url, this.form);
        this.message = info.data.message;
        if (info.data.auth === true) {
          this.auth = true;
          this.$cookies.set("token", info.data.token, "1h");
          this.$cookies.set("loged", true, "1h");
          this.$cookies.set("logedMessage", info.data.message, "1h");
          this.$router.push("/home");
        }
        else{
          this.message = info.data.message
        }
        this.loading = false;
      } catch (error) {
        this.message = "Error de servidor";
        this.loading = false;
      }
    },
  },
};
</script>
<style scoped>
.margin {
  margin: 40px;
}
</style>