<template>
    <table>
        <thead>
            <tr class="tablewrap">
                <td v-for="(value, index) in title" :key="index">{{value}}</td>
            </tr>
        </thead>
        <slot></slot>
    </table>
</template>
<script>
export default {
    props: {
        title: {
            required: true,
            type: Array
        }
    }
}
</script>
<style>
.tablewrap {
    background: rgba(0, 160, 92, 1);
    color: #fff;
}
.tablewrap td {
    border: 1px solid rgba(0, 160, 92, 1);
}
table thead tr {
    height: 40px;
}
</style>


