<template>
    <div class="home-page-main" @click="$emit('update:name', 'xiaohan');">
       我是main页面的name: {{$t("normal.confirm")}}
        <el-button type="primary" @click="changeZhLan">中文</el-button>
       <el-button type="primary" @click="changeEnLan">英文</el-button>
    </div>
</template>

<script>
export default {
    name: 'HomePageMain',
    data() {
        return {
            
        }
    },
    props: {
        name: {
            default: 'Vue',
            type: String
        }
    },
    methods: {
         changeZhLan() {
            this.$i18n.locale = "en";
        },
        changeEnLan() {
            this.$i18n.locale = "zh";
        }
    }
  }

</script>

<style scoped>

</style>
