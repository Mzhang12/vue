<template>
    <tbody>
        <tr>
            <td v-for="(item, index) in item_row" :key="index" class="pre"><span v-if="index==0" class="show" @click="table_show">{{flag}}</span>{{item}}</td>
        </tr>
        <tr>
            <td colspan="9" class="two">
                <table class="content" v-show="active">
                    <thead>
                        <tr>
                            <td>高校地区</td>
                            <td>高校名称</td>
                            <td>专业（类）</td>
                            <td>类中所含专业</td>
                            <td>选考科目范围</td>
                        </tr>
                        <tr v-for="(item, index) in item_table" :key="index">
                            <td>{{item.province}}</td>
                            <td>{{item.collegeName}}</td>
                            <td>{{item.majorName}}</td>
                            <td>{{item.remark.join(',')}}</td>
                            <td>{{item.subjectRangeNames.join(',')}}</td>
                        </tr>
                    </thead>
                </table>
            </td>
        </tr> 
    </tbody>
</template>
<script>
export default {
    props: ['row'],
    data: function() {
        return {
            item_row: [],
            item_table: [],
            active: false,
            flag: "+"
        }
    },
    created: function() {
        console.log(this.row);
        let len = this.row.length;
        this.item_row = this.row.slice(0, len - 1);
        this.item_table = this.row[len-1];
    },
    methods: {
        table_show: function () {
            this.active = !this.active;
            if (this.active) {
                this.flag = '-';
            } else {
                this.flag = '+';
            }
        }
    }
}
</script>
<style>
tbody{
    border:1px solid #ccc;
}
table tr,table td{
     border-right:1px solid #ccc;
}
table thead td{
    border-top:1px solid #ccc;
}
.content {
    width:100%;
    background: #f4f4f4;
    font-size: 14px;
}
.content td {
    text-align: center;
} 
.pre {
    position: relative;
}
.show {
    font-weight: bold;
    color: #fff;
    background: rgba(0, 160, 92, 1);
    position: absolute;
    line-height: 18px;
    text-align: center;
    width: 18px;
    height: 18px;
    left: 10px;
    top:10px;
    cursor: pointer;
}
</style>


