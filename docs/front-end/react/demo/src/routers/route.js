/*
 * @File Name: 
 * @Description: 
 * @Author: oDen7
 * @LastEditors: oDen7
 * @LastEditTime: 2021-11-23 20:54:52
 */
import {
    lazy
} from "react";
const commons = [{
    path: "/404",
    name: "404",
    component: lazy(() => import("@/views/pageError")),
    isAuth: true,
    exact: true,
}]

const routes = [{
        path: "/",
        name: "Root",
        component: lazy(() => import('@/views/home')),
        isAuth: true,
        exact: true,
    },
    {
        path: "/home",
        name: "Home",
        title: "Home",
        component: lazy(() => import('@/views/home')),
        isAuth: true,
        exact: true,
    },
    {
        path: "/about",
        name: "About",
        title: "About",
        component: lazy(() => import('@/views/about')),
        isAuth: false,
        exact: true,
    },
    {
        path: "/hooks/useReducer",
        name: "UseReducer",
        title: "UseReducer",
        component: lazy(() => import('@/views/hooksDemo/useReducer')),
        isAuth: true,
        exact: true,
    },
    {
        path: "/hooks/useContext",
        name: "UseContext",
        title: "UseContext",
        component: lazy(() => import('@/views/hooksDemo/useContext')),
        isAuth: true,
        exact: true,
    },
    {
        path: "/redux/study",
        name: "StudyRedux",
        title: "StudyRedux",
        component: lazy(() => import('@/views/redux')),
        isAuth: true,
        exact: true,
    },
    ...commons,
]

export default routes;