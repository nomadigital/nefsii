<template>
  <v-app>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      class="grey lighten-3 justify-center"
      app
    >
      <span>
        <a
          href="https://github.com/nomadigital/nefsii"
          target="_blank"
          rel="noreferrer"
        >nomadigital</a> &copy; {{ new Date().getFullYear() }}
      </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
}
</script>

<style>
html { overflow-y: auto; }
</style>
