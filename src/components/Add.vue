<template>
<div class="panel panel-default">
  <div class="panel-body" >
    <h3 class="panel-title">Add Timeline</h3>
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
        <a class="btn btn-success" @click.stop.prevent="sendData()"> Submit </a>
    </div>
  </div>
</template>
</div>

<script>
var request = require('superagent');
export default {
  name: 'add',
  props: ['appState', 'loginSucceed'],
  data() {
    return {
      title: '',
      description: '',
      location: '',
      started_at: '',
      ended_at: '',
    }
  },
  methods: {
    sendData() {
        self = this;
        var req_body = {
          'title': self.title,
          'description': self.description,
          'location': self.location,
          'started_at': self.started_at,
          'ended_at': self.ended_at,
        }
        request.post("http://reminder-engine.herokuapp.com/users/schedules")
        .set({"Authorization": "Token token="+localStorage.usertoken})
        .set({'Content-Type': 'application/json'})
        .send(req_body)
        .end(function(err, res){
        if (err) {
            console.log(err)
        } else {
            if (res.status==201) {
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
