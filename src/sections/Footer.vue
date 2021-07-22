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
          <div class="email">cooperation@geoindicator.com</div>
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

@media (max-width: 1024px) {
  .footer, .image {
    height: 40vh;
  }
}

@media (min-width: 1205px) {
  .footer, .image {
    height: 100vh;
  }
}

.company_icon > img {
  display: block;
  width: 40vw;
}

.footer {
  scroll-snap-align: start;
}

.blocks {
  display: flex;

  & > * {
    width: 50%;
  }
}

.image {
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
