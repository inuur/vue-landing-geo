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
      <Footer></Footer>
      <Contacts></Contacts>
      <MapBlock></MapBlock>
      <LastFooter></LastFooter>
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
import Footer from "../sections/Footer";
import Contacts from "../sections/Contacts";
import MapBlock from "../sections/MapBlock";
import LastFooter from "../sections/LastFooter";

export default {
  name: "MainPage",
  components: {
    LastFooter,
    Contacts,
    Footer,
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
    CompanyName,
    MapBlock
  }
}
</script>

<style scoped>

</style>
