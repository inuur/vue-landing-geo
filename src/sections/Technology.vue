<template>
  <div class="technology">
    <div class="subtitle">НЕФТЕГАЗОВЫЕ ТЕХНОЛОГИИ</div>
    <div class="title">
      <div class="text">Технология геохимического мониторинга</div>
      <div class="icon">
        <img src="../assets/icons/coloredIcon.svg" alt="">
      </div>
    </div>

    <div class="blocks">
      <div class="list">
        <ul>
          <li>Разделение продукции скважин;</li>
          <li>Определение источника обводнения;</li>
          <li>Установление не герметичности ствола скважин и оборудования;</li>
          <li>Мониторинг участков закачки ПАВ;</li>
          <li>Сопровождение закачки CO2;</li>
          <li>Оптимизация систем ППД.</li>
        </ul>
      </div>
      <div class="image">
        <img src="../assets/images/tech_image.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Technology"
}
</script>

<style scoped lang="scss">

.technology {
  height: 100vh;
  scroll-snap-align: start;
}

.subtitle {
  padding-top: 2rem;
  padding-left: 3rem;
  color: #92D050;
  font-size: 1vw;
  font-weight: 600;
  letter-spacing: 0.4rem;
}

.title {
  display: flex;
  font-size: 3.5vw;
  font-weight: 700;
  padding-left: 3rem;
}

.image {
  width: 100%;
  height: 100%;
}

.blocks {
  display: flex;

  img {
    width: 100%;
    display: block;
    margin: auto;
  }

  .list {
    ul {
      padding-left: 10rem;
      font-size: 1.5vw;
      color: rgb(101, 113, 118);
    }
  }
}

.icon {
  img {
    width: 80%;
  }
}

</style>
