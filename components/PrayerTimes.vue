<template>
  <v-simple-table dense>
    <template #default>
      <tbody>
        <tr>
          <td>Fajr</td>
          <td>{{ prayerTimes[0] }}</td>
        </tr>
        <tr>
          <td>Shurouq</td>
          <td>{{ prayerTimes[1] }}</td>
        </tr>
        <tr>
          <td>Dhuhr</td>
          <td>{{ prayerTimes[2] }}</td>
        </tr>
        <tr>
          <td>Asr</td>
          <td>{{ prayerTimes[3] }}</td>
        </tr>
        <tr>
          <td>Maghreb</td>
          <td>{{ prayerTimes[4] }}</td>
        </tr>
        <tr>
          <td>Isha</td>
          <td>{{ prayerTimes[5] }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import PrayerTimes from '~/static/prayertimes.json'

export default {
  computed: {
    prayerTimes () {
      return PrayerTimes[this.getFormatedDate()]
    }
  },
  methods: {
    getFormatedDate () {
      return new Date().toISOString().split('T')[0]
    }
  }
}
</script>
