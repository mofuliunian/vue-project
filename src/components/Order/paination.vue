<template>
  <el-pagination
    @size-change="handleSizeChange"
    :page-size="5"
    @current-change="handleCurrentChange"
    :current-page="1"
    :page-sizes="[5, 10, 15, 20]"
    background
    layout="total, sizes, prev, pager, next, jumper"
    :total="orderLen">
  </el-pagination>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'order',
  computed: {
    ...mapState({
      orderLen: state => state.order.orderLen
    })
  },
  methods: {
    ...mapActions(['pageChange', 'pageSumChange', 'filter']),
    handleCurrentChange (page) {
      this.pageChange(page)
    },
    handleSizeChange (pageSum) {
      this.pageSumChange(pageSum)
    }
  }
}
</script>

<style scoped>
  .el-pagination{
    margin-top: 20px;
  }
</style>
