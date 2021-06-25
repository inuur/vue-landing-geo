<template>
  <div class="mission">
    <div class="box">
      <div class="text">
        <div class="title">МИССИЯ<br>КОМПАНИИ</div>
        <div class="description">
          <div class="description_title">Комлпексные исследования пластового флюида и управление разработкой месторождений</div>
          <div class="description_text">Мы помогаем быть лучшими в рациональном, эффективном и экологичном освоении запасов жидких углеводородов</div>
        </div>
      </div>
      <div class="image-wrapper">
        <div class="image">
          <img src="../assets/images/mission_image.jpg" alt="">
          <div class="square"></div>
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
}

.box {
  display: flex;
  width: 100%;

  & > * {
    padding: 5rem;
    width: 100%;
  }
}

.title {
  color: #92D050;
  font-size: 4vw;
  font-weight: 600;
  line-height: 3.5vw;
}

.description {
  padding-top: 4rem;
  text-align: center;

  &_title {
    font-weight: 600;
    font-size: 1.7vw;
  }

  &_text {
    margin-top: 1rem;
    font-size: 1.5vw;
  }
}

.image {
  & > img {
    width: 30vw;
    height: 30vw;
    box-shadow: 5px 5px 10px rgb(0, 0, 0, 0.3);
  }
}

.square {
  width: 15vw;
  height: 15vw;
  border: 1vw solid;
  border-radius: 1rem;
  margin-top: -23vw;
  margin-left: 21.5vw;
  position: absolute;
  color: #92D050;
}

</style>
