<template>
  <div class="contacts-block">
    <div class="contacts-container">
      <div class="title">
        <div class="text">КОНТАКТЫ</div>
        <div class="underline"></div>
        <div class="subtitle">Оставьте заявку, мы вам перезвоним!</div>
      </div>
      <div class="form">
        <div class="data">
          <input name="name" type="text" placeholder="Name">
          <input name="email" type="email" placeholder="Email">
          <input name="phone" type="text" placeholder="Phone">
        </div>
        <div class="message">
          <textarea name="message" placeholder="Message"></textarea>
        </div>
        <div class="contacts">
          <div class="contacts-wrapper">
            <div class="location">
              <span class="icon">
                <img src="../assets/icons/location.png" alt="">
              </span>
              <span>Kazan, Russia</span>
            </div>
            <div class="phone">
              <span class="icon">
                <img src="../assets/icons/phone.png" alt="">
              </span>
              <span>+79874107475</span>
            </div>
            <div class="email">
              <span class="icon">
                <img src="../assets/icons/email.png" alt="">
              </span>
              <span>geoindicator@gmail.com</span>
            </div>
          </div>
          <div class="submit_button">
            <button @click="sendEmail">SEND MESSAGE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailService from "../api/service/emailService";

export default {
  name: "Contacts",
  methods: {
    sendEmail() {
      console.log("sending email")
      emailService.sendEmail().then(data => {
        console.log(data.data)
      }).catch(exception => {
        console.log(exception)
      })
    }
  }
}
</script>

<style scoped lang="scss">

.contacts-block {
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
}

.text {
  text-align: center;
  font-weight: 600;
  font-size: 1.6vw;
}

.underline {
  width: 25%;
  border: #92D050 2px solid;
  margin: 1rem auto auto;
}

.subtitle {
  text-align: center;
  font-weight: bold;
  font-size: 1vw;
  margin-top: 3rem;
}

.form {
  margin-top: 5rem;
  width: 70vw;
}

.data {
  width: 100%;
  display: flex;
  gap: 1rem;

  & > * {
    width: 100%;
  }

  input {
    border: none;
    background-color: #E5E5E5;
    padding: 1rem;
    border-radius: .2rem;
    font-size: 1rem;
  }
}

.message {

  textarea {
    width: calc(100% - 2rem) !important;
    height: 10vh;
    border: none;
    background-color: #E5E5E5;
    margin-top: 1rem;
    padding: 1rem;
    resize: none;
    font-size: 1rem;
    border-radius: .2rem;
  }
}

.contacts {
  display: flex;
  margin-top: .7rem;
  align-items: center;

  .submit_button {
    width: 50% !important;

    button {
      border: none;
      outline: none;
      width: 100%;
      background-color: #92D050;
      padding: 1rem;
      border-radius: .2rem;
      color: white;
      font-weight: 600;
      font-size: 1rem;
    }
  }
}

.contacts-wrapper {
  display: flex;
  justify-content: space-around;
  width: 50%;
  padding-right: 1rem;
  padding-left: 1rem;
  color: #333;
  font-weight: 600;
  line-height: 100%;

  img {
    margin-right: .5rem;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

}

.contacts-block {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
