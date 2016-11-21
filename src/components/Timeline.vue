<template>
<div class="container">
    <div class="page-header">
        <h1 id="timeline">Timeline</h1>
    </div>
    <div>
    <table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Location</th>
                <th>Started_at</th>
                <th>Ended_at</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="schedule in schedules">
                <td>{{schedule.title}}</td>
                <td>{{schedule.description}}</td>
                <td>{{schedule.location}}</td>
                <td>{{schedule.started_at}}</td>
                <td>{{schedule.ended_at}}</td>
            </tr>
        </tbody>
    </table>
    <div>
    </div>
    </div>
</div>
</template>
<script>
var request = require('superagent');
export default {
  name: 'timeline',
  props: [],
  data() {
    return {
      schedules: []
    }
  },
  mounted() {
    self = this;
    var token = localStorage.usertoken
    console.log(token)
    request.get("http://reminder-engine.herokuapp.com/users/schedules")
      .set({"Authorization": "Token token="+token})
      .set({'Content-Type': 'application/json'})
      .end(function(err, res){
        if (err) {
            console.log(err)
        } else {
            if (res.status==200) {
                console.log(res)
                self.schedules = res.body.data
            } else {
                console.log(res)
            }
        }
      });
  }
}
</script>
