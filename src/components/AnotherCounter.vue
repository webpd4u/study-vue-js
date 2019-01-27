<template>
  <div>
      <!-- ayncIncrement(50, 1000) -->
    <button class="btn btn-primary" @click="asyncIncrement({ by:50, duration: 500 })">Increment</button>
    <button class="btn btn-primary" @click="asyncDecrement({ by:50, duration: 500 })">Decrement</button>
    <br><br>
    <button class="btn btn-primary" @click="confirmSave" :disabled="!change">Save</button>
 
    <!-- <button id="show-modal" @click="showModal = true">Show Modal</button> -->
    <!-- use the modal component, pass in the prop -->
    <!-- <modal v-if="showModal" @close="showModal = false"> -->
    <modal v-if="showModal" @confirm="save"
        @cancel="cancelSave">
        <!--
        you can use custom content here to overwrite
        default content
        -->
        <!-- <h3 slot="header">custom header</h3> -->
    </modal>
    <br><br>

    <button class="btn btn-primary" @click="openModal1" >Modal1</button>
    <modal1 v-if="showModal1" @confirm="confirmModal1"
        @cancel="cancelModal1" />
    
    <modal2 v-if="showModal2" @confirm="confirmModal2"
        @cancel="cancelModal2" />

    <modal3 v-if="showModal3" @confirm="confirmModal3"
        @cancel="cancelModal3" />
    
  </div>
</template>

<script>
    // import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';
    import { mapGetters } from 'vuex';

    import modal from './Modal.vue';
    import modal1 from './Modal1.vue';
    import modal2 from './Modal2.vue';
    import modal3 from './Modal3.vue';

    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement',
                // 'save'                          
            ]),
            confirmSave () {
                this.showModal = true;
            },
            cancelSave () {
                this.showModal = false;
            },
            save () {
                this.showModal = false;
                // to mutations
                // this.$store.commit('save');

                //to actions
                this.$store.dispatch('save');
            }
            // ...mapMutations([
            //     'increment',
            //     'decrement'
            // ])

            // increment() {
            //     // this.$emit('updated', 1);
            //     // this.$store.state.counter++;
            //     this.$store.commit('increment'); //method name as string
            // },
            // decrement() {
            //     // this.$emit('updated', -1);
            //     // this.$store.state.counter--;
            //     this.$store.commit('decrement'); //method name as string
            // }
            ,
            openModal1 () {
                this.showModal1 = true;
            },

            confirmModal1(){
                this.showModal1 = false;
                this.showModal2 = true;
            },
            cancelModal1(){
                this.showModal1 = false;
            },

            confirmModal2(){
                this.showModal2 = false;
                this.showModal3 = true;
            },
            cancelModal2(){
                this.showModal2 = false;
            },

            confirmModal3(){
                this.showModal3 = false;
            },
            cancelModal3(){
                this.showModal3 = false;
            },


        },
        computed : {
            ...mapGetters([
                'change',
            ]),
            // ourOwn(){}
        },
        components: {
            modal,
            modal1,
            modal2,
            modal3,
        },
        data () {
            
            return {
                showModal: false,
                showModal1: false,
                showModal2: false,
                showModal3: false,
            }
        }
    }
</script>