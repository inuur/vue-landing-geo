<template>
  <div>
    <section id="company_name">
      <CompanyName></CompanyName>
      <Mission></Mission>
      <History></History>
    </section>
  </div>
</template>

<script>
import CompanyName from "../sections/CompanyName";
import Mission from "../sections/Mission";
import History from "../sections/History";

export default {
  name: "MainPage",
  components: {
    History,
    Mission,
    CompanyName
  }
}
</script>

<style scoped>

</style>
