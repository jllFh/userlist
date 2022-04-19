<template>
    <div class="grid-cols-4 gap-3 wrap-row mt-24">
  <div class=" w-80 h-96   text-center relative rounded-xl  glass-box " v-for="item in $store.state.items" :key="item.name">
    
       <textarea class="w-32 h-32 absolute top-2 left-2  shadow rounded-xl p-1" placeholder="بارگزاری آدرس عکس" >
      </textarea>
      
    <div class="flex-wrap flex-col absolute right-0 text-right p-0 mt-5 mr-2" >
        <div class="m-2 flex"><input type="text" class="w-32 h-7shadow rounded-xl mr-2" placeholder="نام"><i class="fa-solid fa-user"></i></div>    
     <div class="m-2 flex"> <input type="text" class="w-32 h-7shadow rounded-xl mr-2" placeholder="تولد"><i class="fa-solid fa-cake-candles"></i></div>  
      <div class="m-2 flex items-center"><input type="text" class="w-32 h-7shadow rounded-xl mr-2" placeholder="شغل"> <i class="fa-solid fa-briefcase"></i></div>  
    </div>
      <textarea class=" absolute bottom-2 right-2 p-1 description mb-8 text-right rounded-xl p-1 text-black" placeholder="درباره مخاطب" >
      </textarea>  
    <div class=" absolute bottom-0 flex  content-center justify-around left-6">
      <input type="text" class="w-20 mt-4 rounded-xl m-1" placeholder="instagram">
      <input type="text" class="w-20 mt-4 rounded-xl m-1" placeholder="linkdin">
      <input type="text" class="w-20 mt-4 rounded-xl m-1" placeholder="telegram">
    </div>
 

  </div> 
  </div>
</template>