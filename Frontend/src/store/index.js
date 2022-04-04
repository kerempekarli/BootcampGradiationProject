import {
    createStore
} from 'vuex';

export default createStore({
    state: {
        cart:[],

    },
    mutations:{
        setCart(state,product){
            if(state.cart.length > 0){
                state.cart = [...state.cart,product]
            }
            else{
                state.cart = [product]
            }
            
        }
    },
    getters: {
        _getCart: state => state.cart
    }
})