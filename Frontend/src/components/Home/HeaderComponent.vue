<template>
<div class="bg-dark">
  <nav class="navbar position-relative-top navbar-expand-sm bg-dark navbar-dark ml-5">
  <!-- Brand -->
  <a  class="navbar-brand" href="#">Şanslı Kurbağa</a>

  <!-- Links -->
  <ul class="navbar-nav">

  
      <!-- Nav-item -->
    <li class="nav-item">
      <a class="nav-link" href="#">Link 1</a>
    </li>

      <!-- Nav-item -->
    <li class="nav-item">
      <a class="nav-link" href="#">Link 2</a>
    </li>

        <!-- Search -->  
  <form class="nav-item form-inline" action="#" >
    <input class="form-control search-input mr-sm-2" type="text" placeholder="Search">
    <button class="btn btn-success" type="submit">Search</button>
   </form>


       <!-- Nav-item Dropdown -->
    <li class="nav-item  dropdown mr-5 cart">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
            Cart
      </a>
      <div class="dropdown-menu">
        <a v-for="item in computedCart" :key="item.id" class="dropdown-item" href="#">{{item.product_name}}</a>
        <a class="dropdown-item bg-success text-white" href="#">Go to cart</a>
        
      </div>
    </li>
  </ul>
  
    
</nav>
</div>
</template>
<script>

  const token = localStorage.getItem("Token")

export default {


  data(){
    return{
      cart:null,
      token:token
    }
  },
   methods:{
    async getCart(){
      this.cart = this.$store.state.cart
    }
  },
   computed:{
    computedCart(){
        return this.$store.state.cart
    }
  },
    beforeMount(){
      this.cart = this.$store.state.cart
 
  },
  created(){
    console.log(this.$store)
  }
}




</script>
<style>

  form{
       margin-left: 32vh;
  }
  .search-input{
    padding-right: 30vh;
    margin-left: 3vh;
    padding-left: 2vh;
    margin-right: 3px;
  }
  input {
  text-align: left; 
}
.cart{
    margin-left: 40vh;
    
}

</style>
