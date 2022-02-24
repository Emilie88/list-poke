<template>
  <v-app>
    <v-container>
      <h1>Our Pokemons</h1>
      <PokeList />
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
import PokeList from "@/components/PokeList.vue";

export default {
  name: "HomeView",
  components: {
    PokeList,
  },
};
</script>
