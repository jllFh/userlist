
<template>
 <div>
   <addUse />
 </div>

</template>

<script>
import { Options, Vue } from "vue-class-component";
import addUser from "../components/addUser.vue"
@component({addUser})
@Options({
})


export default class setting extends Vue {
addUser
}



</script>
