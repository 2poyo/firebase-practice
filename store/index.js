import Vuex from 'vuex';
import firebase from '~/plugins/firebase'

export const state = () => ({
})

export const mutations = {
}

export const actions = {
  login: function () {
    console.log('login action')
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      const user = result.user;
      console.log('success : ' + user)
    }).catch(function(error) {
      var errorCode = error.code;
      console.log('error : ' + errorCode)
    });
  }
}

export const getters = {
}

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      todos: [
        {content: 'テスト', date: '2020-04-30', state: '作業前'},
        {content: 'コーディング', date: '2020-04-30', state: '作業中'},
        {content: '環境構築', date: '2020-04-30', state: '完了'}
      ]
    }),
    mutations: {
      insert: function(state, obj) {
        var d = new Date(obj.date);
        var fm = d.getFullYear()
                + '-' + ('00' + (d.getMonth() + 1)).slice(-2)
                + '-' + ('00' + d.getDate()).slice(-2);
        state.todos.unshift({
          content: obj.content,
          date: fm,
          state: '作業前'
        })
      }
    }
  })
}

export default createStore;
