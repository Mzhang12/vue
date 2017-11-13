import overall from '../pages/overall.vue';
import marjor from '../pages/major.vue';
import college from '../pages/college.vue';
var routes = [
    {
        path: '/',
        redirect: '/overall'
    },
    {
        name: 'overall',
        path: '/overall',
        component: overall
    },
    {
        name: 'college',
        path: '/college',
        component: college
    },
    {
        name: 'major',
        path: '/major',
        component: marjor
    }
]
export default routes;