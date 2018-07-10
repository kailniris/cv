<template>
  <v-container
    fluid
    grid-list-md
    pa-0
  >
    <v-layout
      class="layout"
      row
      wrap
      justify-space-between
    >
      <v-flex
        xs12
        sm8
      >
        <v-card height="100%">
          <v-card-title primary-title>
            <div>
              <h1 class="headline">Házi Dávid</h1>

              <div class="my-4">
                <div>Cím: 5600 Békéscsaba, ...</div>
                <div>Születési idő: 1992. június 10.</div>
              </div>

              <div>
                <div>
                  <v-icon>email</v-icon><span class="ml-2">kailniris92@gmail.com</span>
                </div>

                <div class="my-2">
                  <v-icon>phone</v-icon><span class="ml-2">+3620434...</span>
                </div>

                <div>
                  <v-icon>code</v-icon><span class="ml-2">github.com/kailniris</span>
                </div>
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex
        xs12
        sm4
      >
        <v-card class="imageCard">
          <v-card-media
            :src="require('@/assets/photo.jpg')"
            height="270px"
          />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'TheContact',
};
</script>

<style scoped>
.imageCard {
  max-width: 270px;
  margin-left: auto;
  margin-right: 0;
}
</style>
