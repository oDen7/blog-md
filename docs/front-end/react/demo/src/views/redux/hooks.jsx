import { useSelector, useDispatch } from "react-redux";
import { changeCount } from "../../module/studyredux/action";
import { ADDCOUNT, SUBCOUNT } from "../../module/studyredux/state";
const ReduxHooks = () => {
    const countHook = useSelector(({ studyStore }) => {
        console.log(studyStore);
        return studyStore.count
    });

    const dispatch = useDispatch();
    return (
        <>
            <div>useHooks</div>
            <div>{countHook}</div>
            <div onClick={() => dispatch(changeCount({ type: ADDCOUNT, payload: { count: countHook + 1 } }))}>+1</div>
            <div onClick={() => dispatch(changeCount({ type: SUBCOUNT, payload: { count: countHook - 1 } }))}>+1</div>
        </>
    )
}

export default ReduxHooks;