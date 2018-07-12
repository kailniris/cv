<template>
  <v-card class="mt-4">
    <div class="pa-4">
      <h2 class="headline">Nyelvismeret</h2>

      <v-list two-line>
        <v-list-tile>
          <v-list-tile-avatar>
            <img :src="require('@/assets/languages/hu.png')">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>magyar</v-list-tile-title>

            <v-list-tile-sub-title>anyanyelv</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-avatar>
            <img :src="require('@/assets/languages/en.jpg')">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>angol</v-list-tile-title>

            <v-list-tile-sub-title>tárgyalóképes</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'TheLanguages',
};
</script>
