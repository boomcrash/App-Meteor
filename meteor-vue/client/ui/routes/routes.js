import LytAuth from "../layouts/LytAuth";
import loginRoutes from "./loginRoutes";
import Acerca from "../layouts/Acerca";


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
    loginRoutes
]