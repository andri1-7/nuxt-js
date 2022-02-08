<template>
  <b-container class="margin-left">
    <b-form>
      <b-button @click.prevent="onSubmit(true)" type="submit" variant="primary">Plus</b-button>
      <b-button @click.prevent="onSubmit(false)" type="submit" variant="primary">Minus</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{$store.getters['cars/getCars']}}</pre>
    </b-card>
  </b-container>
</template>

<script>
  export default {
    methods: {
      async onSubmit(event) {
        this.$store.dispatch('cars/storeCars', event) 
      }
    }
  }
</script>