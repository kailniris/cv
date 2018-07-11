import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VGrid,
  VCard,
  VIcon,
  VDivider,
  VProgressCircular,
  VAvatar,
  VTooltip,
  VChip,
} from 'vuetify';
import '@/themes/main.styl';

Vue.use(Vuetify, {
  components: {
    VApp,
    VGrid,
    VCard,
    VIcon,
    VDivider,
    VProgressCircular,
    VAvatar,
    VTooltip,
    VChip,
  },
  theme: {
    primary: '#41b883',
  },
});
