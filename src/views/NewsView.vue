<template>
  <div>
    {{ this.$store.state.news }}
    <div v-for="user in users" :key="user.key">
        {{ user.title }}
    </div>
  </div>
</template>

<script>
import { fetchNewsList } from '@/api'

export default {
    data(){
        return {
            users: []
        }
    },
    created(){
        console.log('created')
        fetchNewsList()
        .then(res => {
            this.$store.state.news = res.data;
            this.users = res.data
        })
        .catch(err => console.log(err))
    }
}
</script>

<style>

</style>