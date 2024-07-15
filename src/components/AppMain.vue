<!-- AppMain.vue -->
<script>
import AppCard from "./AppCard.vue";

export default {
  name: "AppMain",
  components: {
    AppCard,
  },
  props: ["movieList", "tvSeriesList", "getFlagClass", "convertVoteToFiveScale", "fullImageUrl"],
};
</script>

<template>
  <main>
    <div class="container">
      <h2 v-if="movieList.length > 1">FILM</h2>
      <AppCard
        v-for="film in movieList"
        :key="film.id"
        :info="film"
        :getFlagClass="getFlagClass"
        :convertVoteToFiveScale="convertVoteToFiveScale"
        :fullImageUrl="fullImageUrl"
      />
    </div>
    <div class="container">
      <h2 v-if="tvSeriesList.length > 1">SERIE TV</h2>
      <AppCard
        v-for="series in tvSeriesList"
        :key="series.id"
        :info="series"
        :getFlagClass="getFlagClass"
        :convertVoteToFiveScale="convertVoteToFiveScale"
        :fullImageUrl="fullImageUrl"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../src/style/partials/variables.scss" as *;

main {
  background-color: $bg_color;

  h2 {
    width: 100%;
    margin-top: 20px;
    color: $text_color;
  }
}
</style>
