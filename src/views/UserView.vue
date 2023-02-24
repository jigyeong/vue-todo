<template>
  <div>
    <h1>user</h1>
    <section>
        <p>
            {{ fetchUser.id }}
        </p>
        <p>
            {{ fetchUser.karma }}
        </p>
        <p>
            {{ fetchUser.created }}
        </p>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    created(){
        console.log(this.$route.params.id)
        this.$store.dispatch('FETCH_USER',this.$route.params.id)
    },
    computed:{
        ...mapGetters(['fetchUser'])
    }
}
</script>

<style>

</style>