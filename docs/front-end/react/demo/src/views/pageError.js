import { useLocation  } from "react-router";
const FourXX = (props)=>{
    return <div>{props.children}</div>
}

const PageError = () => {
    let {pathname}  = useLocation();
    if(/^\/4/g.test(pathname)){
        return <FourXX>404</FourXX>;
    }
}


export default PageError;