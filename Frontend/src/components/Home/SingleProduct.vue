
   
<template>
          <div class="card text-center my-1 mx-2" style="width: 17rem">
        <img
          class="card-img-top"
          :src="require(`../../assets/photos/${this.product.product_image}`)"
          alt="Card image cap"
        />
        <div class="card-body">
          <router-link
          :to="{name:'ProductDetailPage',params:{id:this.product.id}}">
          <h5>
            {{this.product.product_name}}
          </h5>
          </router-link>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary">Add to bag</button>
        </div>
      </div>
</template>
<script>
export default {
  data(){
    return {
        photoAdress:`../../assets/photos/${this.product.product_image}`
    }
  },
  methods:{

  },
  props:{
    product: {
       type:Object,
       required:true,
       default:() => {}
    }
  },
  created(){
  
  }
}

 //  :src="require(`../../assets/photos/${this.product.product_image}`)"
</script>
<style>
  img {
    
    width:100%;
    
}
</style>