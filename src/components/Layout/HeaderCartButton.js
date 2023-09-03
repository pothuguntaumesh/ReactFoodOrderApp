import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../store/cart-context";

const HeaderCartButton=props=>{
   const [isButtonHighlighted,setIsButtonHighlighted]=useState(false);  
   const cartCtx= useContext(CartContext);
   const {items}=cartCtx;
   const btnClass=`${classes.button} ${isButtonHighlighted? classes.bump:''}`;

   useEffect(()=>{
    if(items.length===0){
        return
    }
    setIsButtonHighlighted(true)
    const timer=setTimeout(()=>{setIsButtonHighlighted(false)},300);
    return ()=>{
        clearTimeout(timer)
    }

   },[items])
   const numberOfCartItems=items.reduce((curNumber,item)=>{
    return curNumber+item.amount;
   },0);
    return <button className={btnClass} onClick={props.onClick}>
        <span className={classes.icon} >
            <CartIcon></CartIcon>
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>

};
export default HeaderCartButton;