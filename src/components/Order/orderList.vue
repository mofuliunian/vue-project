<template>
  <el-table
    :data="orderGet"
    style="width: 100%"
    :height="400"
    v-loading="loading">
    <el-table-column
      v-for="(v, i) in label"
      :key="i"
      :label="v.label"
      width="150px">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row[v.type] }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="150px">
      <template slot-scope="scope">
        <el-button
          size="mini">编辑
        </el-button>
        <el-button
          size="mini"
          type="danger">删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'orderList',
  data () {
    return {
      label: [
        {label: 'ID', type: 'id'},
        {label: '订单号', type: 'orderNumber'},
        {label: '商品名称', type: 'name'},
        {label: 'Sku', type: 'sku'},
        {label: '货号', type: 'itemNo'},
        {label: '订单金额', type: 'orderAmount'},
        {label: '订单状态', type: 'orderState'},
        {label: '支付方式', type: 'methodPayment'},
        {label: '创建时间', type: 'createDate'},
        {label: '购买人', type: 'purchaser'},
        {label: '用户id', type: 'userID'},
        {label: '收货人', type: 'consignee'},
        {label: '收货地址', type: 'shippingAddress'},
        {label: '联系方式', type: 'phone'},
        {label: '备注', type: 'remarks'},
        {label: '发货商家', type: 'deliver'},
        {label: '商家id', type: 'shopID'},
        {label: '发货时间', type: 'deliveryTime'},
        {label: '物流公司', type: 'logisticsCompany'},
        {label: '物流单号', type: 'logisticsID'},
        {label: '商家备注', type: 'shopRemarks'},
        {label: '退货状态', type: 'returnsState'}
      ]
    }
  },
  computed: {
    orderGet: state => state.$store.getters.orderGet,
    ...mapState({
      loading: state => state.order.loading
    })
  },
  methods: {
    ...mapActions(['getOrder'])
  },
  mounted () {
    this.getOrder({
      page: 0
    })
  }
}
</script>

<style scoped>
</style>
