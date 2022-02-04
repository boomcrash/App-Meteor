<template>
  <div class="login-wrapper">
    <div class="title secondary--text">Bienvenido</div>
    <div class="display-1 mb-0 secondary--text">INICIAR SESION</div>
    <v-form @submit.prevent="loguear" autocomplete="nope">
      <v-text-field id="inputUser" v-model="user.userOrEmail" autocomplete="off"
                    label="USUARIO" name="email" prepend-icon="person" color="primary" type="text">
      </v-text-field>
      <v-text-field id="inputPassword" v-model="user.password" autocomplete="off"
                    label="CONTRASEÑA" name="password" prepend-icon="lock"  type="password">
      </v-text-field>
      <div class="d-flex justify-end">
        <v-btn color="primary" text :to="{name:'forgotPassword'}" text small>
          ¿olvide mi contraseña?
        </v-btn>
      </div>
      <div class="d-flex justify-center">
      <v-btn type="submit" rounded color="primary" transition="fade">INGRESAR</v-btn>
      </div>
      <alert-message ref="refAlertLogin"></alert-message>
    </v-form>
  </div>
</template>

<script>
import AlertMessage from "../../ui/components/Utilities/Alerts/AlertMessage";

export default {
  name: "login",
  components:{
    AlertMessage
  },
  data(){
    return{
      user:{
        userOrEmail:null,
        password:null
      }
    }
  },
  methods: {
    loguear() {
      console.log("usuario:",this.user);
    }
  }
}
</script>

<style scoped>
.login-wrapper{
  margin-top: 45px;

}
</style>