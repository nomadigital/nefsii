<template>
  <v-app>
    <v-main>
      <v-container class="fill-height">
        <nuxt />
        <v-fab-transition v-if="isSharable">
          <v-btn
            color="indigo accent-2"
            fab
            dark
            small
            right
            bottom
            absolute
            @click="share()"
          >
            <img
              :src="shareIcon"
              alt="share"
            >
          </v-btn>
        </v-fab-transition>
      </v-container>
    </v-main>
    <v-footer
      class="justify-center"
      app
    >
      <span>
        <a
          href="https://github.com/nomadigital"
          target="_blank"
          rel="noreferrer"
        >nomadigital</a> &copy; {{ new Date().getFullYear() }}
      </span>
    </v-footer>
    <toast
      ref="toast"
      :top="$vuetify.breakpoint.xsOnly"
      text
      app
    />
  </v-app>
</template>

<script>
import Toast from '~/components/Toast.vue'
import ShareIcon from '~/static/share-variant.png'

export default {
  components: {
    Toast
  },
  data () {
    return {}
  },
  computed: {
    isSharable () {
      return navigator.share
    },
    shareIcon () {
      return ShareIcon
    }
  },
  mounted () {
    this.$root.$toast = this.$refs.toast.open
    // TODO enable request permission to notify on prayer time
    // if (Notification.permission === 'default') { this.requestNotificationPermission() }
  },
  methods: {
    async requestNotificationPermission () {
      const result = await Notification.requestPermission()
      if (result === 'granted') {
        this.$root.$toast('success', 'Permission accordée')
      } else if (result === 'denied') {
        this.$root.$toast('error', 'Permission refusée')
      } else {
        this.$root.$toast('warning', 'Permission ignorée')
      }
    },
    share () {
      const title = document.title
      const url = document.location.href
      const text = 'Simple islamic app'
      if (this.isSharable) {
        navigator.share({ title, url, text }).then(() => {
          this.$root.$toast('success', 'Merci pour le partage')
        }).catch((error) => {
          this.$root.$toast('warning', error)
        })
      } else {
        this.$root.$toast('error', 'Pas supporté 🙅!!')
      }
    }
  }
}
</script>

<style>
html { overflow-y: auto; }
</style>
