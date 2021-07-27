<template>
  <div class="footer">
    <div class="address-container">
      <span class="address">Фактический адрес: 423458, Республика Татарстан, г. Альметьевск, ул. Ленина, дом 13, офис 309</span>
      <span class="address">Юридический адрес: 420033, Республика Татарстан, г. Казань, ул. Батыршина, дом 27, офис 3</span>
    </div>
    <span>© Geoindicator  2021</span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "LastFooter"
}
</script>

<style scoped lang="scss">
.footer {
  height: 8vh;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, .9);
  color: rgb(255, 255, 255, .5);
  font-size: 1rem;

  & > * {
    text-align: center;
    width: 33%;
  }

  .address-container {
    display: flex;
    flex-direction: column;
    text-align: left !important;
    padding-left: 2rem;

    .address {
      font-size: 0.8rem;
    }
  }

}
</style>
