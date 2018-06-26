<template>
  <div class="home">
    <h-header></h-header>
    <div class="section">
      <tab></tab>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import HHeader from 'components/h-header/h-header'
  import Tab from 'components/tab/tab'

  export default {
    name: "home",
    methods: {
      getStorage: () => {
        var userInfo = localStorage.getItem("user")
        console.log(JSON.parse(userInfo))
      },
    },
    mounted() {
      this.getStorage()

    },
    components: {
      HHeader,
      Tab
    },
  }
</script>

<style scoped>
  .home {
    height: 100%;
  }
  .section{
    display: flex;
    width: 100%;
    height: auto;
    overflow: hidden;
  }

</style>
