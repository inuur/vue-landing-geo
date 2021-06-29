<template>
  <div style="width:100%;height:100%;"></div>
</template>

<script>
import DG from "2gis-maps";

export default {
  data: () => ({
    map: null
  }),
  mounted() {
    this.map = new DG.map(this.$el, {
      'center': [55.79843, 49.11012],
      'zoom': 16
    });
    DG.marker([55.79843, 49.11012], {}).addTo(this.map);
  },
  beforeDestroy() {
    if (this.map) this.map.remove();
  }
};
</script>
