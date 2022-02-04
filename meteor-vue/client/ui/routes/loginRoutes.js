import LytAuth from "../layouts/LytAuth";
import login from "../../view/Auth/login";
import ForgotPassword from "../../view/Auth/ForgotPassword";
import ResetPassword from "../../view/Auth/ResetPassword";
import SetInitialPassword from "../../view/Auth/SetInitialPassword";


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
        },
        {
            path:'/forgot-password',
            name:'forgotPassword',
            components: {
                sectionView:ForgotPassword
            }
        },
        {
            path:'/reset-password/:token',
            name:'resetPassword',
            components: {
                sectionView:ResetPassword
            }
        },
        {
            path:'/enroll-account/:token',
            name:'enrollAccount',
            components: {
                sectionView:SetInitialPassword
            }
        }
    ]
}