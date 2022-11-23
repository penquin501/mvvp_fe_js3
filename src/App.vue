<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
    <InputText v-model="text" />
    <div>
      <Chart type="bar" :data="basicData" />
    </div>
  </div>
  <!-- <router-view/> -->
</template>
<script>
export default {
  data() {
    return {
      text: "PrimeVue",
      basicData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "#42A5F5",
            data: [65, 59, 80, 81, 56, 55, 40],
          },
          {
            label: "My Second dataset",
            backgroundColor: "#9CCC65",
            data: [28, 48, 40, 19, 86, 27, 90],
          },
        ],
      },
    };
  },
  methods: {
    greet() {
      this.$toast.add({
        severity: "success",
        summary: "Success Message",
        detail: "Order submitted",
        life: 3000,
      });
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
