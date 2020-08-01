<template>
  <section class="container">
    <h1>Todo-List</h1>
    <button class="button is-primary is-rounded" @click="login">login</button>
    <div class="addArea">
      <input type="date" name="addTime" v-model="date"><br>
      <input type="text" v-model="content1" @change="insert"><br>
      <input type="text" v-model="content2" @change="insert"><br>
      <input type="text" v-model="content3" @change="insert"><br>
      <input type="text" v-model="content4" @change="insert">
<!--      <button class="button button&#45;&#45;green" @click="insert">追加</button>-->
    </div>
    <div class="Filter">
      <button class="button button--gray is-active">All</button>
      <button class="button button--gray">BeforeWork</button>
      <button class="button button--gray">WorkingState</button>
      <button class="button button--gray">Finished</button>
    </div>
    <table class="Lists table">
      <thead>
        <tr>
          <th>task</th>
          <th>InputTime</th>
          <th>state</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in todos" :key="index">
          <td>{{ item.content }}</td>
          <td>{{ item.date }}</td>
          <td><button class="button">{{ item.state }}</button></td>
          <td><button class="button button--delete">削除</button></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    data: function () {
      return {
        date: "",
        content1:"jhg",
        content2:"",
        content3:"",
        content4:"",
      }
    },
    computed: {
      ...mapState(['todos'])
    },
    methods: {
      insert: function() {
        if(this.content1 != ''){
          this.$store.commit('insert', {content: this.content1 ,date: this.date});
          this.content1 = '';
        }
      },
      login: function () {
        console.log('login')
        this.$store.dispatch('login')
      }
    },
   //  mounted() {
   //   db.collection('users')
   //     .add({
   //       first: 'Ada',
   //       last: 'Lovelace',
   //       born: 1815
   //     })
   //     .then(function(docRef) {
   //       console.log('Document written with ID: ', docRef.id)
   //     })
   //     .catch(function(error) {
   //       console.error('Error adding document: ', error)
   //     })
   // }
  }


</script>
