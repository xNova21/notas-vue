<template>
  <div v-if="loading === true">
    <Loading />
  </div>
  <div v-else-if="loading === false">
      <template>
  <div class="margin">
      <button>Nueva nota</button>
   <table class="table">
       <thead>
           <tr>
        <th>Título</th>
        <th>Última modificación</th>
        <th>Detalle</th>
           </tr>
       </thead>
       <tbody v-for="nota in notas" :key="nota.id">
           <tr>
           <td>{{nota.header }}</td>
           <td>{{nota.updatedAt  }}</td>
           <td><button @click="setIdNota" v-bind:value="nota._id">Ver nota</button></td>
           <td></td>
           </tr>
       </tbody>

   </table>
  </div>
</template>
  </div>
</template>
<script>
import Loading from "./Loading.vue";
import axios from "axios";
export default {
  data() {
    return {
      loading: true,
      notas:[]
    };
  },
  methods: {
    async pedirNotas() {
      let info;
      try {
        info = await axios.get("http://localhost:5000/api/router/notas", {
          headers: { token: this.token },
        });
        this.notas = info.data.notas;
        this.loading = false
        console.log((this.notas[0]));
      } catch (error) {
        console.log(error);
      }
    },
    getCookie() {
      this.token = this.$cookies.get("token");
      this.loged = this.$cookies.get("loged");
      if (this.loged !== `true`) {
        this.$router.push("./");
      }
    },
    setIdNota(e){
        e.preventDefault();
        window.localStorage.notaId = e.target.value
        this.$router.push("/nota")
    }
  },
  beforeMount() {
    this.getCookie();
  },
  mounted() {
    this.pedirNotas();
  },
  name: "Notas",
  components: { Loading },
};
</script>
<style scoped>
.margin{
    margin: 30px
}
</style>