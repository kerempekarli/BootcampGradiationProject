<template>
  <div class="container1">
    <div class="title1">Registration</div>
    <form>
      <div class="user-details1">
        <div class="input-box1">
          <span class="details">Fullname</span>
          <input
            v-model="registerData.fullname"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>
        <div class="input-box1">
          <span class="details">Email</span>
          <input
            v-model="registerData.email"
            type="text"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="input-box1">
          <span class="details">Password</span>
          <input
            v-model="registerData.password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div class="input-box1">
          <span class="details">Password</span>
          <input
            v-model="registerData.secondPassword"
            type="password"
            placeholder="Enter your password again"
          />
        </div>
        <div class="input-box1 role-details">
          <span class="details">Role</span>
          <select
            v-model="registerData.role"
            id="roles"
            name="role"
            class="mx-2"
          >
            <option value="customer">Customer</option>
            <option value="seller">Seller</option>
          </select>
        </div>
      </div>
      <div class="button">
        <input @click="onPress" type="submit" value="Register" />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      registerData: {
        fullname: "",
        email: "",
        password: "",
        secondPassword: "",
        role: "",
      },
    };
  },
  methods: {
    async onPress() {
    
      if (this.registerData.password == this.registerData.secondPassword) {
        const result = await this.$appAxios.post(
          "/users/register",
          this.registerData
        );
        if (result.status == 201) {
          console.log(result)
           this.$router.push({ name: "HomePage" });
        }
        else if(result.status == 400){
          console.log(result)
        }
      }
      else{
        console.log("Parolalar eşleşmiyor")
      }
    },
  },
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
