<template>
  <div>
    <el-radio-group style="margin-bottom: 20px">
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#efefef"
      :router="true"
      :unique-opened="true">
      <el-submenu v-for="(data, i) in navMenu" :index='data.menuName' :key="i">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{data.menuName}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(datas, j) in data.childMenu" :key="j" :index="datas.route.path">{{datas.menuName}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    <!--{{doneTodos}}-->
  </div>
</template>

<script>
import bus from 'tools/bus'
import {mapActions, mapState, mapGetters} from 'vuex'

export default {
  name: 'navList',
  data () {
    return {
      isCollapse: false
    }
  },
  computed: {
    ...mapState({
      navMenu: state => state.app.navMenu
    }),
    ...mapGetters(['doneTodos'])
  },
  methods: {
    ...mapActions(['getMenu'])
  },
  mounted () {
    bus.$on('changeCollapse', () => {
      this.isCollapse = !this.isCollapse
    })
    this.getMenu(this)
  }
}
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
