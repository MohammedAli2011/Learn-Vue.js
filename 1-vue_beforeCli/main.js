const {createApp} = Vue;

// const my_component = {
//     template: `<h2>Hello World</h2>
//     <h2>My name is {{name}}</h2>
//     <h2>My age is {{age}}</h2>
// `,
//
//     data() {
//         return {
//             name: "mohammed",
//             age: 15,
//         };
//     },
// };

createApp({
    data() {
        return {
            // name: "Mohammed",
            // age: 15,
            // link: "https://mohammed.com/",
            // img: "./assets/images/mohammed.jpg",

            /*                       break                          */

            // num: 0,

            /*                       break                          */

            // sendTo: "",
            // sender: "",
            // message: "",

            /*                       break                          */

            // numOne: 0,
            // numTwo: 0,

            /*                       break                          */

            // color:"",

            /*                       break                          */

            // age: 1,

            /*                       break                          */

            // students: [
            //     {
            //         name: 'John Doe',
            //         age: 18,
            //         id: 1,
            //     },
            //     {
            //         name: "Ayman",
            //         age: 20,
            //         id: 2,
            //     },
            //     {
            //         name: "malak",
            //         age: 15,
            //         id: 3,
            //     },
            // ],

            /*                       break                          */

            // age: 10,

            /*                       break                          */


        };
    },

    // components: {
    //     my_component,
    // },

    methods: {
        // sayHello (name) {
        //     return `hello ${name}`;
        // },

        /*                       break                          */

        // clickFunc () {
        //     this.num++;
        // },

        /*                       break                          */

        // transport () {
        //     console.log("transport had done");
        // },

        /*                       break                          */

        // replace_age () {
        //     // console.log(this.$refs);
        //     // console.log(this.$refs.my_input.value);
        //     this.age = +(this.$refs.my_input.value);
        //     console.log(this.age);
        //     console.log(typeof this.age);
        // },

        /*                       break                          */


    },

    computed: {
        // changeNumOne () {
        //     console.log("one");
        //     return this.numOne * 2;
        // },
        //
        // changeNumTwo () {
        //     console.log("two");
        //     return this.numTwo + 10;
        // },

        /*                       break                          */


    },
}).mount("#parent");


/*                       break                          */


// const  vue1= createApp({
//     data() {
//         return {
//             age: 10,
//         };
//     },
//
//     methods: {
//
//
//     },
//
//     computed: {
//
//     },
// }).mount("#parent");
//
// const  vue2= createApp({
//     data() {
//         return {
//
//         };
//     },
//
//     methods: {
//         agePlus() {
//             vue1.age++
//         }
//     },
//
//     computed: {
//
//     },
// }).mount("#parent2");