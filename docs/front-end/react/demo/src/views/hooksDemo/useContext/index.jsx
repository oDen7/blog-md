import PIPE from "./context";
import Child1 from "./child1";
import Child2 from "./child2";
const initState = {
    test: 1,
    test1: 2,
}

const UseContext = () => {
    return (
        <>
            <div style={{ marginBottom: '20px' }}>useContext</div>
            <PIPE.Provider value={initState}>
                <Child1 />
                <Child2 />
            </PIPE.Provider>
        </>
    )

}


export default UseContext;