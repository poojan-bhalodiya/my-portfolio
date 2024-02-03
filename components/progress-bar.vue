<template>
  <div>
    <h1>Custom Progress Bar</h1>

    <div class="progress">
      <div
        class="progress-done"
        :style="{ width: progressWidth + '%', opacity: progressOpacity }"
      >
        {{ progressWidth }}%
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progressWidth: 0,
      progressOpacity: 0,
    };
  },
  mounted() {
    this.progressWidth = parseInt(
      this.$el.querySelector(".progress-done").getAttribute("data-done")
    );
    this.progressOpacity = 1;
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

* {
  box-sizing: border-box;
}

body {
  background-color: #f4f4f4;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

.progress {
  background-color: #d8d8d8;
  border-radius: 20px;
  position: relative;
  margin: 15px 0;
  height: 30px;
  width: 300px;
}

.progress-done {
  background: linear-gradient(to left, #f2709c, #ff9472);
  box-shadow: 0 3px 3px -5px #f2709c, 0 2px 5px #f2709c;
  border-radius: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 0;
  opacity: 0;
  transition: 1s ease 0.3s;
}
</style>
