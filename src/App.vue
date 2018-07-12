<template>
  <v-app>
    <v-content>
      <v-container class="mainContainer">
        <the-contact />

        <the-work-history />

        <the-education />

        <div class="pageBreak" />

        <the-skills />

        <the-languages />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TheContact from '@/components/TheContact.vue';
import TheWorkHistory from '@/components/TheWorkHistory.vue';
import TheEducation from '@/components/TheEducation.vue';
import TheSkills from '@/components/TheSkills.vue';
import TheLanguages from '@/components/TheLanguages.vue';

export default {
  name: 'App',
  components: {
    TheContact,
    TheWorkHistory,
    TheEducation,
    TheSkills,
    TheLanguages,
  },
};
</script>

<style>
.mainContainer {
  max-width: 1000px;
}

@media print {
  .application.theme--light {
    background: white;
  }

  .pageBreak {
    page-break-after: always;
  }
}
</style>
