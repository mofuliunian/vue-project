<template>
  <el-select v-model="value" placeholder="请选择" @change="change">
    <el-option
      v-for="(item, i) in type"
      :key="i"
      :label="item"
      :value="i">
    </el-option>
  </el-select>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'order',
  data () {
    return {
      value: '',
      type: ['全部', '未支付', '支付失败', '审核中', '审核失败', '待发货', '已发货', '交易成功', '已取消', '拒收退货中', '退款中', '已退款']
    }
  },
  methods: {
    ...mapActions(['filter']),
    change (filter) {
      this.filter(filter)
    }
  }
}
</script>
