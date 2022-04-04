
<template>
<div class="h-100">
    <HeaderComponent/>
    <div class="row mt-5 mb-5 w-100">
        <SideBar/>        
        <ProductsComponent :Query="category" />
   </div>

   <div class="footerC">
           <FooterComponent/>
   </div>

</div>
</template>


<script>
import SideBar from "../components/Home/SidebarComponent.vue";
import HeaderComponent from "../components/Home/HeaderComponent.vue";
import ProductsComponent from "../components/Home/ProductsComponent.vue";
import FooterComponent from "../components/Home/FooterComponent.vue"


export default {
    data(){
        return{
            categoryQuery:null
        }
    },
    components:{
        SideBar,
        HeaderComponent,
        ProductsComponent,
        FooterComponent
    },
    computed:{
        category(){
            return this.$route.query
        }
    },
    methods:{
       
        },
    
    mounted(){

    },
    
    
}
</script>
<style>
.footerC{
  position:absolute;
  width: 100%;
}

</style>
