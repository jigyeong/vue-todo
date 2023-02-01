<template>
  <div class="clearAllContainer">
   <span class="clearAllBtn" @click="clearAll">Clear All</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations({
      clearAll : 'clearAll'
    })
    // clearAll: function(){
    //   // this.$emit('clearAll')
    //   this.$store.commit('clearAll')
    // }
  }
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: gray;
  /* 추가 */
  display: block;
}
</style>