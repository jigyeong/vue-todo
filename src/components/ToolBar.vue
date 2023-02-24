<template>
  <div class="header">
    <router-link to="/news">News</router-link>
    <router-link to="/ask">Ask</router-link>
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .header {
        color: rgb(38, 38, 38);
        background-color: white;
        display: block;
        padding: 10px;
        align-items: center;
        box-shadow: 0 1px 2px hsl(0deg 0% 0% / 20%);
    }
    .header .router-link-exact-active{
        color:rgb(23, 61, 92);
        font-weight: bold;
    }
    .header a {
        color: rgb(38, 38, 38);
        text-decoration-line: none;
        padding-right: 20px;
    }
</style>