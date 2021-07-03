<template>
<div class="popup">
  <div class="popup-text">
    Спасибо, ваша заявка принята!
  </div>
  <div class="close-button-wrapper">
    <button @click="$emit('close')">Закрыть</button>
  </div>
</div>
</template>

<script>
export default {
  name: "EmailSentPopup"
}
</script>

<style scoped lang="scss">
.popup {
  left: 50%;
  top: 10%;
  position: absolute;
  width: 40vw;
  height: 20vh;
  margin-left: -20vw;
  background-color: #abcd82;
  color: white;
  font-weight: 600;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
}

button {
  padding: .5rem 2rem;
  background-color: white;
  border: none;
  outline: none;
  border-radius: .25rem;

  &:hover {
    background-color: aliceblue;
  }
}
</style>
