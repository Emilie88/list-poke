<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3" v-for="(item, index) in pokeList" :key="index">
        <v-card @click="getPokeDetails((index += 1))">
          <v-card-title class="firstLetterUppercase">{{
            item.name
          }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <div class="text-center mt-4">
      <v-pagination
        v-model="currentPage"
        :length="totalPages"
        :total-visible="10"
        @input="handlePageChange"
      ></v-pagination>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "PokeList",

  data() {
    return {
      pokeList: [],
      pokeApi: {},
      currentPage: 1,
      totalPages: 0,
      offset: 0,
    };
  },
  created() {
    this.getPokeList();
  },
  methods: {
    async getPokeList() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${this.offset}`,
      );
      this.pokeApi = response.data;
      this.pokeList = response.data.results;
      let countPokePerPage = response.data.count / 20;
      this.totalPages = Math.round(countPokePerPage) + 1;

      console.log(response.data);
    },
    handlePageChange(value) {
      this.currentPage = value;
      this.next();
    },
    async next() {
      this.offset = (this.currentPage - 1) * 20;
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${this.offset}`,
      );
      console.log(response);
      this.pokeList = response.data.results;
    },
    async getPokeDetails(index) {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${index}/`,
      );
      this.$store.commit("setPokeDetails", response.data);

      this.$router.push({ name: "PokeListDetails" });
    },
  },
};
</script>
<style>
.firstLetterUppercase {
  text-transform: capitalize;
}
</style>
