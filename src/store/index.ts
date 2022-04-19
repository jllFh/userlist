import { createStore } from "vuex";

export default createStore({
  state: {
    users: [
       { 
        id: 1,
        name: 'مجید خواهانی' ,
        birth : '۱۳۲۰/۰۱/۰۲',
        img : 'https://media-exp1.licdn.com/dms/image/C5103AQHKO6tv9FyoRQ/profile-displayphoto-shrink_200_200/0/1517400051039?e=1652918400&v=beta&t=9uSUzy2TMVLcAVD3bQIjDRHpr_U4xbYnYXYFimmTYmY',
        job : 'SEO',
        description : 'رح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ اولیهٔ شکل ظاهری و کلیِ طرح سفارش‌گرفته‌شده‌استفاده می‌کند، تا ازنظر گرافیکی نشانگر چگونگی نوع و اندازهٔ قلم و ظاهرِ متن باشد ',
        twitter : 'https://tailwindcss.com/docs/text-color',
        instagram : 'https://tailwindcss.com/docs/text-color',
        linkedin : 'https://tailwindcss.com/docs/text-color',
      } ,
     
    ] 
  },
  getters: {},
  mutations: {
    addUser(state, load) {
      console.log(state);
      state.users = state.users.concat(load.newUser);
    }
  },
 

  actions: {  
    addUser({ commit }, load) {
      commit("addUser", load);
    }
},
  modules: {},
});
