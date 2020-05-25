import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import * as actions from "../modules/counter";

const CounterContainer = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return(
        <Counter number={counter} 
                onIncrease={() => dispatch(actions.increment())} 
                onDecrease={() => dispatch(actions.decrement())} 
        />
    )
}

export default CounterContainer;