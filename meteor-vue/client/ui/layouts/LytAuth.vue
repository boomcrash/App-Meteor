<template>
  <v-responsive>
  <v-row>
    <v-col xs="12" sm="8" md="4" class="d-flex flex-column justify-space-around pa-12">
      <div class="text-center">
        <img src="https://i.ibb.co/rpBp5c8/vue-meteor.png"  alt="Vuetify" height="180px" width="auto"/>
      </div>
      <div class="text-center">
        <img src="https://i.ibb.co/1GvnVwc/asus.png"  alt="powered" id="poweredeLogo" height="35px"/>
      </div>
    </v-col>
    <v-col xs="12" sm="4" md="8" class="right-side d-flex flex-column justify-center">
        <div class="display-3 font-weight-medium mr-10 text-right white--text">
        PROYECTO METEORO
        </div>
    </v-col>
  </v-row>
  </v-responsive>
</template>

<script>
export default {
  name: "LytAuth",
}
</script>

<style scoped>
.display-3{
  z-index: 2;
  margin-top: 350px;
}
.right-side{
  background-image: url("https://i.ibb.co/R729N5B/meteor.jpg");
  background-size:cover;
  color:var(--body-color);
  height: 104vh;
  position: relative;
}

html {
  overflow-y: hidden !important;
}
</style>