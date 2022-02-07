<template>
    <div>
        <div class="links">
          <nuxt-link to="/" class="button--grey">Home</nuxt-link>
          <nuxt-link to="/Login" class="button--grey">Login</nuxt-link>
          <nuxt-link :to="{path:'payment_method'}" class="button--grey">Simulasi Payment</nuxt-link>
        </div>
    </div>
</template>

<style>
.links {
  padding-top: 15px;
  possition : fixed;
}
</style>