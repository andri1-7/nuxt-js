<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
        <div v-for="banners in banner.data" :key="banners.id">
            <b-carousel-slide
                :caption="banners.name"
                :img-src="banners.image"
            ></b-carousel-slide>
        </div>
    </b-carousel>
  </div>
</template>

<script>
  export default {
       async created(){
        const banner = await this.$axios.$get('/banners')
        this.banner = banner.data
    },
    data() {
      return {
        banner : '',
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>