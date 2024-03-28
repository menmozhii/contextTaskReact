import React, { useState , useContext, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus , faMinus } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../Utils/Context';


function Product() {
  const userContext = useContext(UserContext)
  let[subTotal,setSubtotal] = useState()
  let [count , setCount] = useState()

  let handleIncrease = (i,totalPrice)=>{
    let data = structuredClone(userContext.product);
    data[i]= {...data[i],quantity:data[i].quantity+1,subTotal:totalPrice}
    userContext.setProduct(data);
    // setSubtotal(totalPrice);
    // console.log(totalPrice);
  }

  let handleDecrease = (i,totalPrice)=>{
      let data = structuredClone(userContext.product);
      if(data[i].quantity>0){
        data[i]= {...data[i],quantity:data[i].quantity-1,subTotal:totalPrice}
        userContext.setProduct(data);
        // setSubtotal(totalPrice);
        // console.log(totalPrice);
      }

  }
  
  //   let value = 0 ;
  //   for(let i=0 ; i<userContext.product.length;i++){
  //     value = value + userContext.product[i].quantity;
  //   }
  //   // setSubtotal(value);
  //   console.log(value);
   

  let cumValue = userContext.product.reduce((acc,cur)=>acc+cur.subTotal,0)
  console.log(cumValue);
  
   
    // console.log(userContext.product[1].quantity);
  return <>
  <div className="products">
      {
        userContext.product.map((e,i)=>{
         const discountPrice = Math.round(e.price-e.price*(e.discountPercentage/100)) 
          return <Card key={i} style={{ width: '18rem' }}>

            <Card.Img className="product_image" variant="top" src={e.thumbnail} />

            <Card.Body className='product_data'>
                <h5>Modal :{e.title}</h5> 
                <h6>Price : $<del> {e.price}</del></h6> 
                <h6>Discount :{e.discountPercentage} %</h6>
                <h4>Discount Price : $ {discountPrice} </h4>
                <p>{e.description}</p>
                <h6>QTY :</h6>
                  <button className='product_button1' onClick={()=>{ 
                      const totalPrice = discountPrice*e.quantity-discountPrice
                      handleDecrease(i,totalPrice)
                        }}> - </button>
                      <span>{e.quantity}</span>
                  <button className='product_button2' onClick={()=>
                    { const totalPrice = discountPrice*e.quantity+discountPrice
                      handleIncrease(i,totalPrice)}
                      }>+</button>
                  <br /><br />
                <span value={subTotal}> Sub-Total : ${discountPrice*e.quantity}</span> 
            </Card.Body>
        </Card> 
        })}
   
    </div>
    <div className='total_form '>
      <form className='container-fluid'>
      <label > Total Cart Amount :</label><h1 type="text">{`$${cumValue}`}</h1>
      <label > Shipping Charge :</label> <del>75</del> &nbsp;<span>Free</span><br />
      <label > Total :</label><h1 type="text">{`$${cumValue}`}</h1>
      </form>
      
      
    </div>
  </>
}

export default Product