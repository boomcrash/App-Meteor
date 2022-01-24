import LytAuth from "../layouts/LytAuth";
import login from "../../view/Auth/login";


export default {
    path:"/login",
    components:{
        allPageView:LytAuth
    },
    children:[
        {
            path:'',
            name:'login',
            components: {
                sectionView:login
            }
        }
    ]
}