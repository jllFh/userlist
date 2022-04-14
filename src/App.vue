<template>
<div class="relative flex flex-col">

  <nav class="absolute p-5 text-white">
    <router-link to="/" class="p-2">admin</router-link> 
    <router-link to="/users" class="p-2">Users</router-link>
  </nav>
<router-view>
  </router-view>
</div>

</template>

<style lang="scss"> 


</style>
