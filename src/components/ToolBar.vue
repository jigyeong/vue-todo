<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .header {
        color: black;
        background-color: rgb(50, 126, 123);
        display: flex;
        padding: 8px;
    }
    .header .router-link-exact-active{
        color:white;
        font-weight: bold;
    }
    .header a {
        color: black;
    }
</style>