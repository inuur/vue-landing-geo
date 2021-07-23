<template>
  <div class="history">
    <div class="company_icon">
      <img src="../assets/icons/coloredIcon.svg" alt="">
    </div>
    <div class="history-wrapper">
      <div class="history_title">
        <div class="title">ИСТОРИЯ СОЗДАНИЯ</div>
        <div class="subtitle">ОТ ИДЕИ ДО ТЕХНОЛОГИИ</div>
      </div>
      <div class="images">
        <div class="image">
          <div class="image-wrapper">
            <img src="../assets/images/history1.jpg" alt="">
            <div class="description">СТАРТАП «ГЕОХИМИЧЕСКИЕ <br> ТЕХНОЛОГИИ»</div>
          </div>
          <div class="line"></div>
          <div class="circle"></div>
          <div class="year">2019</div>
        </div>
        <div class="image">
          <div class="image-wrapper">
            <img src="../assets/images/history2.jpg" alt="">
            <div class="description">НАРАБОТКА БАЗЫ ДАННЫХ <br> И ПИЛОТНЫХ ПРОЕКТОВ</div>
          </div>
          <div class="line"></div>
          <div class="circle"></div>
          <div class="year">2020</div>
        </div>
        <div class="image">
          <div class="image-wrapper">
            <img src="../assets/images/history3.png" alt="">
            <div class="description">ПРОМЫШЛЕННОЕ <br>ВНЕДРЕНИЕ ТЕХНОЛОГИИ</div>
          </div>
          <div class="line"></div>
          <div class="circle"></div>
          <div class="year">2021</div>
        </div>
      </div>
      <hr>


    </div>
  </div>
</template>

<script>
export default {
  name: "History"
}
</script>

<style scoped lang="scss">

.company_icon > img {
  width: 15vw;
  display: block;
  margin: 1rem auto auto;
}

.history_title {
  padding-left: 5rem;
  font-weight: 600;
}

.title {
  color: #92D050;
  font-size: 3.5vw;
}

.subtitle {
  font-size: 1vw;
  color: rgb(89, 89, 89);
}

.history {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: start;

  & > * {
    width: 100%;
  }

  .images {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
    gap: 10rem;

    & > .image {
      & > .image-wrapper > img {
        width: 16vw;
        height: min(35vh, 20vw);
        border: 1px solid rgb(0, 0, 0, 0.2);
      }
    }

    .line {
      margin: auto;
      height: 4vh;
      width: 8px;
      background-color: rgb(255, 192, 0);
    }

    .circle {
      background-color: rgb(255, 192, 0);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin: auto;
    }

    .year {
      text-align: center;
      color: rgb(255, 192, 0);
      font-size: 1.5vw;
      font-weight: 600;
    }
  }
}

.description {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1vw;
  text-align: center;
}

.image-wrapper {
  height: auto;
  border: #52E669 2px solid;
}

hr {
  width: 90%;
  margin: 3vw auto;
}

</style>
