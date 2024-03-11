const app = Vue.createApp({
    data() { //retorna dados padrões, estáticos e afins, mas isso não significa que esses dados não possam ser alterados. Podem sim, usando o this
        return {
            pitang: 'https://www.pitang.com/',
            upe: 'https://www.upe.br/',
            showBooks: false,
            books: [
                { title: "Capitães de Areia", author: "Jorge Amado", img_path: "./assets/images/capitaes-de-areia.jfif", isFav: true},
                { title: "Americanah", author: "Chimamanda Adichie", img_path: "./assets/images/americanah.jpg", isFav: false},
                { title: "Him", author: "Riley Hart", img_path: "./assets/images/him.jpeg", isFav: false}
            ],
            age: 20,
            x: 0,
            y: 0
        }
    },
    methods: {
        envelhecer() {
            this.age++
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleMouse(e) {
            console.log(e, e.type)
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFavBook(book) {
            book.isFav = !book.isFav
        }
    },
    computed: { //retorna dados computados dinamicamente
        filteredBooks() {
            return this.books.filter(book => book.isFav)
        }
    }
})

app.mount('#app')