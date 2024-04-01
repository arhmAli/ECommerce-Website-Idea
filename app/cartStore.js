import {create} from "zustand"
import {persist} from "zustand/middleware"

const useCart=create(
    persist((set)=>({
        cart:{},
        //my cart would have price and quantity of the product
        addToCart:(name,price,quantity)=>{
            set((state)=>({
                cart:{
                    ...state.cart,
                    [name]:{
                        name,
                        price,
                        quantity
                    }
                }
            }))
        },
        clearCart:()=>{
            set({cart:{}})
        }
    }),{

    })
)
export default useCart