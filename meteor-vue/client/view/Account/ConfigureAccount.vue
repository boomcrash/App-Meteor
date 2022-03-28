<template>
  <v-container>
      <v-row>
        <v-col>
              <div class="headline">Configurar Cuenta</div>
        </v-col>
      </v-row>
    <v-row>
      <v-col cols="12" xs="10" sm="12" md="6" lg="6" xl="5">
              <general-data/>
      </v-col>
      <v-col cols="12" xs="10" sm="12" md="6" lg="6" offset-xl="1" xl="5">
              <update-password/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import GeneralData from "../../ui/components/ConfigureAccount/GeneralData";
  import UpdatePassword from "../../ui/components/ConfigureAccount/UpdatePassword";
  export default {
    name: "ConfigureAccount",
    components: {UpdatePassword, GeneralData}
  }
</script>

<style scoped>

</style>