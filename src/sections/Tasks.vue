<template>
  <div class="tasks">
    <div class="company_icon">
      <img src="../assets/icons/coloredIcon.svg" alt="">
    </div>
    <div class="tasks-wrapper">
      <div class="title">РЕШАЕМЫЕ ЗАДАЧИ</div>
      <div class="tasks_list">
        <div class="task">
          <div class="task_image">
            <img src="../assets/images/task1.jpg" alt="">
          </div>
          <div class="task_name">Установление объёмных долей продукции (воды)</div>
        </div>
        <div class="task">
          <div class="task_image">
            <img src="../assets/images/task2.jpg" alt="">
          </div>
          <div class="task_name">Определение нарушений и заколонных перетоков</div>
        </div>
        <div class="task">
          <div class="task_image">
            <img src="../assets/images/task3.jpg" alt="">
          </div>
          <div class="task_name">Мониторинг работы скважин сложной конструкции</div>
        </div>
        <div class="task">
          <div class="task_image">
            <img src="../assets/images/task4.jpg" alt="">
          </div>
          <div class="task_name">Мониторинг эффективности скважин после ГТМ</div>
        </div>
        <div class="task">
          <div class="task_image">
            <img src="../assets/images/task5.jpg" alt="">
          </div>
          <div class="task_name">Площадной анализ фильтрационных потоков</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tasks"
}
</script>

<style scoped lang="scss">

.tasks {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > * {
    width: 100%;
  }
}

.tasks_list {
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
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
  font-size: 30px;
  font-weight: 600;
  text-align: center;
}

.task_image > img {
  display: block;
  margin: auto auto 1rem;
  height: 30vh;
}

.company_icon > img {
  width: 15vw;
  display: block;
  margin: 1rem auto auto;
}
</style>
