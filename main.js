const { createApp } = Vue ;

createApp({
    data () {
        return {
            // name: "Mohammed",
            // age: 15,
            // link: "https://mohammed.com/",
            // img: "./assets/images/mohammed.jpg",
            num: 0,
        };
    },
    methods: {
        // sayHello (name) {
        //     return `hello ${name}`;
        // },

        clickFunc () {
            this.num++
        }
    }
}).mount("#parent")