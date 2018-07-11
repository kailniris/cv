<template>
  <v-card class="mt-4">
    <div class="pa-4">
      <h2 class="headline">Szakmai ismeretek</h2>

      <v-container
        fluid
        grid-list-md
        class="my-5 pa-0"
      >
        <v-layout
          wrap
          justify-space-around
        >
          <v-flex
            v-for="(elem, index) in main"
            :key="index"
            style="flex: initial"
          >
            <v-tooltip bottom>
              <v-progress-circular
                slot="activator"
                :rotate="-90"
                :size="100"
                :width="5"
                :value="elem.percent"
                color="primary"
              >
                <v-avatar
                  :tile="false"
                  :size="80"
                  color="white"
                >
                  <img :src="require(`@/assets/skills/${elem.imageName}`)">
                </v-avatar>
              </v-progress-circular>

              <span>{{ elem.name }}</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container
        fluid
        class="pa-0"
      >
        <v-layout
          wrap
          justify-start
        >
          <v-flex
            v-for="(name, index) in sub"
            :key="index"
            style="flex: initial"
          >
            <v-chip>{{ name }}</v-chip>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'TheSkills',
  data() {
    return {
      main: [
        {
          name: 'JavaScript',
          imageName: 'js.png',
          percent: 100,
        },
        {
          name: 'Node.js',
          imageName: 'node.jpg',
          percent: 95,
        },
        {
          name: 'MongoDB',
          imageName: 'mongodb.png',
          percent: 90,
        },
        {
          name: 'Vue.js',
          imageName: 'vue.png',
          percent: 97,
        },
        {
          name: 'Docker',
          imageName: 'docker.jpg',
          percent: 85,
        },
      ],
      sub: [
        'HTML',
        'CSS',
        'Git',
        'SQL',
        'Redis',
        'DevOps',
        'Linux',
        'CI',
        'Software Testing',
        'Network Administration',
      ],
    };
  },
};
</script>
