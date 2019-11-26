<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <light-box
      :items="items"
    />
  </div>
</template>

<script>
import LightBox from '@/components/LightBox.vue';

export default {
  name: 'app',
  components: {
    LightBox,
  },
  data() {
    return {
      items: [
        {
          src: 'https://placekitten.com/600/400',
          w: 600,
          h: 400,
        },
        {
          src: 'https://placekitten.com/1200/900',
          w: 1200,
          h: 900,
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
