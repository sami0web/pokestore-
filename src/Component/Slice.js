import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Items: [],
}


export const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    AddItem: (state,action) => {

      
    },

    RemoveItem: (state,action) => {
     
    
    },

    extraReducers: {
   
       
      }
    
    
  },
})


export const { AddItem, RemoveItem } = shoppingSlice.actions

export default shoppingSlice.reducer