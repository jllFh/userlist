<template>
  <div class="grid-cols-4 gap-3 wrap-row mt-24">
  <div class=" w-80  h-96 m-6  text-center relative rounded-xl  glass-box " v-for="item in $store.state.items" :key="item.name">
    <div><img  :src="item.img" alt="" class="w-32 h-32 img-absolute shadow rounded-xl"></div>
    <div class=" w-auto absolute right-0 text-right mt-10 mr-5 " >
      <h1>{{item.name}} <i class="fa-solid fa-user"></i></h1> 
      <h1>{{item.birth}} <i class="fa-solid fa-cake-candles"></i> </h1>
      <h1>{{item.job}} <i class="fa-solid fa-briefcase"></i></h1>
    </div>
    <div class=" absolute bottom-2 right-2 p-1 description mb-8 text-right"> 
      {{item.description}} 
    </div>
    <div class="w-40  absolute bottom-0 right-20 flex  content-center justify-around mb-2 text-2xl">
      <a :href="item.twitter" > <i class="fa-brands fa-twitter "></i></a>
      <a :href="item.instagram" > <i class="fa-brands fa-instagram"></i></a>
      <a :href="item.linkedin" >    <i class="fa-brands fa-linkedin-in"></i></a>
      <a :href="item.telegram" >   <i class="fa-brands fa-telegram"></i></a>
    </div>
 

  </div> 
  <br>

  </div>

  
</template>
