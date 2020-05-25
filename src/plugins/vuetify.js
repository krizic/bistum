// src/plugins/vuetify.js

import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

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

  }
};

export default new Vuetify(opts);
