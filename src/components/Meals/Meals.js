import { Fragment } from "react"
import MealsSummary from "./MealsSummary"
import AvailableMeals from "./AvailableMeals"

const Meals=()=>{
    console.log("evaluating Meals")
    return <Fragment>
        <MealsSummary/>
        <AvailableMeals/>
    </Fragment>
}
export default Meals;