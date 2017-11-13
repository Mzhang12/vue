<template>
    <div class="filter-box">
        <div class="selected-condations clearfix">
            <div class="left-title">已选条件：</div>
            <div class="right-area">
                <p class="selected-item" v-if="selected_range_item!='不限'">{{selected_range_item}}
                    <span class="clear-selected" @click="clearRange">x</span>
                </p>
                <p class="selected-item" v-if="selected_area_item!='不限'">{{selected_area_item}}
                    <span class="clear-selected" @click="clearArea">x</span>
                </p>
            </div>
        </div>
        <div class="condations-box">
            <div class="major-range clearfix">
                <div class="left-title">专业层次：</div>
                <div class="right-area"></div>
            </div>
            <school-range :school-range-list="$store.state.school_range_obj"></school-range>
            <school-area :school-area-list="$store.state.school_area_obj"></school-area>
        </div>
        <div class="main-list">
            <h2 class="tit">选考信息分析</h2>
            <p class="remind">*由于2020年拟在京招生普通高校专业（类）选考科目范围尚未公布，暂时调用2018拟在浙招生普通高校专业（类）选考科目范围，该数据仅供参考，正式文件公布后会即时替换！</p>
            <tab-view class="tab_list" :title_="tab_title" :list_="tab_left_list"></tab-view>
            <tab-view class="tab_list" :title_="tab_title" :list_="tab_left_list"></tab-view>
            <div class="clearfix"></div>
        </div>
    </div>
</template>
<script>
import school_range from '../components/school_range.vue';
import school_area from '../components/school_area.vue';
import list_view from '../components/list_view.vue';
export default {
    data: function() {
        return {
            tab_title: [],
            tab_left_list: [],
            tab_right_list: [],
        }
    },
    computed: {
        "selected_range_item": function () {
            return this.$store.getters.selected_range;
        },
        "selected_area_item": function () {
            return this.$store.getters.selected_area;
        }
    },
    created: function() {
        var vm = this;
        this.$http.get('src/server/schoolRange.json').then(function(res) {
            let range_data = res.data.list.map((value, index) => {
                return index == 0 ? {
                    value: value,
                    selected: true
                } : {
                        value: value,
                        selected: false
                    }
            })
            vm.$store.commit('updata_school_range', range_data)
        })
        this.$http.get('src/server/schoolArea.json').then(function(res) {
            let range_data = res.data.list.map((value, index) => {
                return index == 0 ? {
                    value: value,
                    selected: true
                } : {
                        value: value,
                        selected: false
                    }
            })
            vm.$store.commit('updata_school_area', range_data)
        })
        this.$http.get("src/server/general.json").then(function(res) {
            vm.tab_title = res.data.result.title;
            var tab_list = res.data.result.analysisData;
            var left_arr = [];
            tab_list.forEach((value, index) => {
                if (index < tab_list.length / 2) {
                    left_arr[index] = value;
                }
            });
            vm.tab_left_list = left_arr;
            var right_arr = [];
            var s = 0;
            tab_list.forEach((value, index) => {
                if (index >= tab_list.length / 2) {
                    right_arr[s] = value;
                    s++;
                }
            });
            vm.tab_right_list = right_arr;
            vm.college_title = res.data.result.title;
            vm.college_detail = res.data.result.rows;

        })
    },
    methods: {
        clearRange: function() {
            this.$store.commit('clear_range')
        },
        clearArea: function() {
            this.$store.commit('clear_area')
        }
    },
    components: {
        "school-range": school_range,
        "school-area": school_area,
        "tab-view": list_view
    }
} 
</script>
<style>
.filter-box {
    width: 100%;
    margin: 10px auto;
    user-select: none;
}
.left-title,
.right-area {
    float: left;
    box-sizing: border-box;
}
.tit {
    padding: 15px 0 15px 10px;
    text-indent: 10px;
    width: 100%;
    border-bottom:1px solid #ccc;
    font-size: 16px;
}
.left-title {
    margin: 5px 0;
    text-indent: 10px;
    width: 10%;
}
.right-area {
    width: 90%;
}
.selected-item {
    margin: 0;
    padding: 0 5px;
    display: inline-block;
    border: 1px solid #ccc;
}
.clear-selected {
    cursor: pointer;
}
.selected-condations {
    padding-left: 10px;
    line-height: 35px;
}
.condations-box {
    border: 1px solid #ccc;
    padding: 10px;
    line-height: 35px;
}
.filter-item {
    display: inline-block;
    min-width: 70px;
    padding: 0 5px;
    height: 35px;
    color: #333;
    text-align: center;
    line-height: 35px;
    margin: 5px;
    cursor: pointer;
}
.filter-item.selected {
    background: rgba(0, 160, 92, 1);
    color: #fff;
}
 .filter-item:hover {
    background: rgba(0, 160, 92, 1);
    color: #fff;
} 
.remind {
    color:red;
    font-size: 14px;
    line-height: 20px;
    padding: 10px 0;
    font-size: 14px;
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

.tab_container table {
    float: left;
}

.clearfix {
    clear: both;
}
</style>


