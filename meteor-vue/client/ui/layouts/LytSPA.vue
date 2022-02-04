<template>
<v-container fluid>
  <header-view></header-view>
  <v-main id="main_section">
    <!--AQUI VA EL ROUTER VIEW -->
    <router-view name="sectionView"></router-view>
  </v-main>
  <footer-view></footer-view>
</v-container>
</template>

<script>
import HeaderView from "./shared/HeaderView";
import FooterView from "../components/UserLogged/FooterView";
import Home from "../../view/Home/Home";
export default {
  name: "LytSPA",
  components:{
    HeaderView,
    FooterView,
    Home
  }
}
</script>

<style scoped>

</style>