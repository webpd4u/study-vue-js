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
  </div>
</template>

<script>
    // import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';
    import { mapGetters } from 'vuex';

    import modal from './Modal.vue';

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
        },
        computed : {
            ...mapGetters([
                'change',
            ]),
            // ourOwn(){}
        },
        components: {
            modal,
        },
        data () {
            
            return {
                showModal: false
            }
        }
    }
</script>