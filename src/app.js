import LineStatuses from './components/line-statuses/line-statuses.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

new Vue({

    el: '#vue-app',
    components: {

        LineStatuses

    }

});