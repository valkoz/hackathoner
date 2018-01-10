<template>
  <div class="hello">
  <b-navbar toggleable="md" type="dark" class="navbar" >
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-navbar-brand href="#">Hackathoner</b-navbar-brand>
    <b-navbar-brand href="/static/about.html">About</b-navbar-brand>
    <b-button v-b-modal.modal_login variant="success" style="margin-left: 50px;">Войти</b-button>
    <b-button v-b-modal.modal_register variant="warning" style="margin-left: 10px;">Регистрация</b-button>
    <b-button variant="danger" style="margin-left: 10px;" @click="onLogout" >Выйти</b-button>
  </b-navbar>

  <b-modal id="modal_login" ref = "loginRef" style="text-align:center;" hide-footer title="Войти">
    <b-form-input v-model="user_login"
                  type="text"
                  required
                  placeholder="Введите логин"></b-form-input>
    <b-form-input v-model="user_password"
                  type="password"
                  required
                  style="margin-top: 50px;"
                  placeholder="Введите пароль"></b-form-input>
    <b-button variant="success" @click="onLogin" style="margin-top: 50px;"> OK </b-button>

  </b-modal>

  <b-modal id="modal_register" ref = "registerRef" style="text-align:center;"  hide-footer title="Регистрация">
    <b-form-input v-model="user_login"
                  type="text"
                  required
                  placeholder="Введите логин"></b-form-input>
    <b-form-input v-model="user_password"
                  type="password"
                  style="margin-top: 50px;"
                  required
                  placeholder="Введите пароль"></b-form-input>
    <b-button variant="success" @click="onRegister" style="margin-top: 50px;"> OK </b-button>
  </b-modal>

<b-row class="maincontent">
        <b-col xl="3" lg="4" md="12" sm="12" v-for="(hack, index) in hacks" :key="hack.hack_name">
          <card v-bind:imglink="hack.img_link"
                v-bind:text="hack.description"
                v-bind:title="hack.name"
                v-bind:id="hack.id + ''">     <!-- Это костыль, число 2 увеличится при удалении записи!!! надо решать че почем с роутером-->
          </card>
        </b-col>
    </b-row>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'hello',
  components: {
    Card
  },
  computed: {
    hacks () {
      return this.$store.state.hacks
    }
  },
  methods: {
    onLogin: function() {
      this.$store.dispatch('login', {name: this.user_login, pass: this.user_password})
      this.$refs.loginRef.hide()
    },
    onRegister: function() {
      this.$store.dispatch('register', {name: this.user_login, pass: this.user_password})
      this.$refs.registerRef.hide()
    },
    onLogout: function() {
      this.$store.dispatch('logout')
    }
  }
}

</script>

<style>
.maincontent {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
.navbar {
  background-color: #5085A5;
}
.auth_button {
  padding-left: 10px;
}
</style>
