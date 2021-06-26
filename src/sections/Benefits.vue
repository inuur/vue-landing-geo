<template>
  <div class="benefits">
    <div class="company_icon">
      <img src="../assets/icons/coloredIcon.svg" alt="">
    </div>
    <div class="title">
      Наши преимущества
    </div>
    <div class="benefits_flex">
      <div class="benefits_block">
        <div class="list-wrapper">
          <div class="list_title left_title">Экономия, быстрота</div>
          <div class="left_list">
            <ul>
              <li>Без остановки скважин</li>
              <li>Без подъёма глубинно-насосного оборудования</li>
              <li>Без геофизических исследований</li>
            </ul>
          </div>
        </div>
        <div class="list-wrapper">
          <div class="list_title left_title">Деятельность</div>
          <div class="left_list">
            <ul>
              <li>Приемлемая стоимость работ</li>
              <li>Качественные решения широкого спектра задач</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="benefits_middle_block">
        <div class="main_aspects">
          <div class="first_line">
            Востребованность<br>новых технологий
          </div>
          <div class="second_line">
            <span class="text">Снижение<br>затрат</span>
            <span class="black_text">Общие<br>аспекты</span>
            <span class="text">Освоение<br>недр</span>
          </div>
          <div class="last_line">Мониторинг скважинных<br>операций</div>
        </div>
      </div>
      <div class="benefits_block">
        <div class="list-wrapper">
          <div class="list_title right_title">Масштабируемость</div>
          <div class="right_list">
            <ul>
              <li>Нам нужна только проба добываемой и закачиваемой жидкости</li>
              <li>Отсутствие ограничений по глубине скважин</li>
            </ul>
          </div>
        </div>

        <div class="list-wrapper">
          <div class="list_title right_title">Люди</div>
          <div class="right_list">
            <ul>
              <li>Высокая скорость исследований и выдачи заключений</li>
              <li>Профессиональная и отзывчивая команда</li>
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

.company_icon > img {
  width: 15vw;
  display: block;
  margin: 1rem auto auto;
}

.benefits {
  height: 100vh;
  background-color: rgb(235, 255, 235);
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 3.5vw;
  font-weight: 600;
  color: #92D050;
  padding-left: 5rem;
}

.benefits_flex {
  display: flex;
  justify-content: space-around;
  height: 60vh;
  margin: auto;

  & > .benefits_block {
    width: 30%;
  }
}

.benefits_middle_block {
  display: flex;
  align-items: center;
  justify-content: center;

  & > .main_aspects {
    width: 40vh;
    height: 40vh;
    border-radius: 50%;
    background-color: #92D050;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: white;
    font-size: 1vw;
    text-align: center;
    font-weight: 600;

    .second_line {
      display: flex;
      justify-content: space-around;
    }

    .black_text {
      font-weight: 800;
      color: black;
    }
  }
}

.benefits_block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.list_title {
  font-weight: 600;
  color: black;
  font-size: 1.5rem;
}

.left_list, .right_list {
  background-color: white !important;
  border-radius: 1rem;
  padding: 3rem;
  margin-top: 0.5rem;
  border: #92D050 solid 1px;
}

ul {
  font-size: 1.5rem;
}

.left_title {
  text-align: left;
}

.right_title {
  text-align: right;
}

</style>
