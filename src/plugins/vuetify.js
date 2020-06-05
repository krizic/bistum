// src/plugins/vuetify.js

import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.use(Vuetify);

const opts = {
  theme: {
    light: {
      primary: '#ff0000',
      secondary: '#ff0000',
      accent: '#ff0000',
      error: '#ff0000',
      info: '#ff0000',
      success: '#ff0000',
      warning: '#ff0000'
    }

  },
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
};

export default new Vuetify(opts);
