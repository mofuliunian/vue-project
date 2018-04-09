<template>
  <div>
    <input type="file" :accept="this.accept" :name="this.name" :multiple="this.multiple" ref="uploadfile">
    <button @click="handleSuccess">上传</button>
  </div>
</template>

<script>
export default {
  name: 'upload',
  props: ['name', 'url', 'multiple', 'accept'],
  methods: {
    handleSuccess () {
      const file = this.$refs.uploadfile
      const formData = new FormData()
      if (file.files[0]) {
        formData.append(file.name, file.files[0])
        console.log(file.files[0], 'file')
        this.$http.post(this.url, formData).then(res => {
          if (res.data.code) {
            this.$message({
              message: '恭喜你，上传成功',
              type: 'success'
            })
          } else {
            this.$message.error('上传失败请重新上传')
          }
        })
      } else {
        this.$message.error('请选择文件重新上传')
      }
    }
  }
}
</script>

<style scoped>
</style>
