<template>
  <v-app>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      app
      class="justify-center"
    >
      <span>
        <a
          href="https://github.com/nomadigital/nefsii"
          target="_blank"
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
