<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of Clicks: {{ stringCounter }}</p>
    </div>
    
</template>

<script>
    //use helper
    import { mapGetters } from 'vuex';

    export default {
        // props: ['counter']
        // computed : {
        //     counter() {
        //         // return this.$store.state.counter * 2;
        //         return this.$store.getters.doubleCounter;
        //     },
        //     clicks() {
        //         return this.$store.getters.stringCounter;
        //     }

        // computed : mapGetters([
        //     'doubleCounter',
        //     'stringCounter'
        // ])

        //es6 spread operator - tell js to pull out related....
        computed : {
            ...mapGetters([
                'doubleCounter',
                'stringCounter'
            ]),
            // ourOwn(){}
        }
    }
</script>