<template>
  <div class="success_history">
    <div class="company_icon">
      <img src="../assets/icons/coloredIcon.svg" alt="">
    </div>

    <div class="images">
      <div class="first_image">
        <div class="success_history-title">
          ИСТОРИИ УСПЕХА
        </div>
        <img src="../assets/images/success_history1.png" alt="">
      </div>
      <div class="second_image">
        <img src="../assets/images/success_history2.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessHistory"
}
</script>

<style scoped lang="scss">

.company_icon > img {
  width: 15vw;
  display: block;
  margin: auto;
  padding-top: 2rem;
}

.success_history {
  height: 100vh;
  scroll-snap-align: start;
}

.success_history-title {
  font-weight: 600;
  font-size: 3.5vw;
  color: rgb(58, 66, 67);
  padding-left: 5rem;
  text-align: center;
}

.images {
  display: flex;
  justify-content: center;
  gap: 1vw;

  img {
    display: block;
    width: 85%;
    max-width: 90vh;
    margin: auto;
  }
}

</style>
