<template>
  <v-card class="mt-4">
    <div class="pa-4">
      <h2 class="headline">Szakmai ismeretek</h2>

      <div class="mt-4">
        <v-tooltip bottom>
          <v-progress-circular
            slot="activator"
            :rotate="-90"
            :size="100"
            :width="15"
            :value="80"
            color="green"
          >
            <v-avatar
              :tile="false"
              :size="71"
              color="grey lighten-4"
            >
              <img src="https://cdn-images-1.medium.com/max/1600/1*ieROYZuCX-w0p9V7UswJbQ.png">
            </v-avatar>
          </v-progress-circular>

          <span>Vue.js</span>
        </v-tooltip>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'TheSkills',
};
</script>
