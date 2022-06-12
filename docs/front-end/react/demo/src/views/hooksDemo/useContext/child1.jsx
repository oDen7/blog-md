import { useContext } from "react";
import PIPE from "./context";
const Child1 = () => {
    const { test } = useContext(PIPE);
    return (
        <div style={{ marginTop: '20px' }}>订阅了test-----{test}</div>
    )
}

export default Child1;