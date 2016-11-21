<template>
<div class="panel panel-default">
  <div class="panel-body" >
    <h3 class="panel-title">Edit Timeline</h3>
    <div class="form-group text-left">
        <label>Title:</label>
        <input v-model="title" type="text" class="form-control">
    </div>
    <div class="form-group text-left">
        <label>Description:</label>
        <input v-model="description" type="text" class="form-control">
    </div>
    <div class="form-group text-left">
        <label>Location:</label>
        <input v-model="location" type="text" class="form-control">
    </div>
    <div class="form-group text-left">
        <label>Started_at:</label>
        <input v-model="started_at" type="text" class="form-control">
    </div>
    <div class="form-group text-left">
        <label>ended_at:</label>
        <input v-model="ended_at" type="text" class="form-control">
    </div>
    <div class="form-group text-left">
        <a class="btn btn-success" @click.stop.prevent="sendData(id)"> Submit </a>
    </div>
  </div>
</template>
</div>

<script>
var request = require('superagent');
export default {
  name: 'Edit',
  props: ['appState', 'loginSucceed'],
  data() {
    return {
      id: '',
      title: '',
      description: '',
      location: '',
      started_at: '',
      ended_at: '',
    }
  },
  created() {
      self = this
      var token = localStorage.usertoken
      var id = this.$route.params.id
      request.get("http://reminder-engine.herokuapp.com/users/schedules/"+id)
      .set({"Authorization": "Token token="+token})
      .set({'Content-Type': 'application/json'})
      .end(function(err, res){
        if (err) {
            console.log(err)
        } else {
            if (res.status==200) {
                console.log(res)
                self.id = res.body.data.id
                self.title = res.body.data.title
                self.description = res.body.data.description
                self.location = res.body.data.location
                self.started_at = res.body.data.started_at
                self.ended_at = res.body.data.ended_at
            } else {
                console.log(res)
            }
        }
      });

  },
  methods: {
    sendData(id) {
        self = this;
        var req_body = {
          'title': self.title,
          'description': self.description,
          'location': self.location,
          'started_at': self.started_at,
          'ended_at': self.ended_at,
        }
        request.patch("http://reminder-engine.herokuapp.com/users/schedules/"+id)
        .set({"Authorization": "Token token="+localStorage.usertoken})
        .set({'Content-Type': 'application/json'})
        .send(req_body)
        .end(function(err, res){
        if (err) {
            console.log(err)
        } else {
            if (res.status==200) {
                console.log(res)
                self.$router.push({ name: 'dashboard'})
            } else {
                alert("failed to fetch data")
                console.log(res)
            }
        }
      });
    }
  }
}
</script>


<style scoped>

</style>
