/* Attraverso l'apposita API di Boolean 
https://flynn.boolean.careers/exercises/api/random/mail 
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati */

const { createApp } = Vue

createApp({
    data() {
        return {
            mailAPI: 'https://flynn.boolean.careers/exercises/api/random/mail',
            mailAddress: null,
            mailList: []
        }
    },
    methods: {
        /**
         * function to populate the mails list
         */
        getMailList() {
            // through a for loop that goes from 0 to 9
            for (let i = 0; i < 10; i++) {
                // make a request to the API
                axios
                .get(this.mailAPI)
                .then(response => {
                //console.log(response)

                //assign every response data object to the empty property mailAddress
                this.mailAddress = response.data
                //push the result mail addresses into the mail list array 
                this.mailList.push(this.mailAddress)

                //console.log(this.mailList)
            })
            }
        }
    },
    mounted() {
        this.getMailList()
    }
}).mount('#app')