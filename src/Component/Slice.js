import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'
const Swal = require('sweetalert2')




const initialState = {
  Items: []
}


export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    AddItem: (state,action) => {
      
      let Item=state.Items.find((element)=>element.id===action.payload.id )
     
      if(Item){

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Item has been Updated',
          showConfirmButton: false,
          timer: 1500
        })
        Item.Quantiti +=1

        

      }

      else {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Item has been Saved',
          showConfirmButton: false,
          timer: 1500
        })
          
      
        state.Items.push(action.payload)
    
      }

    
     console.log(Item)


     


    },

    RemoveItem: (state,action) => {
      console.log('RemoveItem active')
    
    },

    
    
    
  },
})


export const { AddItem, RemoveItem } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer