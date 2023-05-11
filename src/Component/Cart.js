import React from 'react';
import { useSelector,useDispatch } from 'react-redux';

export default function cart() {
  
  

  const items = useSelector(state => state.shopping.Items);

  

  

  return (  

    <>
    <div className="container my-3  ">
        
    <table class="table  table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col">Subtotal</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td><i class="bi bi-x-lg"></i>
</td>  
      
    </tr>

    <tr>
      <th scope="row">3</th>
      <td colspan="4" class="text-center">Total</td>
      <td colspan="2" >$4444</td>
    </tr>
  </tbody>
</table>



   
    </div>

    </>




        
     )





}