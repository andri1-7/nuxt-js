<template>
  <b-container class="margin-left">
    <template v-if="phone">
        <b-form-group
        id="input-group-1"
        label="Phone:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.phone"
          type="phone"
          placeholder="Enter phone"
        ></b-form-input>
      </b-form-group>
    </template>
    <b-form v-else>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          type="password" 
          id="text-password" 
          aria-describedby="password-help-block"
          v-model="form.password"
          placeholder="Password"
        ></b-form-input>
      </b-form-group>

      <b-button @click="onSubmit" type="submit" variant="primary">Submit</b-button>
      <b-button @click="onPhone" type="phone" variant="danger">Login By Phone</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </b-container>
</template>

<script>
  export default {
    props:{
        loginWithPhone:{
            type : Boolean,
            default : false
        }
    },
    data() {
      return {
        phone: false,
        form: {
          email: '',
          password: '',
        }
      }
    },
    methods: {
      async onSubmit(event) {
        event.preventDefault()
        try{
        const login = await this.$axios.$post('/auth',{
            username : this.form.email,
            password : this.form.password
        })
         this.$emit("success-login", {
            username: this.form.email,
            type: this.loginWithPhone ? "phone" : "email"
        });
         this.$router.push("/");
        }catch (error) {
            // this.setValidationFromBackend(error);
            alert(error.message)
          console.log('err', error)
        }
      },
      onPhone(event) {
        event.preventDefault()
        this.phone = !this.phone
        // Reset our form values
        
      }
    }
  }
</script>