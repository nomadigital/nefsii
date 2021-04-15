<template>
  <v-simple-table dense>
    <template #default>
      <tbody>
        <tr>
          <td>Fajr</td>
          <td>{{ getTimeWithLag(prayerTimes[0]) }}</td>
        </tr>
        <tr>
          <td>Shurouq</td>
          <td>{{ getTimeWithLag(prayerTimes[1]) }}</td>
        </tr>
        <tr>
          <td>Dhuhr</td>
          <td>{{ getTimeWithLag(prayerTimes[2]) }}</td>
        </tr>
        <tr>
          <td>Asr</td>
          <td>{{ getTimeWithLag(prayerTimes[3]) }}</td>
        </tr>
        <tr>
          <td>Maghreb</td>
          <td>{{ getTimeWithLag(prayerTimes[4]) }}</td>
        </tr>
        <tr>
          <td>Isha</td>
          <td>{{ getTimeWithLag(prayerTimes[5]) }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import PrayerTimes from '~/static/prayertimes.json'

export default {
  props: {
    lag: {
      type: Number,
      default: 0
    }
  },
  computed: {
    prayerTimes () {
      return PrayerTimes[this.getDate()]
    }
  },
  methods: {
    getDate () {
      return new Date().toISOString().split('T')[0]
    },
    addTimes (t0, t1) {
      return this.secsToTime(this.timeToSecs(t0) + this.timeToSecs(t1))
    },
    timeToSecs (time) {
      const sign = /^-/.test(time)
      const [h, m, s] = time.match(/\d+/g)
      return (sign ? -1 : 1) * (h * 3600 + (m | 0) * 60 + (s | 0) * 1)
    },
    secsToTime (seconds) {
      const sign = seconds < 0 ? '-' : ''
      seconds = Math.abs(seconds)
      const z = n => (n < 10 ? '0' : '') + n
      return sign +
            (seconds / 3600 | 0) + ':' +
          z((seconds % 3600) / 60 | 0) + ':' +
            z(seconds % 60)
    },
    getTimeWithLag (time) {
      return this.addTimes(this.secsToTime(this.lag * 60), time + ':00').slice(0, -3)
    }
  }
}
</script>
