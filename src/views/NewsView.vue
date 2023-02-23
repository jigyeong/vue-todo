<template>
  <div>
    <div v-for="news in this.$store.state.news" :key="news.key">
        {{ news.title }}
    </div>
  </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch('FETCH_NEWS')
    }
}
</script>

<style>

</style>