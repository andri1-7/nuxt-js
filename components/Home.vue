<template>
    <b-container class="mb-3">
        <div>
            <BannerSlider/>
        </div>
        <div>
            <h2 class="margin-left">Paling Banyak Dicari</h2>
        </div>
        <div class="margin-left">
            <button @click="topProduct()" v-bind:class="(active_top == true) ? 'btn btn-primary mb-3': 'btn btn-warning mb-3'">Top Produk</button>
            <button @click="palingBanyakDilihat()" v-bind:class="(active_dilihat == true) ? 'btn btn-primary mb-3 mx-3': 'btn btn-warning mb-3 mx-3'">Paling banyak dilihat</button>
            <button @click="palingBanyakDinilai()" v-bind:class="(active_dinilai == true) ? 'btn btn-primary mb-3': 'btn btn-warning mb-3'">Paling banyak dinilai</button>
        </div>
        <b-row>
            <b-col cols="3" v-for="produk in products.data" :key="produk.id" class="margin-left">
                <nuxt-link :to="`/detail_produk/${produk.slug}`">
                    <div>
                        <b-card-group deck>
                            <b-card
                                class="position-relative"
                                :img-src="produk.thumbnail"
                                img-alt="Image"
                                img-top
                                >
                            <b-card-text>
                                {{ produk.name }}
                            </b-card-text>
                            <template #footer>
                                <small class="text-muted">{{produk.price}}</small>
                            </template>
                            </b-card>
                        </b-card-group>
                    </div>
                </nuxt-link>
            </b-col>
            <button @click="muatLebih()">Muat Lebih Banyak </button>
        </b-row>
    </b-container>
</template>

<script>
import axios from 'axios'
export default {
    async created(){
        const products = await this.$axios.$get('/products?limit=6&page=1')
        this.products = products.data
        this.active_top = true
    },
  data(){
    return {
        products : '',
        active_top : false,
        active_dilihat : false,
        active_dinilai : false,
        limit : 6
    }
  },
  methods: {
      topProduct: async function(){
        this.limit = 6
        const products = await this.$axios.$get('/products?limit='+this.limit+'&page=1')
        this.products = products.data
        this.active_top = true
        this.active_dilihat = false
        this.active_dinilai = false
      },
       palingBanyakDilihat: async function(){
        this.limit = 6
        const products = await this.$axios.$get('/products?limit='+this.limit+'&page=1&sort=bestseller')
        this.products = products.data
        this.active_top = false
        this.active_dilihat = true
        this.active_dinilai = false
      },
      palingBanyakDinilai: async function(){
        this.limit = 6
        const products = await this.$axios.$get('/products?limit='+this.limit+'&page=1&sort=topproduct')
        this.products = products.data
        this.active_top = false
        this.active_dilihat = false
        this.active_dinilai = true
      },
      muatLebih: async function(){
          if(this.active_top == true){
            const muatLimit = this.limit + 6
            this.limit = muatLimit
            const products = await this.$axios.$get('/products?limit='+muatLimit+'&page=1')
            this.products = products.data
          }
          if(this.active_dilihat == true){
            const muatLimit = this.limit + 6
            this.limit = muatLimit
            const products = await this.$axios.$get('/products?limit='+muatLimit+'&page=1&sort=bestseller')
            this.products = products.data
          }
          if(this.active_dinilai == true){
            const muatLimit = this.limit + 6
            this.limit = muatLimit
            const products = await this.$axios.$get('/products?limit='+muatLimit+'&page=2&sort=topproduct')
            this.products = products.data
          }
      }
  },
}
</script>