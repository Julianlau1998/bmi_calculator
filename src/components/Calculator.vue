<template>
  <div class="calculator is-flex-center mt-2">
    <div class="field-5 pb-5" ref="calculator">
      <div class="control">
        <div class="columns is-mobile is-justify-content-center is-align--center mt-2">
          <div class="column is-6 is-result-columns">
            <label for="price" class="is-size-4">
              Weight (kg):
            </label>
          </div>
          <div class="column is-6 is-result-columns">
            <input
                id="price"
                v-model="weight"
                class="input mt-1 is-input"
                type="number"
                placeholder="0"
            >
          </div>
        </div>
      </div>
      <div class="control mt-4">
        <div class="columns is-mobile is-justify-content-center is-align-items-center">
          <div class="column is-6">
            <label for="shipping" class="is-size-4">
              Height (cm):
            </label>
          </div>
          <div class="column is-6">
            <input
                id="shipping"
                v-model="height"
                class="input mt-1 is-input"
                type="number"
                placeholder="0"
            >
          </div>
        </div>
      </div>
      <div class="control mt-4">
        <div class="columns is-mobile is-justify-content-center is-align-items-center">
          <div class="column is-6">
            <label for="shipping" class="is-size-4">
              Age:
            </label>
          </div>
          <div class="column is-6">
            <input
                id="shipping"
                v-model="age"
                class="input mt-1 is-input"
                type="number"
                placeholder="0"
            >
          </div>
        </div>
      </div>
      <div class="hr mt-6 mb-6" />
      <h1
          v-if="bmi > 0"
          class="is-size-3"
          :style="`color: ${result.color};`"
      >
        BMI: {{ bmi }}
      </h1>
      <h2
          v-if="age >= 20 && bmi > 0"
          class="is-size-4 mb-4"
          :style="`color: ${result.color};`"
      >
        {{ result.value }}
      </h2>

      <h3 class="is-size-5 mb-1 mt-4">
        BMI Table (According to WHO):
      </h3>
      <div class="columns is-mobile is-justify-content-center is-align--center mt-2">
        <div class="column is-5 is-result-columns">
          <p class="is-primary">
            BMI:
          </p>
        </div>
        <div class="column is-7 is-result-columns">
          <p class="is-primary">
            Status:
          </p>
        </div>
      </div>

      <hr class="hr bmiHeader">

      <div class="columns is-mobile is-justify-content-center is-align--center">
        <div class="column is-5 is-result-columns">
          <p :style=" bmi < 18.5 && age >= 20 ? `color: ${result.color};` : ''">
            Below 18.5
          </p>
        </div>
        <div class="column is-7 is-result-columns">
          <p :style=" bmi < 18.5 && age >= 20 ? `color: ${result.color};` : ''">
            Underweight
          </p>
        </div>
      </div>

      <hr class="hr bmiBottom">

      <div class="columns is-mobile is-justify-content-center is-align--center">
        <div class="column is-5 is-result-columns">
          <p :style="bmi < 25 && bmi > 0 && bmi >= 18.5 && age >= 20 ? `color: ${result.color};` : ''">
            18.5 - 24.9
          </p>
        </div>
        <div class="column is-7 is-result-columns">
          <p :style="bmi < 25 && bmi >= 18.5 && age >= 20 ? `color: ${result.color};` : ''">
            Normal
          </p>
        </div>
      </div>

      <hr class="hr bmiBottom">

      <div class="columns is-mobile is-justify-content-center is-align--center">
        <div class="column is-5 is-result-columns">
          <p :style="bmi < 30 && bmi >= 25 && age >= 20 ? `color: ${result.color};` : ''">
            25.0 - 29.9
          </p>
        </div>
        <div class="column is-7 is-result-columns">
          <p :style="bmi < 30 && bmi >= 25 && age >= 20 ? `color: ${result.color};` : ''">
            Pre Obesity
          </p>
        </div>
      </div>

      <hr class="hr bmiBottom">

      <div class="columns is-mobile is-justify-content-center is-align--center">
        <div class="column is-5 is-result-columns">
          <p :style="bmi < 35 && bmi >= 30 && age >= 20 ? `color: ${result.color};` : ''">
            30.0 - 34.9
          </p>
        </div>
        <div class="column is-7 is-result-columns">
          <p :style="bmi < 35 && bmi >= 30 && age >= 20 ? `color: ${result.color};` : ''">
            Obesity Class I
          </p>
        </div>
      </div>

      <hr class="hr bmiBottom">

      <div class="columns is-mobile is-justify-content-center is-align--center">
        <div class="column is-5 is-result-columns">
          <p :style="bmi < 40 && bmi >= 35 && age >= 20 ? `color: ${result.color};` : ''">
            35.0 - 39.9
          </p>
        </div>
        <div class="column is-7 is-result-columns">
          <p :style="bmi < 40 && bmi >= 35 && age >= 20 ? `color: ${result.color};` : ''">
            Obesity Class II
          </p>
        </div>
      </div>

      <hr class="hr bmiBottom">

      <div class="columns is-mobile is-justify-content-center is-align--center">
        <div class="column is-5 is-result-columns">
          <p :style="bmi >= 40 && age >= 20 ? `color: ${result.color};` : ''">
            >= 40.0
          </p>
        </div>
        <div class="column is-7 is-result-columns">
          <p :style="bmi >= 40 && age >= 20 ? `color: ${result.color};` : ''">
            Obesity Class III
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator-bmi",
  data () {
    return {
      weight: '',
      height: '',
      age: ''
    }
  },
  computed: {
    bmi () {
      if (this.weight <= 0 || this.height <= 0 || this.age <= 0) return 0

      const bmiValue = Number(this.weight) / (this.height/100)**2
      return (Math.round(bmiValue * 100)/100).toFixed(2)
    },
    result () {
      if (this.age < 20) return { value: '', color: 'white'}

      if (this.bmi < 18.5 && this.bmi > 0) {
        return { value: 'Underweight', color: 'orange'}
      } else if (this.bmi < 25) {
        return { value: 'Normal', color: 'green'}
      } else if (this.bmi < 30) {
        return { value: 'Pre Obesity', color: 'Orange'}
      } else if (this.bmi < 35) {
        return { value: 'Obesity Class I', color: 'red'}
      } else if (this.bmi < 40) {
        return { value: 'Obesity Class II', color: 'red'}
      }
      return { value: 'Obesity Class III', color: 'red'}
      }
  }
}
</script>