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
      'center': [55.823112253116484, 49.06073442766759],
      'zoom': 12
    });
    DG.marker([55.823112253116484, 49.06073442766759], {}).addTo(this.map);
  },
  beforeDestroy() {
    if (this.map) this.map.remove();
  }
};
</script>
