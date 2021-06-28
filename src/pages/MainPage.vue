<template>
  <div>
    <section id="company_name">
      <CompanyName></CompanyName>
      <Mission></Mission>
      <Values></Values>
      <History></History>
      <Tasks></Tasks>
      <Benefits></Benefits>
      <Interaction></Interaction>
      <Work></Work>
      <SuccessHistory></SuccessHistory>
      <Demonstration></Demonstration>
      <Technology></Technology>
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
import Interaction from "../sections/Interaction";
import Work from "../sections/Work";
import SuccessHistory from "../sections/SuccessHistory";
import Demonstration from "../sections/Demonstration";
import Technology from "../sections/Technology";

export default {
  name: "MainPage",
  components: {
    Technology,
    Demonstration,
    SuccessHistory,
    Work,
    Interaction,
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
