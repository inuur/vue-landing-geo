<template>
  <div class="mission">
    <div class="box">
      <div class="title">
        <div class="title_header">Миссия <br> компании</div>
        <div class="title_description">Комплексные исследования <br> пластового флюида и <br> управление разработкой
          <br> месторождений
        </div>
      </div>
      <div class="text">
        <div class="description">
          <div class="description-wrapper">
            <div class="top-left"></div>
            <div class="top-right"></div>
            <div class="bottom-left"></div>
            <div class="bottom-right"></div>
            <p>Мы помогаем быть лучшими в <br> рациональном, эффективном и <br> экологичном освоении запасов жидких <br>
              углеводородов.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mission"
}
</script>

<style scoped lang="scss">

.mission {
  height: 100vh;
  display: flex;
  align-items: center;
  scroll-snap-align: start;
  background: url("../assets/background/missionBackground.png") no-repeat center;
  background-size: cover;
}

.box {
  display: flex;

  .title {
    width: 40vw;
    height: 100vh;
    background-color: rgba(121, 209, 85, .7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    &_header {
      font-size: 4vw;
      font-weight: bold;
    }

    &_description {
      margin-top: 2rem;
      font-size: 1.55vw;
      text-align: left;
    }
  }

  .text {
    width: 59vw;
    display: flex;
    flex-direction: column-reverse;

    .description {

      display: flex;
      justify-content: center;
      align-items: center;

      &-wrapper {

        p {
          padding: 3rem;
        }

        position: relative;
        color: white;
        font-size: 1.55vw;
        margin-bottom: 3rem;

        .top-left {
          top: 1rem;
          width: 2vw;
          height: 2vw;
          position: absolute;
          border-top: white solid .5vw;
          border-left: white solid .5vw;
        }

        .bottom-right {
          right: -1rem;
          bottom: 2rem;
          width: 2vw;
          height: 2vw;
          position: absolute;
          border-right: white solid .5vw;
          border-bottom: white solid .5vw;
        }
      }
    }
  }
}


</style>
