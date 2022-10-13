<template>
  <div>
    <span @click="back" class="is-back-button">
      <i @click="back" class="fas fa-arrow-left is-back-icon mr-2"></i>
      Back
    </span>
    <iframe
        src="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html"
        frameborder="0"
        class="iframe"
    >
    </iframe>
  </div>
</template>

<script>
export default {
  name: "Info-bmi",
  methods: {
    back () {
      this.$router.push('/')
    }
  }
}
</script>
