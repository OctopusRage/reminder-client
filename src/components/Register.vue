<template>
<!--Modal for Register-->
<div class="modal-dialog" style="margin-bottom:0" id="modal-register">
  <div class="modal-content">
    <div class="panel-heading">
      <h3 class="panel-title">Daftar Ke Sistem Reminder</h3>
    </div>
    <div class="panel-body">
        <fieldset>
        
          <div class="form-group">
            <input class="form-control" placeholder="Nama" name="nama" type="text" value="" autofocus="" id="edtName">
          </div>
          <div class="form-group">
            <input class="form-control" placeholder="E-mail" name="email" type="email" id="edtEmail">
          </div>
          <label>Jenis Kelamin</label>
          <div class="radio">
            <label>
              <input name="janisKelamin" type="radio" value="Perempuan" > Perempuan
            </label><br>
            <label>
              <input name="janisKelamin" type="radio" value="Laki - Laki"> Laki - Laki
            </label>
          </div>
          <label>Tanggal Lahir</label>
          <form class="form-inline">
            <div class="form-group">
              <input class="form-control" placeholder="Date" name="tanggal" type="date">
            </div>              
          </form>
          <div class="form-group">
            <input class="form-control" placeholder="Username" name="username" type="text" value="">
          </div>
          <div class="form-group">
            <input class="form-control" placeholder="Password" name="password" type="password" value="" id="edtPassword">
          </div>
          <div class="form-group">
            <input class="form-control" placeholder="Password" name="password" type="password" value="" id="edtPasswordConfirm">
          </div>
          <div class="checkbox">
            <label>
              <input name="remember" type="checkbox" value="Remember Me">Saya bersedia menyetujui <a href="javascript:;">Syarat dan Ketentuan</a>
            </label>
          </div>
          <!-- Change this to a button or input when using this as a form -->
          <button type="button" id="btnRegister" @click="registerUser"  class="btn btn-sm btn-primary"><i :class="btnLoading" ></i> Register</button>
          <br>
          <br>
          <p>Sudah punya akun?&nbsp; <a href="#" >Login Disini...</a> </p>
          
        </fieldset>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'register',
  props: ['appState', 'registerSucceed'],
  data() {
    return {
      email: '',
      password: '',
      name:'' ,
      gender:'male',
      passwordConfirmation: '',
      btnLoading: ''
    }
  },
  methods: {
    registerUser() {
        this.btnLoading = 'fa fa-spinner fa-spin';
        // GET /someUrl
        var req_body = {
          'user[email]': this.email,
          'user[password]': this.password,
          'user[password_confirmation]': this.password,
          'user[name]': this.name,
          'user[gender]': this.gender
        }
        this.$http.post('https://reminder-engine.herokuapp.com/user', req_body).then(
          (response)=>{
            if (response.status==200) {
              this.btnLoading = '';
              this.registerSucceed(response.body.data.authentication_token);
              this.appState();
            } else {
              this.btnLoading = '';
              alert("password atau email kurang benar");
            }
          }, 
          (response)=> {
            this.btnLoading = '';
            alert('hahaha');
          }
        );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
