<template>
    <div>
        <nuxt-link :to="`/detail_produk/${produk.slug}`">
            <b-card-group deck>
                <b-card>
                <div>
                    <img
                        class="object-cover h-96 w-100"
                        :src="produk.thumbnail"
                        alt="Image"
                    >
                </div>
                <b-card-text>
                    {{ produk.name }}
                </b-card-text>
                <template #footer>
                    <small class="text-muted">{{produk.price}}</small>
                </template>
                </b-card>
            </b-card-group> 
        </nuxt-link>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['produk']
}
</script>