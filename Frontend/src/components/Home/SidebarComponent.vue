<template>

  <div class="col-md-1 text-center mt-5">
    <div class="list-group">
    
      <router-link v-for="cat in computedCategories" :key="cat.id" :to="{name:'HomePage',query:{category:`${cat.category_name}`,id:`${cat.id}`}}">  
        <div  class="list-group-item list-group-item-action active border"><h5>{{cat.category_name}}</h5></div>
      </router-link>
    <!-- 
    <router-link :to="{name: 'HomePage',query:{category:'elektronik'}}">
      <div  class="list-group-item list-group-item-action"><h5>Elektronik</h5> </div>
    </router-link> 
    
      <router-link>
      <div  class="list-group-item list-group-item-action"><h5>Kozmetik</h5></div>
      </router-link>
    
    <router-link>
      <div  class="list-group-item list-group-item-action"><h5>Mücevher</h5></div>
      </router-link>
    
    <router-link>
      <div  class="list-group-item list-group-item-action"><h5>Otomobil</h5></div>
      </router-link> -->
    
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
        categories:null,
   
    }
  },
  methods:{
   async getCategories(){
      this.categories = await this.$appAxios.get("/categories/getall")
      this.categories = this.categories.data
    },

  },
  computed:{
    computedCategories(){
      return this.categories
    }
    
  },
  beforeMount(){
  
      this.getCategories()
  }

}
</script>

