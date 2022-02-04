import LytAuth from "../layouts/LytAuth";
import loginRoutes from "./loginRoutes";
import Acerca from "../layouts/Acerca";
import LytSPA from "../layouts/LytSPA";
import Home from "../../view/Home/Home";


export default [
    {
        //si se pone una ruta que no existe me envia de regreso al login
        path:"*",
        redirect:"/login"
    },{
        path:"/acerca",
        components:{
            allPageView:Acerca
        }
    },
    loginRoutes,
    {
        path:"/",
        components:{
            allPageView:LytSPA
        },
        children:[
            {
                name:'home',
                path:'',
                components:{
                    sectionView:Home
                }
            }
        ]
    }

]