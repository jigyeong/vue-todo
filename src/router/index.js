import Vue from "vue"
import VueRouter from "vue-router";
import NewsView from "@/views/NewsView.vue"
import JobsView from "@/views/JobsView.vue"
import AskView from "@/views/AskView.vue"

Vue.use(VueRouter);

const routes = [
    {path: '/news', component: NewsView},
    {path: '/ask', component: AskView},
    {path: '/jobs', component: JobsView}
]

export const router = new VueRouter({
    routes
})