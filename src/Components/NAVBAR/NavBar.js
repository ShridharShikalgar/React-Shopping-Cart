import React from 'react'
import { Container, FormControl, Navbar, Nav, Badge, Button } from 'react-bootstrap'
import {AiFillDelete} from 'react-icons/ai'
import Styles from './NavBar.module.css'
import Dropdown from 'react-bootstrap/Dropdown';
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { CartState } from '../../CONTEXT/Context';

const NavBar = () => {
  const {
    state:{cart},
    dispatch,
    productDispatch
  } = CartState()
  return (
    <Navbar bg='dark' variant='dark' className={Styles.Nav}>
        <Container>
            <Navbar.Brand>
                <Link to='/'>Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className={Styles.search}>
              <FormControl style={{width:500}}
                placeholder='Search a product'
                className='m-auto' //Bootstrap style add equal spacing to the elemnts
                onChange={(e)=>{
                  productDispatch({
                    type: 'FITER_BY_SEARCH',
                    payload: e.target.value,
                  })
                }}
              />
            </Navbar.Text>
            <Nav>
              <Dropdown style={{border:'none'}}>
                <Dropdown.Toggle variant="success">
                  <FaShoppingCart color='white' fontSize='25px' />
                  <Badge>{cart.length}</Badge>
                </Dropdown.Toggle>
                
                <Dropdown.Menu style={{minWidth:370}}>
                {
                  cart.length>0 ? (
                    <>
                    {
                      cart.map((prod)=>(
                        <span className={Styles.cartitem} key={prod.id}>
                        <img
                          src={prod.image}
                          className={Styles.cartItemImg}
                          alt={prod.name}
                        />

                        <div className={Styles.cartItemDetail}>
                          <span>{prod.price}</span>
                          <span>Rs.{prod.price.split(".")}</span>
                        </div>

                        <AiFillDelete
                          fontSize="20px"
                          style={{cursor: 'pointer'}}
                          onClick={()=>{
                            dispatch({
                              type:'REMOVE_FROM_CART',
                              payload:prod
                            })
                          }}
                        />
                        </span>
                      ))}
                      <Link to='/cart'>
                        <Button style={{width:'95%',margin:'0 10px'}}>
                          Go To Cart
                        </Button>
                      </Link>
                  </>
                  ):(<span style={{padding:10}}>Cart is Empty...!</span>)
                }
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default NavBar
