import Home from "../pages/home";
import Rostino from "../pages/rostino";

export const routes = {
    home:{
        id:'1',
        path:'/',
        element:<Home/>
    },
    rostino:{
        id:'2',
        path:'/casestudy/rostino',
        element:<Rostino/>
    },
}