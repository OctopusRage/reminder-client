<template>
  <div class="modal-dialog" style="margin-bottom:0" id="modal-login">
    <div class="modal-content">
      <div class="panel-heading">
        <h3 class="panel-title">Masuk Ke Sistem</h3>
      </div>
      <div class="panel-body" id="panelLogin">
          <fieldset>
            <div class="form-group">
              <input class="form-control" v-model="email" placeholder="E-mail" name="email" type="email" autofocus="" id="edtEmailLogin"/>
            </div>
            <div class="form-group">
              <input class="form-control" v-model="password" placeholder="Password" name="password" type="password" value="" id="edtPasswordLogin"/>
            </div>
            <div class="checkbox">
              <label>
                <input name="remember" type="checkbox" value="Remember Me"/>
              </label>
            </div>
            <a href="#Login" @click="loginCredential"  class="btn btn-sm btn-primary"><i :class="isLoginProgress" ></i>  Masuk</a>
            <br/>
            <p style="margin-top:10px;">
              Belum punya akun? <a href="#Register">Daftar Disini...</a>
            </p>
          </fieldset>
      </div>
      <p>Message is: {{ email }} and {{password}} </p>
    </div>
  </div>
</template>

<script>
var request = require('superagent');
export default {
  name: 'login',
  props: ['appState', 'loginSucceed'],
  data() {
    return {
      email: '',
      password: '',
      isLoginProgress: ''
    }
  },
  methods: {
    loginCredential() {
        this.isLoginProgress = 'fa fa-spinner fa-spin';
        self = this;
        var req_body = {
          'email': this.email,
          'password': this.password
        }
        request.post('http://reminder-engine.herokuapp.com/users/sessions')
          .set('Accept', 'application/json')
          .send(req_body)
          .end(function(err, res){
            if (err) {
              self.isLoginProgress = '';
              alert("hahahaha");
            }
            if (res.status==200) {
              self.isLoginProgress = '';
              localStorage.clean;
              localStorage.setItem('usertoken', res.body.data.authentication_token);
              self.$router.push({ name: 'dashboard'});
            } else {
              self.isLoginProgress = '';
              alert("password atau email kurang benar");
            }
          
          });
        /*this.$http.post('http://reminder-engine.herokuapp.com/users/sessions', req_body).then(
          (response)=>{
            if (response.status==200) {
              this.isLoginProgress = '';
              localStorage.clean;
              localStorage.setItem('usertoken', response.body.data.authentication_token);
              this.$router.push({ name: 'dashboard'});
            } else {
              this.isLoginProgress = '';
              alert("password atau email kurang benar");
            }
          }, 
          (response)=> {
            this.isLoginProgress = '';
            alert('hahaha');
          }
        );*/
    }
  }
}
</script>


<style scoped>

</style>
