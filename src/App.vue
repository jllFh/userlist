<template>
<div>

  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">test</router-link>
  </nav>
<router-view>
  </router-view>
</div>

</template>

<style lang="scss"> 
@import url('https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2&display=swap');
#app {
  font-family: Merienda, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


nav {
  padding: 30px;    

  a {
    font-weight: bold;
    color: #123232;
 

 
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
