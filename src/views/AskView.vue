<template>
  <div>
    <div v-for="ask in askList" :key="ask.key">
        Q. {{ ask.title }}
    </div>
  </div>
</template>

<script>
import { fetchAskList } from '@/api'

export default {
    data(){
        return {
            askList : []
        }
    },
    created(){
        // var vm = this;
        fetchAskList().then(res=>{
            // vm.askList = res.data;
            this.askList = res.data;
        })
    }
}
</script>

<style>

</style>