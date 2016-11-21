<template>
<div class="container">
    <div class="page-header">
        <h1 id="timeline">Timeline</h1>
    </div>
    <div>
    <div class="text-left"><router-link class="btn btn-success" :to="{ name: 'add'}">Tambah jadwal</router-link></div><br>
    <table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Location</th>
                <th>Started_at</th>
                <th>Ended_at</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="schedule in schedules">
                <td>{{schedule.title}}</td>
                <td>{{schedule.description}}</td>
                <td>{{schedule.location}}</td>
                <td>{{schedule.started_at}}</td>
                <td>{{schedule.ended_at}}</td>
                <td>
                    <a @click.stop.prevent="deleteRecord(schedule.id)" class="btn btn-danger">Hapus </a> 
                    <a @click.stop.prevent="gotoEdit(schedule.id)" class="btn btn-success">Edit </a>
                </td>
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
  methods :{
      deleteRecord(id) {
          self = this
          var strconf = confirm("are you sure?")
          if (strconf==true) {
            request.delete("http://reminder-engine.herokuapp.com/users/schedules/"+id)
            .set({"Authorization": "Token token="+localStorage.usertoken})
            .set({'Content-Type': 'application/json'})
            .end(function(err, res){
                if (err) {
                    console.log(err)
                    alert("failed to delete data")
                } else {
                    self.fetchData()
                }
            });
          }
      },
      gotoEdit(id) {
          this.$router.push({ name: 'edit', params: { id: id }})
      },
      fetchData() {
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
},
  created() {
    this.fetchData()
  }
}
</script>
