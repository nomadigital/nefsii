<template>
  <v-simple-table dense>
    <template #default>
      <caption v-if="hijriMonth === 9">
        <countdown
          ref="countdown"
          :start-time="halfHourBeforeMaghrib"
          :end-time="maghribDateTime"
        >
          <v-alert
            slot="process"
            slot-scope="{ timeObj }"
            class="mb-0"
            color="warning"
            dense
            text
          >
            {{ `${timeObj.m}:${timeObj.s} avant l\'Iftar` }}
          </v-alert>
          <v-alert
            v-if="showIftarDua"
            slot="finish"
            color="success"
            class="mb-0"
            dense
            text
          >
            ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللّٰهُ
          </v-alert>
        </countdown>
      </caption>
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
    },
    hijriMonth: {
      type: Number,
      default: 1
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
      return new Intl.DateTimeFormat('fr', { timeZone: 'Europe/Brussels' }).format(Date.now()).toString()
    },
    formatedLocalDate () {
      return this.localDate.split('/')[2] + '-' + this.localDate.split('/')[1] + '-' + this.localDate.split('/')[0]
    },
    prayerTimes () {
      return PrayerTimes[this.formatedLocalDate]
    },
    maghribDateTime () {
      return new Date(this.formatedLocalDate).setHours(
        parseInt(this.getTimeWithLag(this.prayerTimes[4]).split(':')[0]),
        parseInt(this.getTimeWithLag(this.prayerTimes[4]).split(':')[1])
      )
    },
    halfHourBeforeMaghrib () {
      return new Date(this.formatedLocalDate).setHours(
        parseInt(this.substractTimes(this.getTimeWithLag(this.prayerTimes[4]), this.secsToTime(30 * 60)).split(':')[0]),
        parseInt(this.substractTimes(this.getTimeWithLag(this.prayerTimes[4]), this.secsToTime(30 * 60)).split(':')[1])
      )
    },
    halfHourAfterMaghrib () {
      return new Date(this.formatedLocalDate).setHours(
        parseInt(this.addTimes(this.getTimeWithLag(this.prayerTimes[4]), this.secsToTime(30 * 60)).split(':')[0]),
        parseInt(this.addTimes(this.getTimeWithLag(this.prayerTimes[4]), this.secsToTime(30 * 60)).split(':')[1])
      )
    },
    showIftarDua () {
      return (new Date() < this.halfHourAfterMaghrib)
    }
  },
  watch: {
    lag (val) {
      this.$nextTick(() => {
        if ((this.halfHourBeforeMaghrib < new Date()) && (new Date() < this.maghribDateTime)) {
          this.$refs.countdown.startCountdown('restart')
        }
      })
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
    substractTimes (t0, t1) {
      return this.secsToTime(this.timeToSecs(t0) - this.timeToSecs(t1))
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
