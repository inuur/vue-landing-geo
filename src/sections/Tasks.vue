<template>
  <div class="tasks">
    <div class="company_icon">
      <img src="../assets/icons/coloredIcon.svg" alt="">
    </div>
    <div class="tasks-wrapper">
      <div class="title">РЕШАЕМЫЕ ЗАДАЧИ</div>
      <div class="tasks_list">
        <div class="task task1">
          <div class="task_image1"></div>
          <p>Установление <br> объемных долей <br> продукции</p>
        </div>
        <div class="task task2">
          <p>Мониторинг работы <br> скважин сложной <br> конструкций</p>
          <div class="task_image2"></div>
        </div>
        <div class="task task3">
          <div class="task_image3"></div>
          <p>Определение <br> нарушений и <br> заколонных перетоков</p>
        </div>
        <div class="task task4">
          <p>Мониторинг <br> эффективности <br> скважин после ГТМ</p>
          <div class="task_image4"></div>
        </div>
        <div class="task task5">
          <div class="task_image5"></div>
          <p>Площадной анализ <br> фильтрационных <br> потоков</p>
        </div>
      </div>
    </div>

    <hr>
  </div>
</template>

<script>
export default {
  name: "Tasks"
}
</script>

<style scoped lang="scss">

@media (max-width: 1024px) {
  .tasks {
    height: 40vh;
  }
}

@media (min-width: 1205px) {
  .tasks {
    height: 100vh;
  }
}

.tasks {
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  & > * {
    width: 100%;
  }
}

.tasks_list {
  margin-top: 6rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.title {
  color: #92D050;
  font-size: 3.5vw;
  padding-left: 5rem;
  font-weight: 600;
}

.task_name {
  flex-wrap: wrap;
  font-size: 1.2vw;
  font-weight: 600;
  text-align: center;
}

.task_image > img {
  display: block;
  margin: auto auto 1rem;
  height: 15vw;
}

.company_icon > img {
  width: 15vw;
  display: block;
  margin: 1rem auto auto;
}

.task_image1 {
  background: url("../assets/images/task1.jpg") center no-repeat;
  background-size: cover;
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
}

.task_image2 {
  background: url("../assets/images/task2.jpg") center no-repeat;
  background-size: cover;
  width: 17vw;
  height: 17vw;
  border-radius: 50%;
}

.task_image3 {
  background: url("../assets/images/task3.jpg") center no-repeat;
  background-size: cover;
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
}

.task_image4 {
  background: url("../assets/images/task4.jpg") center no-repeat;
  background-size: cover;
  width: 17vw;
  height: 17vw;
  border-radius: 50%;
}

.task_image5 {
  background: url("../assets/images/task5.jpg") center no-repeat;
  background-size: cover;
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
}

.task {
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  font-size: 1.1vw;
  font-weight: bold;

  p {
    height: 5vw;
  }
}

.task1 {
  margin-right: -3rem;
  margin-bottom: -6vw;
  z-index: 40;
  p {
    color: #92D050;
    margin-top: 1vw;
  }
}

.task2 {
  margin-right: -3rem;
  z-index: 20;
  color: rgb(89, 89, 89);
}

.task3 {
  margin-bottom: -6vw;
  p {
    color: #92D050;
    margin-top: 1vw;
  }
}

.task4 {
  margin-left: -3rem;
  color: rgb(89, 89, 89);
}

.task5 {
  z-index: 40;
  margin-left: -3rem;
  margin-bottom: -6vw;
  p {
    color: #92D050;
    margin-top: 1vw;
  }
}

hr {
  width: 90vw !important;
  margin: 8vw auto auto;
}
</style>
