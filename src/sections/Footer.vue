<template>
  <div class="footer">
    <div class="blocks">
      <div class="image"></div>
      <div class="contacts">
        <div class="company_icon">
          <img src="../assets/icons/coloredIcon.svg" alt="">
        </div>
        <div class="contacts_text">
          <div class="contacts-header">Контакты:</div>
          <div class="website">www.geoindicator.com</div>
          <div class="email">m.shipaeva@geoindicator.com</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="scss">

.company_icon > img {
  display: block;
  width: 40vw;
}

.footer {
  height: 100vh;
  scroll-snap-align: start;
}

.blocks {
  display: flex;

  & > * {
    width: 50%;
  }
}

.image {
  height: 100vh;
  background: url("../assets/background/back.jpg") center;
}

.contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.contacts_text {
  font-weight: 600;
  font-size: 2vw;
  color: #92D050;
}

.contacts-header {
  color: rgb(59, 56, 56);
}
</style>
