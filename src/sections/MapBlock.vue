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

.map-wrapper {
  max-width: 100vw;
  height: 40vh;
  background-color: antiquewhite;
}

</style>
