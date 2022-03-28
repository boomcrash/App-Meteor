<template>
  <v-app-bar app dark dense src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
    <v-toolbar-title>METERORO APLICACION</v-toolbar-title>
    <v-spacer></v-spacer>
    <user-logged></user-logged>
    <div>User logged</div>
    <template v-slot:extension>
      <v-tabs model="optionSelected" align-with-title>
        <v-tab v-for="option in options" :key="option.title"  :to="{name:option.nameRoute}"  v-text="option.title"></v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import UserLogged from "../../components/UserLogged/UserLogged";

export default {
  name: "HeaderView",
  components: {UserLogged},
  data(){
    return{
      optionSelected:0,
      options:[
        {
          icon:'home',
          title:'Inicio',
          nameRoute:'home'
        },
        {
          icon:'person',
          title:'Usuarios',
          nameRoute:'home.users'
        },
        {
          icon:'user-tag',
          title:'Perfiles'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>