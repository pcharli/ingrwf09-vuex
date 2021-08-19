<template>
  <div class="about">
    <h1>Se connecter</h1>
    <form action="">
      <input type="text" placeholder="login" v-model="user.login">
      <input type="password" placeholder="password" v-model="user.password">
      <button @click.prevent="connexion">Se connecter</button>
      </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
    user :{
        login: "",
        password:""
      }
    }
  },
  methods:{
    connexion() {
      if(this.user.login == 'admin' && this.user.password == 'pass') {
        this.$store.commit('connexion', true)
        this.$router.go(-1)
      }
      else {
        this.$store.commit('connexion', false)
      }
    }
  }
}
</script>