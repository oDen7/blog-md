import './App.css';
import { Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import LazyComponent from '@/hooks/lazy';
import RouteAuth from "@/hooks/routeAuth";
import routes from "@/routers/route";
const GetRoutes = (routes) => {

  return (
    <Routes>
      {
        routes.map((item, index) => {
          return <Route path={item.path} key={index} element={<RouteAuth auth={item.isAuth} >
            <LazyComponent component={item.component} name={item.name} />
          </RouteAuth>} />
        })
      }
    </Routes>
  )
}

const NavList = () => {
  let navigate = useNavigate();
  const LI = ({ obj }) => {
    let filterLists = ["/", "/404"];
    if (filterLists.indexOf(obj.path) === -1) {
      return <li onClick={() => navigate(obj.path)} key={obj.name}>{obj.title}</li>
    }
    return null;
  }

  return (
    <ul>
      {
        routes.map((item, index) => {
          return <LI obj={item} key={index} />;
        })
      }
    </ul>)
}



function App() {

  return (
    <>
      <div className="App">
        <NavList />
        <Suspense fallback={<div>...loading</div>}>
          {GetRoutes(routes)}
        </Suspense>
      </div>
    </>
  );
}

export default App;
