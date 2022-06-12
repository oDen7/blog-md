import { useNavigate } from "react-router-dom";

const RouteAuth = (props) => {
    let navigate = useNavigate();
    const { children, auth } = props;
    if (children && auth) {
        return children;
    } else {
        navigate("/404", { replace: true })
        return null;
    }
}

export default RouteAuth;