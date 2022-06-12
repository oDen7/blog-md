import { useReducer } from "react";

const reducer = (state, action) => {
    console.log("useReucer =========>");
    console.log(state);
    console.log(action);
    switch (action.type) {
        case "incr":
            return { count: state.count + 1 };
        case "decr":
            return { count: state.count - 1 };
        default:
            return new Error();
    }
}

const UseReducer = () => {
    const initState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <>
            <div style={{ marginBottom: '20px' }}>useReducer</div>
            <div> Count:{state.count}</div>
            <button onClick={() => dispatch({ type: 'incr' })}>+</button>
            <button style={{ marginLeft: '20px', marginTop: '20px' }} onClick={() => dispatch({ type: 'decr' })}>-</button>
        </>
    )
}

export default UseReducer;