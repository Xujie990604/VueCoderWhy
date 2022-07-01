<template>
    <div class="home-page " @click="changeName">
       我是HomePage页面的name: {{$store.state.name}}
    </div>
</template>

<script>
import HomePageMain from '@/components/HomePage/HomePageMain.vue'
export default {
    name: 'HomePage',
    components: {
        HomePageMain
    },
    data() {
        return {
            checkLIst: ['1', '2','3']
        }
    },
    methods: {
        changeName() {
            // this.$store.dispatch('aChangeName', 'xiaohan');
            const aList = this.checkLIst;
            // for(let index in this.checkLIst) {
            //     console.log(this.checkLIst[index]);
            //     console.log(this)
            // }

            function a() {
                console.log(this)
            }

            a(console.log(this))
        }
    }
}
</script>

<style scoped>

</style>