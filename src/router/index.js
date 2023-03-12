import { createRouter,createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import SearchPage from "@/views/SearchPage.vue";
import ScanPage from "@/views/ScanPage.vue";
import LikesPage from "@/views/LikesPage.vue";
import CreatePlayList from "@/views/CreatePlayList.vue";
import LibraryPage from "@/views/LibraryPage.vue";
import PlayList from "@/views/PlayList.vue";
import LoginPage from "@/views/LoginPage.vue";
import UserPlayList from "@/views/UserPlayList.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import { getAuth } from "firebase/auth";
const routes = [
    {
        path: "/",
        name : "Home",
        component : HomePage
    },
    {
        path: "/search",
        name : "Search",
        component : SearchPage
    },
    {
        path: "/scan",
        name : "Scan",
        component : ScanPage
    },
    {
        path: "/likes",
        name : "Likes",
        component : LikesPage,
        meta:{
            requiresAuth : true,
        }
    },
    {
        path: "/createplaylist",
        name : "CreatePlayList",
        component : CreatePlayList,
        // meta:{
        //     requiresAuth : true,
        // }
    },
    {
        path: "/library",
        name : "Library",
        component : LibraryPage,
        meta:{
            requiresAuth : true,
        }
    },

    {
        path: "/playlist/:name",
        name : "userPlaylist",
        component : UserPlayList,
        meta:{
            requiresAuth : true,
        }
    },
    {
        path: "/:type/:value",
        name : "playlist",
        component : PlayList,
    },
    {
        path: "/login",
        name : "login",
        component : LoginPage
    },
    {
        path: "/register",
        name : "register",
        component : RegisterPage
    },
]

const router =createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach(async (to,from,next)=>{
    if(to.matched.some((record)=>record.meta.requiresAuth)){
        // const id = localStorage.getItem('user');
        // console.log(id);
        if(await getAuth().currentUser){
            next();
        }else{
            alert('Login to get access!');
            next('/');
        }
    }else{
        next();
    }
})
export default router;