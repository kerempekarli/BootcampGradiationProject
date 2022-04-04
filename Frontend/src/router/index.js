import {createRouter, createWebHashHistory} from "vue-router";


const routes = [
    {
        name : "HomePage",
        path : "/",
        component : () => import("@/views/HomePageView"),
        props: true
    },
    {
        name : "LoginPage",
        path : "/login",
        component : () => import("@/views/LoginView")
    },
    {
        name : "RegisterPage",
        path : "/register",
        component : () => import("@/views/RegisterView")
    },
    {
        name : "AddProductsPage",   
        path : "/addproduct",
        component : () => import("@/views/AddProducts")
    },
    {
        name : "ProductDetailPage",   
        path : "/product/:id",
        component : () => import("@/views/ProductDetailView"),
        props: true
    },
    {
        name : "TestPage",   
        path : "/test",
        component : () => import("@/views/TestPage"),
        props: true
    },


]

export default createRouter({
    routes:routes,
    history : createWebHashHistory()

})