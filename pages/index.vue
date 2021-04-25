<template>
  <v-row class="justify-center align-center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
      </div>
      <v-card>
        <v-card-title class="justify-center h4">
          Horaire des prières
        </v-card-title>
        <v-card-subtitle class="text-center pb-0">
          <div>{{ hijriFormatedDate }}</div>
          <div>{{ frenchFormatedDate }}</div>
          <div>Belgique</div>
        </v-card-subtitle>
        <v-sheet class="d-flex justify-center mt-2 mb-3">
          <v-sheet width="151">
            <v-select
              v-model="city"
              :items="cities"
              label="Ville"
              item-value="id"
              item-text="name"
              return-object
              hide-details
              dense
              solo
            />
          </v-sheet>
        </v-sheet>
        <v-card-text class="text-center pt-0">
          <prayer-times
            :lag="city.lag"
            :hijri-month="parseInt(hijriDate.split('/')[1])"
          />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import PrayerTimes from '~/components/PrayerTimes.vue'

const iMonthNames = ['Muharram', 'Safar', 'Rabi\'ul Awwal', 'Rabi\'ul Akhir', 'Jumadal Ula', 'Jumadal Akhira',
  'Rajab', 'Sha\'ban', 'Ramadan', 'Shawwal', 'Dhul Qa\'ada', 'Dhul Hijja']

export default {
  components: {
    Logo,
    PrayerTimes
  },
  data () {
    return {
      cities: [
        { id: 1, name: 'Bruxelles', lag: 0 },
        { id: 2, name: 'Charleroi', lag: 0 },
        { id: 3, name: 'Antwerpen', lag: 0 },
        { id: 4, name: 'Liège', lag: -5 },
        { id: 5, name: 'Mons', lag: 2 },
        { id: 6, name: 'Namur', lag: -2 },
        { id: 7, name: 'Renaix', lag: 3 },
        { id: 8, name: 'Tournai', lag: 4 },
        { id: 9, name: 'Luxembourg', lag: -6 },
        { id: 10, name: 'Gent', lag: 3 },
        { id: 11, name: 'Hasselt', lag: -4 },
        { id: 12, name: 'Houthalen', lag: -4 },
        { id: 13, name: 'Aalst', lag: 3 },
        { id: 14, name: 'Brugge', lag: 5 },
        { id: 15, name: 'Genk', lag: -4 },
        { id: 16, name: 'Kortrijk', lag: 4 },
        { id: 17, name: 'Lokeren', lag: 2 },
        { id: 18, name: 'Masstricht', lag: -5 },
        { id: 19, name: 'Oostende', lag: 6 },
        { id: 20, name: 'Weert', lag: -5 }
      ],
      city: { id: 2, name: 'Charleroi', lag: 0 }
    }
  },
  computed: {
    hijriDate () {
      return new Intl.DateTimeFormat('fr-TN-u-ca-islamic', { day: 'numeric', month: 'numeric', year: 'numeric' }).format(Date.now()).toString()
    },
    hijriFormatedDate () {
      return this.hijriDate.split('/')[0] + ' ' +
        iMonthNames[parseInt(this.hijriDate.split('/')[1]) - 1] + ' ' +
        this.hijriDate.split('/')[2].split(' ')[0]
    },
    frenchFormatedDate () {
      return new Intl.DateTimeFormat('fr-TN-u-ca', { day: 'numeric', month: 'long', year: 'numeric' }).format(Date.now())
    }
  },
  watch: {
    city (val) {
      this.$localForage.setItem('city', val.id)
    }
  },
  mounted () {
    this.$localForage.getItem('city').then((val) => {
      if (val) {
        this.city = this.cities.find(obj => obj.id === val)
      }
    })
  }
}
</script>
