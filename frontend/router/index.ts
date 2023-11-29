import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Home from "@/views/home/Home.vue"
import App from "@/views/app/AppHome.vue"
import NNS from "@/views/app/modules/NNS.vue"
import Transactions from "@/views/transactions/Transactions.vue"
import Wallet from "@/views/app/modules/Wallet.vue"
import DashBoard from "@/views/app/modules/Dashboard.vue"
import errors from "./modules/errors"
import { initAuth } from "@/api/auth"
import { setCurrentIdentity } from "@/api/canister_pool"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/app",
    // name: 'App',
    component: App,
    beforeEnter: async (to, from, next) => {
      //校验权限，提前准备好canister的连接，以免出现调用canister时没有认证用户的情况
      try {
        const ai = await initAuth()
        if (ai.info) {
          setCurrentIdentity(ai.info.identity, ai.info.principal)
        }
        next()
      } catch (error) {
        // 处理错误情况
        console.error("beforeEnter Err:", error)
        // 没有登录的情况下，重定向到登录页面
        next("/")
      }
    },
    children: [
      { name: "App", path: "", component: DashBoard },
      { path: "wallet", component: Wallet },
      { path: "transactions/:address?", component: Transactions },
      { path: "nns", component: NNS },
    ],
  },
  ...errors,
  {
    path: "/:catchAll(.*)",
    redirect: "/error/404",
  },
]

const router = createRouter({
  history: createWebHistory("/"),
  routes,
})

export default router
