<template>
  <div class="demonstration">
    <div class="company_icon">
      <img src="../assets/icons/coloredIcon.svg" alt="">
    </div>
    <div class="blocks">
      <div class="left">
        <div class="title">ДЕМОНСТРАЦИЯ</div>
        <div class="subtitle">В чем суть технологии?</div>
        <ul class="main_list">
          <li>Концептуально существуют 3 типа скважин для исследований (рисунок):
            <ul class="sublist">
              <li>опорные добывающие скважины,</li>
              <li>скважины с одновременной добычей с  нескольких пластов,</li>
              <li>нагнетательные скважины.</li>
            </ul>
          </li>
          <li>Остальные возможные ситуации в скважинах являются частными случаями, выяснение которых и является целью работ.</li>
        </ul>
      </div>
      <div class="right">
        <div class="image-wrapper">
          <img src="../assets/images/demonstration_image.png" alt="">
          <div class="image_description">
            Рисунок  – Скважины для исследований: скв.1 и скв.2
            <br> – опорные добывающие скважины; скв.3 –
            <br> добывающая скважина с работой общим
            <br> фильтром на 2 пласта; скв.4 – нагнетательная
            <br> скважина; 1 и 2 – номер объекта разработки
          </div>
        </div>
      </div>
    </div>

    <div class="circle gray circle1"></div>
    <div class="circle gray circle2"></div>
    <div class="circle green circle3"></div>


  </div>
</template>

<script>
export default {
  name: "Demonstration"
}
</script>

<style scoped lang="scss">

.company_icon > img {
  width: 15vw;
  display: block;
  margin: auto;
  padding-top: 2rem;
}

.demonstration {
  position: relative;
  height: 100vh;
  overflow: hidden;
  scroll-snap-align: start;
}

.blocks {
  display: flex;
  justify-content: space-between;
  padding-left: 10rem;
  padding-right: 10rem;

  & > * {
    width: 50%;
  }
}

.title {
  font-weight: 600;
  color: #92D050;
  font-size: 3.5vw;
}

.subtitle {
  font-weight: 600;
  color: rgb(77, 85, 86);
  font-size: 2.5vw;
}

.main_list {
  padding-top: 5rem;
  font-size: 1.5vw;
}

.sublist {
  margin-left: 5rem;
  list-style: none;
  counter-reset:  item;
  padding-top: 1rem;
  padding-bottom: 1rem;

  li:before {
    content: counter(item) ') ';
    counter-increment: item;
  }
}

.image-wrapper {
  & > img {
    width: 80%;
    display: block;
    margin: auto;
    padding-top: 10%;
  }
}

.image_description {
  text-align: center;
  font-size: 1.2vw;
  padding-top: 2rem;
  font-weight: 600;
}

.circle {
  border-radius: 50%;
  position: absolute;
  z-index: -1;
}

.gray {
  background-color: rgb(240, 242, 244);
}

.green {
  background-color: #92D050;
}

.circle1 {
  width: 20vw;
  height: 20vw;
  bottom: -10vw;
  left: 40%;
}

.circle2 {
  width: 20vw;
  height: 20vw;
  top: -10vw;
  right: -10vw;
}

.circle3 {
  width: 10vw;
  height: 10vw;
  top: calc(50% - 7vw);
  right: 7%;
}

</style>
