import { createStore } from 'vuex';

import news from '../modules/news/store/news';


const store = createStore({
    modules: {
        news,
    },
});

export default store;