<template>
  <v-app>
    <v-main>
      <v-container class="fill-height">
        <nuxt />
        <v-fab-transition v-if="!isSharable">
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
            <v-icon>mdi-share-variant</v-icon>
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
    }
  },
  mounted () {
    this.$root.$toast = this.$refs.toast.open
  },
  methods: {
    share () {
      const title = document.title
      const url = document.location.href
      const text = 'Simple islamic app'
      if (this.isSharable) {
        navigator.share({ title, url, text }).then(() => {
          this.$root.$toast('success', 'Merci pour le partage')
        }).catch((error) => {
          this.$root.$toast('warning', 'Impossible de partager ' + error)
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
