import Vue from "vue";
// import Vuetify from "vuetify/lib/framework";
import Vuetify from "vuetify/lib/framework/";
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.orange.lighten2,
        warning: colors.cyan.base,
        info: colors.orange.lighten4,
        // background: colors.indigo.lighten5,
      },
      dark: {
        primary: colors.orange.darken2,
        secondary: colors.orange.base,
        accent: colors.pink.base,
        error: colors.red.base,
        warning: colors.teal.base,
        info: colors.orange.darken4,
        success: colors.green.base,
      },
    },
  },
});
