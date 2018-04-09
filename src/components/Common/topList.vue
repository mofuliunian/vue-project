<template>
  <div id="top">
    <i class="el-icon-tickets" @click="checkCollapse"></i>
    {{title}}
  </div>
</template>

<script>
import bus from 'tools/bus'
import {mapState} from 'vuex'
export default {
  name: 'topList',
  data () {
    return {
    }
  },
  components: {
  },
  computed: {
    ...mapState({
      title: state => state.app.title
    })
  },
  methods: {
    checkCollapse () {
      bus.$emit('changeCollapse')
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  #top{
    background: #efefef;
    color: #333;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 60px;
    font-size: 24px;
  }
</style>
