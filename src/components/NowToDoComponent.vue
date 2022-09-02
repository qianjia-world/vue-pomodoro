<template>
<div class="nowtodo">
    <div class="nowTodo">
    <a href="">
        <span class="material-icons">donut_large</span>
        <!-- <span class="material-icons">running_with_errors</span>
        <span class="material-icons">done</span> -->
        <p>the First thing to do today</p>
    </a>
    </div>
    <div class="time">25:00</div>
</div>
</template>

<style lang="scss" scoped>
a{
    display: flex;
    color: $primaryA;
    span{
        font-size: 60px;
    }
    p{
        font-size: $font-s;
        line-height: 28px;
        color: $primaryA;
        margin-left: 8px;
    }
}

.time{
    font-size: 176px;
    line-height: 206px;
    color: $thirdA;
}
</style>
