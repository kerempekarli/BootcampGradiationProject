<template>
  <div class="container1">
    <div class="title1">Add product</div>
    <form>
      <div class="user-details1">
        <div class="input-box1">
          <span class="details">Product name</span>
          <input
            v-model="productData.product_name"
            type="text"
            placeholder="Enter product name"
            required/>
        </div>
        <div class="input-box1">
          <span class="details">Product title</span>
          <input
            v-model="productData.product_title"
            type="text"
            placeholder="Enter product title"
            required/>
        </div>
        <div class="input-box1">
          <span class="details">Product photo</span>
          <input
            type="file"
            @change="onFileSelected"
            required/>
        </div>
        <div class="input-box1 role-details">
          <span class="details">Kategori</span>
          <select
            v-model="productData.category_id"
            id="roles"
            name="role"
            class="mx-2">
            <option value="1" selected>Elektronik</option>
            <option value="2" >Ev&Yaşam</option>
          </select>
        </div>
      </div>
      <div class="button">
        <input @click="onPress" type="submit" value="Add product" />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {    
     productData: {
         product_name:"",
         category_id:1,
         product_title:"",
         product_image:null
      },
    };
  },
  methods: {
    async onPress() {

      //  console.log(this.productData)

        const fd = new FormData();

        fd.append('product_image',this.productData.product_image)
        fd.append("category_id",  this.productData.category_id)
        fd.append("product_title",  this.productData.product_title)
        fd.append('product_name',this.productData.product_name)

        const result = await this.$appAxios.post(
          "products/add",fd,{headers:{'Content-Type':'multipart/form-data'}}
        );

            
        this.productData= { 
         product_name:null,
         category_id:null,
         product_title:null,
         product_image:null
          }


        if (result.status == 201){
          console.log(result)
           this.$router.push({ name: "HomePage"});
        }

        else if(result.status == 400){
          console.log(result)
        }
    },
    onFileSelected(event){


        this.productData.product_image = event.target.files[0]

    }
  },
  computed:{

  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgba(0, 26, 255, 0.467), #af19b4);
}
.container1 {
  max-height: 700px;
  width: 100%;
  background: #fff;
  padding: 25px 30px;
  border-radius: 5px;
  position: relative;
}
.container1 .title1 {
  font-size: 25px;
  font-weight: 500;
  position: relative;
}
.container1 .title1::before {
  content: "";
  position: absolute;
  height: 3px;
  width: 30px;
  background: linear-gradient(135deg, rgba(0, 26, 255, 0.467), #af19b4);
  left: 0;
  bottom: 0;
}
.container1 form .user-details1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
form .user-details1 .input-box1 {
  margin-top: 25px;
  width: calc(100% / 2 - 20px);
}
.user-details1 .input-box1 input {
  height: 45px;
  width: 100%;
  outline: none;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding-left: 15px;
  font-size: 16px;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
  border-bottom-width: 2px;
}
.user-details1 .input-box1 .details {
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}
.user-details1 .input-box1 input:focus,
.user-details1 .input-box1 input:valid {
  border-color: #9b59b6;
}

form .user-details1 .role-details {
  font-size: 20px;
  font-weight: 500;
  float: right;
}
form .button {
  text-align: end;
  height: 45px;
  margin: 45px 0;
}
form .button input {
  height: 100%;
  width: 100%;
  outline: none;
  color: #fff;
  border: none;
  font-size: 18px;
  font-weight: 500;
  border-radius: 5px;
  letter-spacing: 1px;
  background: linear-gradient(135deg, rgba(0, 26, 255, 0.467), #af19b4);
}
</style>
