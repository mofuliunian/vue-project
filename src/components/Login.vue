<template>
  <div id="login">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="repulse"
      :clickEffect="true"
      clickMode="push"
    />
    <div class="from">
      <div class="inp">
        <transition name="fade">
          <p v-show="use.use || user.length > 0" transiton="fade">用户名</p>
        </transition>
        <input
          v-model="user"
          :placeholder="use.p"
          class="user"
          @focus="focus('use')"
          @blur="blur('use', '用户名')"/>
      </div>
      <div class="inp">
        <transition name="fade">
          <p v-show="pas.pas || password.length > 0" transiton="fade">密码</p>
        </transition>
        <input
          v-model="password"
          type="password"
          :placeholder="pas.p"
          class="password"
          @focus="focus('pas')"
          @blur="blur('pas', '密码')"/>
      </div>
      <el-button type="primary" class="button" @click.native="to">登陆</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user: '',
      password: '',
      use: {
        use: false,
        p: '用户名'
      },
      pas: {
        pas: false,
        p: '密码'
      }
    }
  },
  methods: {
    to () {
      this.$http.post('/api/login', {userName: this.user, password: this.password}).then(res => {
        if (res.data.code === 1) {
          window.localStorage.setItem('token', res.data.token)
          this.$router.push({path: '/home'})
          this.$message({
            message: '恭喜你，登陆成功',
            type: 'success'
          })
        } else if (res.data.code === 2) {
          this.$message.error('登陆失败，重新登陆')
        }
      })
    },
    focus (name) {
      this[name][name] = true
      this[name].p = ''
    },
    blur (name, pl) {
      this[name][name] = false
      this[name].p = pl
    }
  }
}
</script>

<style scoped>
  #login{
    background: url('../../static/img/xk.jpg') no-repeat;
    background-size:100% 100%;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  #particles-js{
    width: 100%;
    height: 100%;
  }
  .from{
    position: absolute;
    background: rgba(38, 83, 117, .6);
    width: 30%;
    height: 40%;
    left: 35%;
    top: 30%;
    border-radius: 5%;
  }
  .user, .password, .button {
    margin: 0 10%;
    margin-top: 10%;
    width: 80%;
  }
  .inp{
    padding-top: 2%;
    position: relative;
  }
  .inp>p{
    position: absolute;
    top: 20%;
    width: 100%;
    padding-left: 10%;
    font-size: 12px;
    color: #eee;
  }
  .user, .password{
    box-sizing: border-box;
    border: none;
    background: transparent;
    outline: none;
    border-bottom: 1px solid #fff;
    color: #fff;
    height: 100%;
    font-size: 16px;
    padding: 10px;
  }
  input:focus{
    border-bottom: 1px solid #0cf;
    transition: border-bottom 1s;
  }
  input::-webkit-input-placeholder {
     color: #fff;
  }
  .fade-enter-active {
    transition: opacity 1s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
