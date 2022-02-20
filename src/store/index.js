import { createStore } from 'vuex';

import news from '../modules/news/store/news';
import championship from '../modules/championship/store/championship';

const store = createStore({
    modules: {
        news,
        championship,
    },
});

export default store;