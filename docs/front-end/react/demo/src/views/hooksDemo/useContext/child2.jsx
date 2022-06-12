import { useContext } from "react";
import PIPE from "./context";
const Child2 = () => {
    const { test1 } = useContext(PIPE);
    return (
        <div style={{ marginTop: '20px' }}>订阅了test1-----{test1}</div>
    )
}

export default Child2;