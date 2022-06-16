<template>
    <div class="test-view">
        test
       <el-button type="primary" icon="el-icon-check">按钮</el-button>
       <el-input> </el-input>
    </div>
</template>

<script>
export default {
    name: 'TestView',
    data() {
        return {

        } 
    }
}
</script>

<style scoped>
button {
    color: red;
}

.el-input >>>  .el-input__inner {
    height: 100px;
}
</style>