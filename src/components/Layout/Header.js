import { Fragment } from "react";
import mealsImage from '../../assets/meals 9.53.04 PM.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header=props => {
    console.log("evaluating Header")
    return (<Fragment>
        <header className={classes.header}>
            <h1>MealsApp</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Delicious meals"/>
        </div>

    </Fragment>);
};
export default Header;