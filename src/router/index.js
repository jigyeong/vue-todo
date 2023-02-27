import Vue from "vue"
import VueRouter from "vue-router";
import NewsView from "@/views/NewsView.vue"
import JobsView from "@/views/JobsView.vue"
import AskView from "@/views/AskView.vue"
import UserView from "@/views/UserView.vue"
import Components from "@/views/Components.vue"

const routes = [
    {path: '/news', name: 'News',component: NewsView},
    {path: '/ask', name: 'Ask',component: AskView},
    {path: '/jobs', name: 'Jobs',component: JobsView},
    {path: '/user/:id', name: 'User',component: UserView},
    {path: '/components', name: 'Components',component: Components}
]

export const router = new VueRouter({
    mode: 'history',
    routes
})

Vue.use(VueRouter);