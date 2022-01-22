<template>
  <v-app>
    <router-view name="allPageView"></router-view>
  </v-app>
</template>

<script>
import AlertMessage from "./components/Utilities/Alerts/AlertMessage";
import Loader from "./components/Utilities/Loaders/Loader";
import ModalRemove from "./components/Utilities/Modals/ModalRemove";

export default {
  name: "App",
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>