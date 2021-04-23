<template>
  <v-simple-table dense>
    <template #default>
      <tbody>
        <tr
          v-for="(item, index) in prayerNames"
          :key="index"
          :class="{ 'font-weight-bold blue lighten-5': index === 0 || index === 4 }"
        >
          <td>{{ item }}</td>
          <td>{{ getTimeWithLag(prayerTimes[index]) }}</td>
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
  data () {
    return {
      prayerNames: [
        'Fajr',
        'Shuruq',
        'Dhuhr',
        'Asr',
        'Maghrib',
        'Isha'
      ]
    }
  },
  computed: {
    localDate () {
      const localDate = new Intl.DateTimeFormat('fr', { timeZone: 'Europe/Brussels' }).format(Date.now()).toString()
      return localDate.split('/')[2] + '-' + localDate.split('/')[1] + '-' + localDate.split('/')[0]
    },
    prayerTimes () {
      return PrayerTimes[this.localDate]
    }
  },
  mounted () {
    // TODO schedule notifications for each future prayer time
    // if ('showTrigger' in Notification.prototype) {
    //   this.scheduleNotification(???)
    // }
  },
  methods: {
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
    // TODO check when this feature will be available to schedule notifications
    // https://web.dev/notification-triggers/
    // scheduleNotification (timestamp) {
    //   navigator.serviceWorker.ready.then((registration) => {
    //     registration.showNotification('nefsii', {
    //       body: 'Prière',
    //       icon: '/nefsii/icon.png',
    //       /* eslint-disable-next-line no-undef */
    //       showTrigger: new TimestampTrigger(timestamp)
    //     })
    //   })
    // }
  }
}
</script>
