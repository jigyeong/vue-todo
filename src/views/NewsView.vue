<template>
  <div>
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
            this.users = res.data
        })
        .catch(err => console.log(err))
    }
}
</script>

<style>

</style>