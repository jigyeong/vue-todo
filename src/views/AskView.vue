<template>
  <div>
    <p v-for="ask in fetchedAsk" :key="ask.key">
        Q. {{ ask.title }}
        <small>
          {{ ask.user }}
        </small>
    </p>
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