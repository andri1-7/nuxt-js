<template>
    <div>
        <div v-if="loading">

        </div>
        <b-row v-else="loading">
            <div v-if="cc_condition">
                <b-container>
                    <b-form>
                        <b-form-group id="input-group-2" label="Card Number:" label-for="input-2">
                            <b-form-input
                            type="text" 
                            id="text-card-number"
                            v-model="form.card_number"
                            placeholder="card number"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-2" label="Exp Month:" label-for="input-2">
                            <b-form-input
                            type="text" 
                            id="text-exp-month"
                            v-model="form.exp_month"
                            placeholder="exp month"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-2" label="Exp Year:" label-for="input-2">
                            <b-form-input
                            type="text" 
                            id="text-exp-year"
                            v-model="form.exp_year"
                            placeholder="exp year"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-2" label="Cvv:" label-for="input-2">
                            <b-form-input
                            type="text" 
                            id="text-cvv"
                            v-model="form.cvv"
                            placeholder="cvv"
                            ></b-form-input>
                        </b-form-group>
                        <b-button @click="createTokenCC" type="submit" variant="primary">Submit</b-button>
                    </b-form>
                </b-container>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" v-else="cc_condition">
                <b-col v-for="payment_method in payment_method.data.data" :key="payment_method.id" class="margin-left">
                    <div @click="sendPayment(payment_method)" class="cursor-pointer">
                        <b-card-group>
                            <b-card>
                            <div>
                                <img
                                    class="w-full h-full rounded-md"
                                    :src="payment_method.image_url"
                                    alt="Image"
                                >
                            </div>
                            <b-card-text>
                                {{payment_method.name}}
                            </b-card-text>
                            <b-card-text>
                            Vendor :  {{payment_method.vendor.name}}
                            </b-card-text>
                            </b-card>
                        </b-card-group>
                    </div>
                </b-col>
            </div>
        </b-row>
    </div>
</template>

<script>
import axios from 'axios'
export default {
     props: ['order_id'],
    async created(){
         console.log('props',this.$route)
        try{
            this.loading = true
            const paymentMethod = await axios.get('http://bf63-118-99-110-37.ngrok.io/api/v1/portal/payment_method')
            this.payment_method = paymentMethod
            this.loading = false
        }catch(error){
            console.log('err', error)
        }
    },
    data(){
        return{
            payment_method: '',
            loading : false,
            cc_condition : false,
            token_cc : '',
            form: {
                card_number: '',
                exp_month: '',
                exp_year: '',
                cvv: ''
            }
        }
    },
    methods :{
        sendPayment: async function(data){
            this.loading = true
            if(data.type == "credit_card"){
                this.cc_condition = true
                this.loading = false
            }else{
                try{
                    const sendPayment = await axios.post('http://bf63-118-99-110-37.ngrok.io/api/v1/portal/create_payment',{
                        client_id: "YqeO6ToHZZxTJ2ovGM5YaQHQBWu2jSagjtkJS0m4eFV7WL8LEf",
                        reference_id: "gkj2895y3hfajlksdjkg0",
                        token_id: "481111-1114-8d3dfd37-46c0-410d-bb10-b8ea47821540",
                        method_id: data.id,
                        amount: 80000,
                        description: "testwong no.4",
                        redirect_url: "http://a88d-103-109-194-26.ngrok.io",
                        customer: {
                            first_name: "kadal",
                            last_name: "ijo",
                            email: "kadalijo@gmail.com",
                            phone:"08181303030"
                        },
                        meta: "data"
                    })
                    this.loading = false
                    if(sendPayment.data.message == "Success"){
                        window.open(sendPayment.data.data.url, '_blank')
                    }else{
                        alert(sendPayment.data.data)
                    }
                    // window.location.href = 'https://api.sandbox.midtrans.com/v2/gopay/dc69dc75-4b2d-44cc-9817-05861dd22366/qr-code'
                    console.log('payment', sendPayment.data)
                    console.log('id payment', data.id)
                }catch(error){
                    console.log(error)
                }
            }
        },
        createTokenCC: async function(event){
            event.preventDefault()
            try{
                const createToken = await axios.post('http://a88d-103-109-194-26.ngrok.io/api/v1/midtrans/card_token',{
                    card_number : this.form.card_number,
                    exp_month : this.form.exp_month,
                    exp_year : this.form.exp_year,
                    cvv : this.form.cvv
                })
                if(createToken.data.message == "Error"){
                    alert(createToken.data.data)
                }else{
                    this.token_cc = createToken
                }
                console.log('createtoken', createToken.data.data)
            }catch(error){
                console.log('error', error)
            }
        }
    }
}
</script>