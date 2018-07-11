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

              <div>
                <div>
                  <v-icon>email</v-icon>

                  <span class="ml-2">
                    <a href="mailto:kailniris92@gmail.com">kailniris92@gmail.com</a>
                  </span>
                </div>

                <div class="my-2">
                  <v-icon>phone</v-icon>

                  <span class="ml-2">
                    <a href="tel:+36204347062">+36204347062</a>
                  </span>
                </div>

                <div>
                  <v-icon>code</v-icon>

                  <span class="ml-2">
                    <a
                      href="https://github.com/kailniris"
                      target="_blank"
                    >github.com/kailniris
                    </a>
                  </span>
                </div>
              </div>
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
.imageCard {
  max-width: 270px;
  margin-left: auto;
  margin-right: 0;
}
</style>
