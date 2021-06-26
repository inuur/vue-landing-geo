<template>
  <div>
    <section id="company_name">
      <CompanyName></CompanyName>
      <Mission></Mission>
      <Values></Values>
      <History></History>
      <Tasks></Tasks>
      <Benefits></Benefits>
    </section>
  </div>
</template>

<script>
import CompanyName from "../sections/CompanyName";
import Mission from "../sections/Mission";
import History from "../sections/History";
import Tasks from "../sections/Tasks";
import Values from "../sections/Values";
import Benefits from "../sections/Benefits";

export default {
  name: "MainPage",
  components: {
    Benefits,
    Values,
    Tasks,
    History,
    Mission,
    CompanyName
  }
}
</script>

<style scoped>

</style>
