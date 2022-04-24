const app = Vue.createApp({

    // template: `
    // <h1>Hola Mundo</h1>
    // <p>desde app.js</p>    
    // `
    data() {
        return {
            cita: 'Soy Batman',
            autor: 'Bruce Wayne'
        }
    },
    methods: {
        cambiarCita(){
            console.log('HolaMundo')
            this.autor = 'Sergio Hernández'

        }
    }
})

app.mount('#myApp')