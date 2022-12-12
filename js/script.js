const { createApp } = Vue;

createApp ( {
    data() {
        return {
            message: 'Hello Vue!',
            title: 'Coding Cat',
            text: 'Look at this coding cat, it looks purr-fect!',
            image: 'https://images.unsplash.com/photo-1634838083208-ce7a36701fe4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            titleClass: 'container bg-dark text-light shadow rounded',
            catName: ' '
        }
    }
}).mount('#app');