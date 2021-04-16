<template>
  <v-snackbar
    v-model="snackbar"
    :absolute="absolute"
    :app="app"
    :top="top"
    :bottom="bottom"
    :right="right"
    :left="left"
    :centered="centered"
    :text="text"
    :color="color"
    :timeout="timeout"
    :style="getStyle"
  >
    {{ message }}
  </v-snackbar>
</template>
<script>
export default {
  props: {
    absolute: {
      type: Boolean,
      default: false
    },
    app: {
      type: Boolean,
      default: false
    },
    top: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    },
    centered: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    snackbar: false,
    color: 'success',
    timeout: 3000,
    message: 'OK'
  }),
  computed: {
    getStyle () {
      return this.$route.meta.full_page ? '' : 'bottom: -55px;'
    }
  },
  methods: {
    open (color = this.color, message = this.message, timeout = this.timeout) {
      this.color = color
      this.message = message
      this.snackbar = true
      this.timeout = timeout
    }
  }
}
</script>
