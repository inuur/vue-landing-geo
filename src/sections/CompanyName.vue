<template>
  <div class="main_page">
    <div>
      <nav class="navigation">
        <a>HOME</a>
        <a @click="scrollToCompanyMission">ABOUT</a>
        <a @click="scrollToContacts">CONTACT</a>
      </nav>
    </div>

    <div class="company_name">
      <div class="logo">
        <img src="../assets/icons/companyIcon.svg" alt="">
      </div>
      <div class="name">
        <div class="subtitle">НЕФТЕГАЗОВЫЕ ТЕХНОЛОГИИ</div>
        <div class="title">GEOINDICATOR</div>
        <div class="underline">
          <div class="line"></div>
        </div>
      </div>
      <div></div>
    </div>

    <div class="auth_buttons">
      <button class="register">РЕГИСТРАЦИЯ</button>
      <button class="login">ВХОД</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyName",
  methods: {
    scrollToCompanyMission() {
      const block = document.querySelector("div.mission");
      block.scrollIntoView({block: "center", behavior: "smooth"})
    },
    scrollToContacts() {
      const block = document.querySelector("div.contacts-block");
      block.scrollIntoView({block: "start", behavior: "smooth"})
    }
  }
}
</script>

<style lang="scss">
* {
  font-family: 'Open Sans', sans-serif;
}

.main_page {
  height: 100vh;
  background: url("../assets/background/back.jpg") bottom;
  background-size: cover;
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
}

.navigation {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 600;
  height: 50px;

  a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    border-radius: 0.5rem;
    font-weight: 600;

    &:hover {
      background-color: white;
      color: black;
      transition: 0.2s;
    }
  }

  background-color: rgb(0, 0, 0, 0.1);
}

.company_name {
  display: flex;
  margin-top: auto;

  & > div {
    width: 100%;
  }

  .underline {
    text-align: center;

    .line {
      display: inline-block;
      width: 100px;
      border-bottom: 3px solid #52E669;
      border-radius: 2px;
    }
  }
}

.name {
  color: white;
  text-align: center;
  font-weight: 600;

  .title {
    font-size: 8vw;
  }

  .subtitle {
    font-size: 1vw;
    letter-spacing: 20px;
  }
}

.logo {
  text-align: center;
  margin: auto;
}

.auth_buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  & > button {
    width: 200px;
    height: 50px;
    outline: none;
    border: none;
    border-radius: 0.2rem;
    color: white;
    font-weight: 600;
  }

  margin-bottom: 1rem;

  .register {
    background-color: #52E669;
  }

  .login {
    background-color: transparent;
    border: 2px solid rgb(255, 255, 255, 0.5);
  }
}
</style>
