<template>
  <div>
    <upload accept="*" name="file" :multiple="true" url="/api/upload"/>
    <selects/>
    <orderList/>
    <paination/>
  </div>
</template>

<script>
import orderList from './orderList'
import paination from './paination'
import selects from './select'
import upload from '../Common/upload'

export default {
  name: 'order',
  components: {
    orderList,
    paination,
    selects,
    upload
  }
}
</script>

<style scoped>
  .el-pagination{
    margin-top: 20px;
  }
</style>
