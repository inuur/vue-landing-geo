<template>
  <div class="benefits">
    <div class="company_icon">
      <img src="../assets/icons/coloredIcon.svg" alt="">
    </div>
    <div class="benefits_flex">
      <div class="benefits_block">
        <div class="list-wrapper">
          <div class="list_title-wrapper">
            <div class="left_icon">
              <img src="../assets/icons/benefits-icon1.svg" alt="" class="icon">
            </div>
            <div class="list_title left_title">Экономия, быстрота</div>
          </div>
          <div class="left_list">
            <ul>
              <li class="green">Без остановки скважин</li>
              <li class="blue">Без подъёма глубинно-насосного <br> оборудования</li>
              <li>Без геофизических исследований</li>
            </ul>
          </div>
        </div>
        <div class="list-wrapper">
          <div class="list_title-wrapper">
            <div class="left_icon">
              <img src="../assets/icons/benefits-icon3.svg" alt="" class="icon">
            </div>
            <div class="list_title left_title">Деятельность</div>
          </div>
          <div class="left_list">
            <ul>
              <li class="green">Инновационная технология</li>
              <li class="blue">Качественные решения широкого спектра <br> задач</li>
              <li>Уникальный источник информации</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="benefits_middle_block">
        <div class="main_aspects">
          <div class="second_line">
            <span class="black_text">Преимущества</span>
          </div>
        </div>
      </div>
      <div class="benefits_block">
        <div class="list-wrapper">
          <div class="list_title-wrapper">
            <div class="list_title right_title">Масштабируемость</div>
            <div class="right_icon">
              <img src="../assets/icons/benefits-icon2.svg" alt="" class="icon">
            </div>
          </div>
          <div class="right_list">
            <ul>
              <li class="green">Нам нужна только проба добываемой и закачиваемой жидкости</li>
              <li class="blue">Отсутствие ограничений по глубине скважин</li>
              <li>Применение технологии в любом регионе</li>
            </ul>
          </div>
        </div>
        <div class="list-wrapper">
          <div class="list_title-wrapper">
            <div class="list_title right_title">Команда</div>
            <div class="right_icon">
              <img src="../assets/icons/benefits-icon4.svg" alt="" class="icon">
            </div>
          </div>
          <div class="right_list">
            <ul>
              <li class="green">Высокая скорость исследований и выдачи заключений</li>
              <li class="blue">Профессиональная и отзывчивая команда</li>
              <li>Нацеленность на решение задач заказчика</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Benefits"
}
</script>

<style scoped lang="scss">

@media (max-width: 1024px) {
  .benefits {
    height: 40vh;
  }
}

@media (min-width: 1205px) {
  .benefits {
    height: 100vh;
  }
}

.company_icon > img {
  width: 15vw;
  display: block;
  margin: 1rem auto auto;
}

.benefits {
  background-color: rgb(235, 255, 235);
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
}

.title {
  font-size: 3.5vw;
  font-weight: 600;
  color: #92D050;
  padding-left: 5rem;
}

.benefits_flex {
  display: flex;
  justify-content: center;
  height: 60vh;
  margin: auto;

  & > .benefits_block {
    width: 33%;
  }
}

.benefits_middle_block {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  margin-right: 2rem;

  & > .main_aspects {
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
    background-color: #92D050;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: white;
    font-size: 1.25vw;
    text-align: center;
    font-weight: 600;

    .second_line {
      display: flex;
      justify-content: space-around;
    }

    .black_text {
      color: rgb(59, 56, 56);
      text-transform: uppercase;
      font-weight: 700;
      font-size: 3vw;
    }
  }
}

.benefits_block {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.list_title {
  font-weight: 600;
  color: black;
  font-size: 1.5vw;
}

.left_list, .right_list {
  background-color: white !important;
  border-radius: 1rem;
  padding: 3rem;
  margin-top: 0.5rem;
  border: #92D050 solid 1px;
  height: min(15vh, 10vw);
  display: flex;
  align-items: center;
}

ul {
  font-weight: 700;
  font-size: 1.15vw;

  li {
    padding-bottom: .5vw;
  }
}

.left_title {
  margin-right: auto;
  margin-left: 2rem;
}

.right_title {
  margin-left: auto;
  margin-right: 2rem;
}

.right_icon {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background-color: white;
  margin-bottom: -3.5rem;
  margin-right: -3.5rem;
  border: #92D050 solid 1px;
}

.left_icon {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background-color: white;
  margin-bottom: -3.5rem;
  margin-left: -3.5rem;
  border: #92D050 solid 1px;
}

.list_title-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  & > * {
    align-self: flex-end;
  }
}

.icon {
  width: 65%;
  fill: red;
}

path {
  fill: orange;
}

.left_icon, .right_icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.green {
  color: rgb(84, 130, 53);
}

.blue {
  color: rgb(46, 117, 182);
}

.list-wrapper {
  padding-bottom: 2vw;
}

</style>
