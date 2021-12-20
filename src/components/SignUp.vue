<template>
    <h1>Sign Up<button @click="getCookie">click</button>
    </h1>
    
</template>
<script>
export default {
    name: "SignUp",
    methods:{
     getCookie(){
      const token = this.$cookies.get("token");
      console.log(token);
     }}
}
</script>