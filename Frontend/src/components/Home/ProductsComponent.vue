<template>
  <div class="col-md-11">
    <div class="row ml-3">
    
   <SingleProduct
      v-for="product in handleProducts"
      :key="product.id"
      :product="product"/>
    </div>
      {{this.getCategoryQuery}}
  </div>
</template>
<script>
import SingleProduct from "./SingleProduct.vue";
export default {

    props:["Query"],

    components:{
      SingleProduct
    },
    data(){
        return{
            products:null,
        }
    },
    methods:{   
        async getProducts(){
            let products1 = await this.$appAxios.get("/products/getall")
            this.products = await products1.data       
        }
    },  
    mounted(){
         this.getProducts()
         
    },
 
    computed:{
        getCategoryIdFromQuery(){
          return this.Query.id
        },
         handleProducts(){
           if(this.getCategoryIdFromQuery){
              let data =  this.products.filter( p => p.category_id == this.getCategoryIdFromQuery)
              return data
           }
           else{ 
             return this.products 
           }
        } 
    }
 
}
</script>