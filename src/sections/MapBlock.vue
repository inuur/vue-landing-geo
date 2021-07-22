<template>
  <div class="map-wrapper">
    <dg-map />
  </div>
</template>

<script>
import DgMap from "../components/DgMap";

export default {
  name: "MapBlock",
  components: {
    DgMap
  }
}
</script>

<style scoped lang="scss">

@media (max-width: 1024px) {
  .map-wrapper {
    height: 20vh;
  }
}

@media (min-width: 1205px) {
  .map-wrapper {
    height: 40vh;
  }
}

.map-wrapper {
  background-color: antiquewhite;
}

</style>
