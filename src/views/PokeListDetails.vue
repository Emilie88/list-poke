<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="6">
          <router-link to="/"> Back</router-link>
          <v-card class="mt-4" max-height="600">
            <v-card-title class="firstLetterUppercase">{{
              pokeDetails.name
            }}</v-card-title>
            <v-img src="../assets/pokemon.jpg" max-height="500" />
          </v-card>
        </v-col>
        <v-col cols="6" class="mt-12">
          <h3>Abilities :</h3>
          <div
            v-for="(item, index) in pokeDetails.abilities"
            :key="index"
            class="firstLetterUppercase"
          >
            {{ item.ability.name }}
          </div>
          <h3>Types :</h3>
          <div
            v-for="(item, index) in pokeDetails.types"
            :key="index"
            class="firstLetterUppercase"
          >
            {{ item.type.name }}
          </div>
          <h3>Weight :</h3>
          <div>{{ pokeDetails.weight }}</div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: "PokeListDetails",
  computed: {
    pokeDetails() {
      return this.$store.getters["pokeDetails"];
    },
  },
};
</script>
