<template>
    <div>
    <Header/>
        <div v-if="loading">
          <div>
            <b-spinner type="grow" label="Loading..."></b-spinner>
        </div>
        </div>
        <div class="mt-4" v-else="loading">
            <b-card :img-src="detail.images[0].image" img-alt="Card image" img-left style="max-width: 20rem;">
                <b-card-text>
                Nama Barang : {{ detail.name}}
                </b-card-text>
                <b-card-text>
                    Harga : Rp. {{detail.price}}
                </b-card-text>
            </b-card>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    async created(){
        this.loading = true
        const detail = await this.$axios.$get('/products/'+this.$route.params.slug)
        this.detail = detail.data
        this.loading = false
        console.log('data detail', detail.data.images[0].image)
    },
    data(){
        return{
            detail : '',
            loading: false
        }
    }
}
</script>