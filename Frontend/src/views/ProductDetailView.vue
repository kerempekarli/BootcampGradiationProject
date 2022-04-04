<template>
       <HeaderComponent/>
  <div class="row justify-content-center mb-5">
 
  </div>
		<!-- PRODUCT DETAİL -->
  <div class="row justify-content-center">
    <div class="col-md-2">
		
	</div>

    <div class="col-md-3">
      <img
        :src="require(`../assets/photos/${this.productData.product_image}`)"
        width="500"
        alt=""
      />
    </div>

    <div class="col-md-4 mt-3 ">

      <h1 class="mb-3 mt-4 ml-3 font-italic">{{this.productData.product_name}}</h1>

      <div class="mt-4">
        <div class="text-left font-weight-bold font-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facere, numquam inventore voluptates deserunt reprehenderit recusandae optio ex illum itaque nisi autem ullam, aut ipsa! Quidem quis reprehenderit dolorum, eius, nesciunt iste placeat accusantium, illum et reiciendis iusto ipsum explicabo? At pariatur hic voluptas nostrum placeat veniam animi! Porro veniam ipsum eligendi dolore? Quo sunt, vel ullam harum laboriosam eaque, eos sint soluta, culpa repellat rerum. Rem ipsa beatae corporis quidem excepturi? Pariatur similique, debitis impedit animi consequatur ex ipsam explicabo consectetur, dicta sequi voluptas hic culpa iusto vitae consequuntur eos quidem. Voluptatem odit temporibus distinctio quos itaque numquam iure?</div>
      </div>
      <div class="d-flex">
            <div class="mr-auto mt-3 ml-4 price ">1500$</div>
            <div class="d-flex justify-content-end mr-5">

          <select 
            v-model="count"
            class="mx-2 select mt-3">

            <option value="1" >1</option>
            <option value="2" >2</option>
            <option value="3" >3</option>
            <option value="4" >4</option>
            <option value="5" >5</option>
            <option value="6" >6</option>
            <option value="7" >7</option>
            <option value="8" >8</option>
            <option value="9" >9</option>
            <option value="10" >10</option>


          </select>

          <button @click="this.addProductToCart(this.productData)" class=" btn btn-success btn-lg mt-3 ">
              Add to card
          </button>

          </div>
      </div>
    </div>


    <div class="col md-2"></div>

  </div>

</template>
<style>
.select{
  max-height: 45px;
  border-radius: 5px;
}
.price{
  width: 45px;
  font-size: 30px;
  border: 1px;
  border-color: black;
}
</style>
<script>
import HeaderComponent from "../components/Home/HeaderComponent.vue"
export default {
  /* eslint-disable */
  data(){
	  return{
        productId:null,
        count:1,
        productData:null,
        
	  }
  },
  props:{

  },
  methods:{
      async getParams(){
         this.productId = this.$route.params.id
         this.productData = await this.$appAxios.get(`/products/${this.productId}`)
         this.productData = await this.productData.data[0]

        //this.productData.product_image = `../assets/photos/${this.productData.product_image}`
          // console.log(this.productData.product_image)
      },
      async addProductToCart(data){
       this.$store.commit("setCart",data) 
      }
  },
  components:{
      HeaderComponent
  },
  beforeMount(){
      this.getParams()
  }
   
};
</script>
