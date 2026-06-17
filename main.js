const { createApp } = Vue ;

createApp({
    data () {
        return {
            name: "Mohammed",
            age: 15,
        };
    },
    methods: {
        sayHello (name) {
            return `hello ${name}`;
        }
    }
}).mount("#parent")