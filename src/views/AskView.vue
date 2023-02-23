<template>
  <div>
    <div v-for="ask in fetchedAsk" :key="ask.key">
        Q. {{ ask.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed :{
        ...mapGetters(['fetchedAsk']),
        // ...mapState({
        //     fetchedAsk : state=>state.ask
        // })
        
    },
    created(){
        this.$store.dispatch('FETCH_ASK')
    }
}
</script>

<style>

</style>