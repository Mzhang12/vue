<template>
    <div class="school-range clearfix">
        <div class="left-title">高校层次 : </div>
        <div class="right-area">
            <filter-item v-for="(value,index) in schoolRangeList" :range-object="value" :key="index" :index="index" :catagory="'高校层次'"></filter-item>
        </div>
    </div>
</template>
<script>
import filter_item from './filter_item.vue'
export default {
    props: {
        schoolRangeList: {
            required: true,
            type: Array
        }
    },
    components: {
        'filter-item': filter_item
    }
}
</script>
<style scoped>

</style>
