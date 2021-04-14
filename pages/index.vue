<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
      </div>
      <v-card class="text-center">
        <v-card-title class="justify-center headline">
          Horaire des prières<br />
          Belgique<br />
          {{ getHijriDate() }}<br />
          {{ getFrenchFormatedDate() }}
        </v-card-title>
        <v-card-text>
          <prayer-times />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import PrayerTimes from '~/components/PrayerTimes.vue'

export default {
  components: {
    Logo,
    PrayerTimes
  },
  methods: {
    getFrenchFormatedDate () {
      return new Intl.DateTimeFormat('fr-TN-u-ca', { day: 'numeric', month: 'long', year: 'numeric' }).format(Date.now())
    },
    getHijriDate () {
      return new Intl.DateTimeFormat('fr-TN-u-ca-islamic', { day: 'numeric', month: 'long', year: 'numeric' }).format(Date.now())
    }
  }
}
</script>
