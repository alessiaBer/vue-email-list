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
            mailAddress: '',
            mailList: []
        }
    },
    methods:{
        getMailAddresses() {
            for (let i = 0; i < 10; i++) {
                axios
                .get(this.mailAPI)
                .then(response => {
                //console.log(response)
                this.mailList.push(response.data)

                console.log(this.mailList)
            })
            }

        }
    },
    mounted() {
        this.getMailAddresses()
    }
}).mount('#app')