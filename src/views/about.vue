<template>
  <div>555 {{ COUNTER }}</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "about",
  created() {
    console.log(34);
  },
  computed: {
    ...mapGetters(["COUNTER"])
  }
};
</script>

<style></style>
