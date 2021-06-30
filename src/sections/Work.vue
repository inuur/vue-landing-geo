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
          <div class="image-wrapper">
            <div class="image_title">Комплексные<br>измерения</div>
            <div class="image">
              <img src="../assets/images/first.jpg" alt="">
            </div>
          </div>

          <div class="image-wrapper">
            <div class="image_title">Математическое<br>прогнозирование</div>
            <div class="image">
              <img src="../assets/images/second.jpg" alt="">
            </div>
          </div>

          <div class="image-wrapper">
            <div class="image_title">Обширная база по<br>месторождениям</div>
            <div class="image">
              <img src="../assets/images/third.jpg" alt="">
            </div>
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
}

.image_title {
  text-align: center;
  color: white;
  padding-top: 1rem;
  font-size: 1.5vw;
  font-weight: 600;
}

.images-wrapper {
  display: flex;
  gap: 1rem;
  background-color: #92D050;
  & > .image-wrapper > .image > img {
    width: 28vw;
    height: 28vw;
    padding: 1rem;
  }
}
</style>
