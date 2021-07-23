<template>
  <div class="work">
    <div class="company_icon">
      <img src="../assets/icons/coloredIcon.svg" alt="">
    </div>

    <div class="work_title">
      КАК ЭТО РАБОТАЕТ?
    </div>
    <div class="images">
      <div class="images-wrapper">
        <div class="image-wrapper ">
          <div class="image-container image1">
            <div class="image_title">Отбор проб со скважин и <br> Комплексные <br> измерения</div>
            <div class="image">
              <img src="../assets/images/first.png" alt="">
            </div>
          </div>
          <div class="time"><span>До 7 дней</span></div>
        </div>

        <div class="image-wrapper ">
          <div class="image-container image2">
            <div class="image_title">Интерпретация измерений <br> и Математическое <br> прогнозирование</div>
            <div class="image">
              <img src="../assets/images/second.png" alt="">
            </div>
          </div>
          <div class="time"><span>До 7 дней</span></div>
        </div>

        <div class="image-wrapper ">
          <div class="image-container image3">
            <div class="image_title">Выдача заключения</div>
            <div class="image">
              <img src="../assets/images/third.png" alt="">
            </div>
          </div>
          <div class="time"><span>До 7 дней</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work"
}
</script>

<style scoped lang="scss">

.company_icon > img {
  width: 15vw;
  display: block;
  margin: 1rem auto auto;
}

.work {
  height: 100vh;
  scroll-snap-align: start;
}

.work_title {
  font-weight: 600;
  font-size: 3.5vw;
  color: #92D050;
  margin-left: 5rem;
}

.images {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
}

.image_title {
  text-align: center;
  padding-top: 1rem;
  font-size: 1.5vw;
  font-weight: 700;
  height: 20%;
}

.images-wrapper {
  display: flex;
  padding-bottom: 2rem;

  & > .image-wrapper > .image-container {
    border: 1px solid black;
    height: 100%;
  }

  & > .image-wrapper > .image-container > .image {
    width: 24vw;
    height: 24vw;
    padding: .1rem;

    & > img {
      width: 100%;
      display: block;
    }
  }
}

.image-wrapper {
  display: flex;
  flex-direction: column;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image1 {
  background-color: rgb(217, 217, 217);
}

.image2 {
  background-color: rgb(67, 206, 255);
}

.image3 > .image > img {
  height: 80%;
  width: auto !important;
}

.time {
  text-align: center;
  font-size: 1vw;
  font-weight: bold;
  padding-top: 1rem;
}

</style>
