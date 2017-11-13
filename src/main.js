import './css/reset.css';
import Vue from 'vue';
import axios from './axios/axios';
import router from './routes/router';
import app from './app.vue';
import store from './store/store';
new Vue({
    el: '.container',
    router: router,
    store,
    render: function (createElement) {
        return createElement(app)
    },
    mounted: function () {
        
    }
})
if (module.hot) {
    module.hot.accept();
}