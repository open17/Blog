<template>
  <SWUpdatePopup v-slot="{ enabled, reload, message, buttonText }">
    <div class="card" v-if="enabled">
      <svg t="1708183479865" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4311" width="200" height="200"><path d="M745.4 625.2l28.6-68.6h82.4l-39.2-104 49-117.4 140.2 353h-103.4l-24-63.2h-133.6zM192.8 416.6c8.8 8.4 13.2 19.8 13.2 34s-3.8 25.6-11.6 34c-8.6 9.4-24.2 14-47.2 14H111.8V404h35.6c21.4 0 36.6 4.2 45.4 12.6z m-81 150.8h61.2c16.8 0.2 33.2-1.8 49.4-6l15.8-46.4 44.2-129.4c-3.4-5.2-7.2-10-11.6-14.4-22.6-23.8-55.8-35.8-99.4-35.8H17.6v353h94.2v-121z m544.4 121.2l150-353h-99.4l-102.6 228.2-73-228.2h-76.4l-78.4 228.2-55.2-104-50 146.2 50.8 82.8h97.8L490.6 484l67.6 204.6h98z" p-id="4312" fill="#707070"></path></svg>
      <p class="cookieHeading">{{message}}</p>
      <p class="cookieDescription">
        PWA应用检测到网站更新啦 <br />
        <a href="#">查看更新git</a>.
      </p>
      <div class="buttonContainer">
        <button class="acceptButton" @click="reload">{{buttonText}}</button>
        <button class="declineButton">我再等等</button>
      </div>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from "@vuepress/plugin-pwa/lib/SWUpdatePopup.vue";

export default {
  components: { SWUpdatePopup },
};
</script>

<style scoped>
.card {
  width: 300px;
  height: 220px;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  gap: 13px;
  position: relative;
  overflow: hidden;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.062);
}

#cookieSvg {
  width: 50px;
}

#cookieSvg g path {
  fill: rgb(97, 81, 81);
}

.cookieHeading {
  font-size: 1.2em;
  font-weight: 800;
  color: rgb(26, 26, 26);
}

.cookieDescription {
  text-align: center;
  font-size: 0.7em;
  font-weight: 600;
  color: rgb(99, 99, 99);
}

.cookieDescription a {
  --tw-text-opacity: 1;
  color: rgb(59 130 246);
}

.cookieDescription a:hover {
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline;
}

.buttonContainer {
  display: flex;
  gap: 20px;
  flex-direction: row;
}

.acceptButton {
  width: 80px;
  height: 30px;
  background-color: #7b57ff;
  transition-duration: 0.2s;
  border: none;
  color: rgb(241, 241, 241);
  cursor: pointer;
  font-weight: 600;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px #977ef3, 0 2px 4px -1px #977ef3;
  transition: all 0.6s ease;
}

.declineButton {
  width: 80px;
  height: 30px;
  background-color: #dadada;
  transition-duration: 0.2s;
  color: rgb(46, 46, 46);
  border: none;
  cursor: not-allowed;
  font-weight: 600;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px #bebdbd, 0 2px 4px -1px #bebdbd;
  transition: all 0.6s ease;
}

.declineButton:hover {
  background-color: #ebebeb;
  box-shadow: 0 10px 15px -3px #bebdbd, 0 4px 6px -2px #bebdbd;
  transition-duration: 0.2s;
}

.acceptButton:hover {
  background-color: #9173ff;
  box-shadow: 0 10px 15px -3px #977ef3, 0 4px 6px -2px #977ef3;
  transition-duration: 0.2s;
}
</style>
