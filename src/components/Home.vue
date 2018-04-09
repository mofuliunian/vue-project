<template>
  <el-container>
    <el-aside width="auto" >
      <navList />
    </el-aside>
    <el-container>
      <el-header>
        <topList />
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import topList from './Common/topList'
import navList from './Common/navList'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    topList,
    navList
  }
}
</script>

<style scoped>
  .el-container{
    width: 100%;
    height: 100%;
  }
  .el-aside{
    background: #efefef;
  }
  .el-header{
    padding: 0;
  }
</style>
