import './css/reset.css';
import Vue from 'vue';
import axios from './axios/axios';
import router from './routes/router';
import app from './app.vue';
import store from './store/store';
import mocker from './axios/mockApi'
new Vue({
    el: '.container',
    router: router,
    store,
    render: function (createElement) {
        return createElement(app)
    },
    mounted: function () {
        this.$http.get('/chooseExam/selectedConitions').then(res => {
            console.log(res.data);
        })
    }
})
if (module.hot) {
    module.hot.accept();
}