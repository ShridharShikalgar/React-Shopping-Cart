import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { CartState } from '../../CONTEXT/Context';
import Rating from '../FILTERS/Rating';
import Styles from './SingleProduct.module.css'

const SingleProduct = ({prod}) => {
  const { state:{cart}, dispatch } = CartState();
  return (
    <div className={Styles.products}>
      <Card>
        <Card.Img variant='top' src={prod.image} alt={prod.name}/>
        <Card.Body>
            <Card.Title>{prod.name}</Card.Title>
            <Card.Subtitle style={{paddingBottom: 10}}>
                <span>Rs.{prod.price.split(".")[0]}</span>
                {
                    prod.fastDelivery ? (<div>Fast Delivery</div>):(<div>4 Days Delivery</div>)
                }
                <Rating rating={prod.rating}/>
            </Card.Subtitle>
            {
              //some help to know wether in current thing that elements exists or not 
                cart.some((p)=>p.id === prod.id)?(
                  <Button 
                    onClick={()=>{
                      dispatch({
                        type:'REMOVE_FROM_CART',
                        payload:prod
                      })
                    }}
                    variant='danger'
                  >Remove From Cart</Button>
                ):(
                  <Button 
                  onClick={()=>{
                    dispatch({
                      type:'ADD_TO_CART',
                      payload:prod
                    })
                  }}
                  disable={!prod.inStock}>
                    {!prod.inStock ? 'out of stock':'Add to cart'}
                  </Button>
                )
            }
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct;
