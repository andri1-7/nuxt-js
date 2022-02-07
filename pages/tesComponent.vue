<template>
  <div>
    <Card
      v-for="experience in resume.experiences"
      :key="experience.id"
      :produk="experience"
    />
  </div>
</template>

<script>
import Card from '~/components/Global/Card'
export default {
  components: {
    Card
  },
  data() {
    return {
      resume: {
        name: 'Steve',
        title: 'Software Engineer',
        experiences: [
          {
            id: 1,
            company: 'Tech',
            title: 'Software Engineer',
            dates: 'Aug. 2014 - Mar. 2015'
          },
          {
            id: 1,
            company: 'Tech',
            title: 'Software Engineer',
            dates: 'Aug. 2014 - Mar. 2015'
          }
        ]
      }
    }
  }
}
</script>
