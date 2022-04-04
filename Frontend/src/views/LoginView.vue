<template>
  <div class="body">
    <div class="Form my-4 mx-5">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-sm-5">
            <img
              src="../assets/photos/loginPhoto.jpg"
              class="img-fluid"
              alt="Login photo"
            />
          </div>
          <div class="col-sm-7 mt-5 px-5 pt-5">
              <h1 class="font-weight-bold py-2">Login</h1>
              <h4 class="font-weight-bold py-2">Sign into your account</h4>
            <form action="">
              <div class="form-row">
                <div class="col-lg-7">
                  <input
                    v-model="userData.email"
                    type="email"
                    placeholder="Please enter your email"
                    class="form-control my-3 p-4"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-7">
                  <input
                    v-model="userData.password"
                    type="password"
                    placeholder="******"
                    class="form-control my-3 p-4"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-7">
                  <button @click="onSubmit" type="button" class="btn1 mt-1 mb-5">Login</button>
                </div>
              </div>
              <a href="/">Forgot password</a>
              <p>Dont have an account? <a href="/#/register">Register</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}
.body {
  background: rgb(240, 245, 245);
}
.row {
  background: white;
  border-radius: 30px;
  box-shadow: 12px 12px 22px grey;
}
img{
    border-radius: 30px;
}
.btn1{
    border:none;
    outline:none;
    height:50px;
    width:100%;
    background-color: black;
    color: white;
    border-radius: 4px;
    font-weight: bold;
}
</style>
<script>
export default {
    data(){
      return{
        userData:{
          email:"kerempekarli@gmail.com",
          password:123123
        }
      }
    },
    methods:{
        async onSubmit(){
          const result = await this.$appAxios.post("/users/login",this.userData).catch(
            console.log("Hatalı parola yada email")
          )
           if(result.status == 200){
             console.log("USER DATA", result.data)
             console.log("Role", result.data.role)
              const token = result.data.tokens["access_token"]

             console.log("Giriş işlemi başarılı")
               this.$router.push({ name: "HomePage" });

               localStorage.setItem('Token', token)
           }
        }
    }
}
</script>