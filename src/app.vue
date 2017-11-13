<template>
<div class="container route">
    <p class="remind">*由于2020年拟在京招生普通高校专业（类）选考科目范围尚未公布，暂时调用2018拟在浙招生普通高校专业（类）选考科目范围，该数据仅供参考，正式文件公布后会即时替换！</p>
    <ul class="tab">
        <router-link class="filter-item" :to="{name: 'overall'}" tag="li">综合检索</router-link>
        <router-link class="filter-item" :to="{name: 'college'}" tag="li">高校检索</router-link>
        <router-link class="filter-item" :to="{name: 'major'}" tag="li">专业检索</router-link>
    </ul>
    <router-view></router-view>
</div>
</template>
<script>
    export default {
        name: 'app',
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .container {
        width: 1200px; 
        margin: 0 auto;
        font-size: 16px;
    }
    .remind {
        color:red;
        font-size: 14px;
        line-height: 20px;
        padding: 10px 0;
    }
    .tab {
        font-size: 0;
        margin: 0;
        border-bottom: 1px solid #ccc;
    }
    .filter-item {
        display: inline-block;
        padding: 0 10px;
        min-width: 70px;
        height: 35px;
        color: #333;
        text-align: center;
        font-size: 14px;
        margin: 0;
        line-height: 35px;;
        cursor: pointer;
    }
    .router-link-active,.filter-item:hover{
        background: rgba(0, 160, 92, 1);
        color:#fff;
    }
</style>
