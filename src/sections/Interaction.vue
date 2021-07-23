<template>
  <div class="interaction">
    <div class="info">

      <div class="company_icon">
        <img src="../assets/icons/coloredIcon.svg" alt="">
      </div>

      <div class="title-wrapper">
        <div class="title">ВЗАИМОДЕЙСТВИЕ</div>
        <div class="subtitle">ОТНОШЕНИЯ МЕЖДУ НЕФТЕГАЗОВЫМИ КОМПАНИЯМИ И ЗАИНТЕРЕСОВАННЫМИ СТОРОНАМИ</div>
      </div>

      <div class="main_image">
        <img src="../assets/images/interaction-main-image.png" alt="">
      </div>

    </div>
    <div class="icon">
      <img src="../assets/images/interaction_image.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "Interaction"
}
</script>

<style scoped lang="scss">

.company_icon > img {
  width: 15vw;
  display: block;
  margin: 3rem auto auto;
}

.interaction {
  max-width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  display: flex;

  .icon {
    width: 30vw;
    background-color: rgb(242, 242, 242);
    display: flex;

    & > img {
      width: 100%;
      max-width: 60vh;
      margin: auto;
    }
  }

  .info {
    width: 70vw;
  }
}

.title-wrapper {
  font-weight: 600;
  margin-left: 5rem;
}

.title {
  font-size: 3.5vw;
  color: #92D050;
}

.subtitle {
  font-size: 1vw;
}

.arrow > img {
  padding-top: 4rem;
  width: 50%;
  display: block;
  margin: auto;
}

.blocks {
  display: flex;
  margin-top: 2rem;
  height: 35vh;

  & > * {
    font-weight: 600;
    font-size: 1.7rem;
    text-align: center;

    .image-wrapper {
      & > img {
        height: 22vh;
      }
    }
  }
}

.block_title {
  margin-bottom: 1rem;
}

.public-partners-wrapper {
  display: flex;
  gap: 2rem;
  justify-content: center;

  & > * {
    border: #92D050 solid 1px;
  }

  width: 50%;
}

.impact, .partners, .publications {
  padding: 1rem;
}

.impact {
  display: flex;
  border: #92D050 solid 1px;
  gap: 1rem;

  ul {
    padding-left: 4rem;
    text-align: left !important;
    font-weight: 400;
    margin-top: 1rem;

    li {
      margin-bottom: .7rem;
    }
  }
}

.images-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    height: auto;
  }
}

.img-wrapper {
  & > img {
    height: 30%;
  }
}

.image_title {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.images-wrapper > img {
  width: 7rem;
  height: auto;
}

.main_image > img {
  width: 100%;
  max-width: 120vh;
  display: block;
  margin: auto;
}
</style>
