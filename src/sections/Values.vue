<template>
  <div class="values">
    <div class="company_icon">
      <img src="../assets/icons/coloredIcon.svg" alt="">
    </div>
    <div class="title">
      НАШИ ЦЕННОСТИ, ПОЛИТИКА,
      ДЕЛОВАЯ СРЕДА
    </div>
    <div class="images">
      <div class="img-wrapper">
        <img class="squared_image photo" src="../assets/images/values1.jpg" alt="">
      </div>
      <div class="img-wrapper">
        <img class="value" src="../assets/images/values2.png" alt="">
      </div>
      <div class="img-wrapper">
        <img class="value" src="../assets/images/values3.png" alt="">
      </div>
    </div>
    <div class="footer">
      <div class="text">
        <div class="top-left"></div>
        <div class="top-right"></div>
        <div class="bottom-left"></div>
        <div class="bottom-right"></div>
        ОТ РЕШАЕМЫХ ЗАДАЧ К УСТОЙЧИВОМУ РАЗВИТИЮ ПРЕДПРИЯТИЯ
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Values"
}
</script>


<style scoped lang="scss">

.values {
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > * {
    width: 100%;
  }
}

.company_icon > img {
  width: 15vw;
  display: block;
  margin: 1rem auto auto;
}

.title {
  font-size: 3.5vw;
  color: #92D050;
  font-weight: 600;
  text-align: center;
}

.images {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 4rem;
  align-items: center;
}

.squared_image {
  width: 20vw;
  height: 20vw !important;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  text-align: center;
  color: rgb(138, 144, 154);
  display: inline-block;
  width: auto;
  margin: 4rem auto auto;
  font-size: 2vw;
  font-weight: 600;

  position: relative;

  .top-left {
    top: -1rem;
    left: -5rem;
    width: 2vw;
    height: 2vw;
    position: absolute;
    border-top: #92D050 solid .5vw;
    border-left: #92D050 solid .5vw;
  }

  .bottom-right {
    right: -5rem;
    bottom: -1rem;
    width: 2vw;
    height: 2vw;
    position: absolute;
    border-right: #92D050 solid .5vw;
    border-bottom: #92D050 solid .5vw;
  }
}

.value {
  height: 15vw !important;
}
</style>
