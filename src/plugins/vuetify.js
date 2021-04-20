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
        primary: colors.lightGreen.lighten3,
        secondary: colors.purple.lighten3,
        accent: colors.lightGreen.accent2,
        error: colors.red.lighten2,
        warning: colors.orange.base,
        info: colors.lightGreen.lighten1,
        // background: colors.indigo.lighten5,
      },
      dark: {
        primary: colors.lightGreen.darken4,
        secondary: colors.purple.darken3,
        accent: colors.lightGreen.base,
        error: colors.red.darken4,
        warning: colors.orange.base,
        info: colors.lightGreen.darken3,
        success: colors.green.base,
      },
    },
  },
});
