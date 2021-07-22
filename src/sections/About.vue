<template>
<div class="about">
  <div class="container">
    <div class="images">
      <div class="square"></div>
      <div class="images-wrapper">
        <img src="../assets/images/about1.jpg" class="img1" alt="">
        <img src="../assets/images/about2.jpg" class="img2" alt="">
        <img src="../assets/images/about3.jpg" class="img3" alt="">
      </div>
    </div>
    <div class="description">
      <img src="../assets/icons/coloredIcon.svg" class="icon" alt="">
      <div class="underline"></div>

      <div class="text-wrapper">
        <div class="title">
          Комплексные исследования <br> пластового флюида
        </div>
        <div class="text">
          <p>Компания <span>GeoIndicator</span> оказывает услуги в области комплексных исследований пластовых флюидов, демонстрирует технологию геохимического мониторинга для решения различных задачи нефтедобычи.
          </p>
          <p>За годы работы по данному направлению накоплена обширная база по основным гидрогеологическим комплексам, вмещающим залежи углеводородов, аналитическая работа осуществляется на основе  имеющейся информации и актуализации данных по каждому конкретному месторождению.
          </p>

          <p>
            Геохимические исследования пластовых систем это комплексная технология, находящаяся на стыке геологии, химии и разработки месторождений, особенностей работы скважин, и применения современных методов исследований там, где традиционные методы не возможны.
          </p>

          <p>
            Компания основана в 2021 году, в Казани, выпускниками Казанского Федерального Университета, состоит из молодых и опытных специалистов, которые ежегодно являются активными участниками международных и всероссийских конференций и форумов, что позволяет следить за актуальными новостями в интересующей области  и самим задавать тренды.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped lang="scss">

.about {
  height: 100vh;
  scroll-snap-align: start;
}

.container {
  display: flex;
  height: 100vh;

  & > div {
    width: 100%;
  }

  .images {

    $img_size: min(40vw, 40vh);
    $gap: min(10vw, 10vh);

    & > .images-wrapper {
      display: grid;
      grid-template-columns: $img_size $img_size;
      column-gap: 2rem;
      row-gap: 2rem;

      margin-top: $gap;
      margin-left: $gap;

      & > img {
        width: $img_size;
        height: $img_size;
      }

      .img1 {
        grid-row: 1;
        grid-column: 2;
      }

      .img2 {
        grid-row: 2;
        grid-column: 1;
      }

      .img3 {
        grid-row: 2;
        grid-column: 2;
      }
    }

    position: relative;

    .square {
      position: absolute;
      width: min(50vw, 50vh);
      height: min(50vw, 50vh);
      background-color: #92D050;
    }
  }

  .offset-2 {
    flex-grow: 2;
  }

  .description {
    img {
      display: block;
      margin: 2rem auto auto;
      width: 45%;
    }

    .underline {
      border-bottom: #92D050 solid 3px;
      width: 90%;
      margin: auto;
    }

    .text-wrapper {
      width: 90%;
      margin: auto;
      height: 40vh;
      color: rgb(89, 89, 89);


      .title {
        font-size: 2vw;
        font-weight: bold;
      }

      .text {
        margin-top: 2rem;
        font-size: 1vw;

        span {
          font-weight: bold;
        }

        p {
          margin-bottom: 2rem;
        }
      }
    }
  }
}


</style>
