<template>
  <div class="values">
    <div class="company_icon">
      <img src="../assets/icons/coloredIcon.svg" alt="">
    </div>
    <div class="title">
      НАШИ ЦЕННОСТИ, ПОЛИТИКА и
      ДЕЛОВАЯ СРЕДА
    </div>
    <div class="images">
      <div class="img-wrapper">
        <img class="squared_image" src="../assets/images/values1.jpg" alt="">
      </div>
      <div class="img-wrapper">
        <img src="../assets/images/values2.png" alt="">
      </div>
      <div class="img-wrapper">
        <img src="../assets/images/values3.png" alt="">
      </div>
    </div>
    <div class="footer">
      <div class="text">ОТ РЕШАЕМЫХ ЗАДАЧ К УСТОЙЧИВОМУ РАЗВИТИЮ ПРЕДПРИЯТИЯ</div>
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
  justify-content: space-around;
  gap: 4rem;
  align-items: center;

  & > div {
    height: 20vw;

    & > img {
      height: 100%;
    }
  }
}

.squared_image {
  width: 20vw;
  height: 20vw !important;
}

.text {
  text-align: center;
  background-color: rgb(138, 144, 154);
  width: 90%;
  margin: 4rem auto auto;
  font-size: 2vw;
  color: white;
  font-weight: 600;
}
</style>
