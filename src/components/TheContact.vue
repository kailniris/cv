<template>
  <v-container
    fluid
    grid-list-md
    pa-0
  >
    <v-layout
      class="layout"
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
                <div>Lakhely: Békéscsaba</div>
                <div>Születési dátum: 1992. június 10.</div>
              </div>

              <img
                :src="require('@/assets/photo.jpg')"
                class="mobilePhoto hidden-sm-and-up"
              >

              <v-list class="py-0">
                <v-list-tile class="tile">
                  <v-list-tile-avatar>
                    <v-icon>email</v-icon>
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>
                      <a href="mailto:kailniris92@gmail.com">kailniris92@gmail.com</a>
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile class="tile">
                  <v-list-tile-avatar>
                    <v-icon>phone</v-icon>
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>
                      <a href="tel:+36204347062">+36204347062</a>
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile class="tile">
                  <v-list-tile-avatar>
                    <img
                      :src="require('@/assets/contact/github.png')"
                      class="github"
                    >
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>
                      <a
                        href="https://github.com/kailniris"
                        target="_blank"
                      >github.com/kailniris
                      </a>
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex
        sm4
        hidden-xs-only
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
.github {
  height: 25px;
  width: 25px;
  opacity: 0.54;
}

.mobilePhoto {
  position: absolute;
  top: 10px;
  right: 10px;
  height: 25vw;
  border-radius: 8px;
}

@media print {
  .mobilePhoto {
    display: none;
  }
}

.imageCard {
  max-width: 270px;
  margin-left: auto;
  margin-right: 0;
}

.tile >>> .v-list__tile {
  padding: 0;
  height: 30px;
}
</style>
