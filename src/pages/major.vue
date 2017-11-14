<template>
    <div>
        <div class="tit-search">
            <input type="text" placeholder="请输入要搜索的专业名称" class="txt">
            <span class="search">检索</span>
        </div>
        <h3>选考科目分析</h3>
        <div class="remind">*科目比例：要求所选选考科目的专业总数/条件范围内专业总数。以专业为例：经济统计学专业历史所占比例为66.7%，意为选考历史，66.7%的经济统计学专业均可报考。</div>
        <tab-view class="tab_list" :list_="subject_list"></tab-view>
        <tab-view class="tab_list" :list_="subject_list"></tab-view>
        <div class="clearfix"></div>
    </div>
</template>
<script>
import list_view from '../components/list_view.vue'
export default {
    data: function() {
        return {
            subject_list: []
        }
    },
    created: function() {
        var vm = this;
        this.$http.get("src/server/general.json").then(function(res) {
            var analysisData = res.data.result.analysisData;
            var arr = [];
            analysisData.forEach((value, index) => {
                if (index < analysisData.length / 2) {
                    arr[index] = value;
                }
            });
            vm.subject_list = arr;
        })
    },
    components: {
        'tab-view': list_view
    }
}

</script>
<style scoped>
.tit-search {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 15px 0;
}

.txt {
    width: 400px;
    height: 40px;
    border: 3px solid rgba(0, 160, 92, 1);
}

.search {
    width: 90px;
    height: 40px;
    background: rgba(0, 160, 92, 1);
    display: block;
    line-height: 40px;
    text-align: center;
    color: #fff;
    cursor: pointer;
}

.tab_list {
    float: left;
}

.wrap {
    padding: 5px;
    font-size: 15px;
    border: 1px solid #ccc;
}

.select_title span {
    display: inline-block;
    padding: 5px;
}

.select_title div {
    display: inline-block;
}

.select_title div span {
    display: inline-block;
    padding: 5px;
}

.select_wrap>div {
    line-height: 1.3;
    margin-top: 5px;
}

h3 {
    padding: 10px 0;
}

.remind {
    color: #f00;
    padding-top: 10px;
    border-top: 1px solid #ccc;
    font-size: 14px;
    margin-bottom: 10px;
}

.tab_container table {
    float: left;
}

.clearfix {
    clear: both;
}
</style>


