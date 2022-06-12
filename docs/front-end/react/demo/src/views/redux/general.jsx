import { connect } from "react-redux";
import { ADDCOUNT, SUBCOUNT } from "../../module/studyredux/state";
const General = (props) => {
    const { count, addCountAction, subCountAction } = props;
    const addCount = () => {
        addCountAction({ type: ADDCOUNT, payload: { count: count + 1 } });
    }
    const subCount = () => {
        subCountAction({ type: SUBCOUNT, payload: { count: count - 1 } });
    }
    return (
        <>
            <div>普通方式</div>
            {count}
            <div onClick={() => addCount()}>+1</div>
            <div onClick={() => subCount()}>-1</div>
        </>

    )
}

//需要渲染什么数据
function mapStateToProps({ studyStore }) {
    return {
        count: studyStore.count
    }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
    return {
        addCountAction: ({ type, payload }) => dispatch({ type, payload }),
        subCountAction: ({ type, payload }) => dispatch({ type, payload })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(General);