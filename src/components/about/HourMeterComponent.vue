<template>
<div class="time">
    <h1>25:00</h1>
    <p>the First thing to do today</p>
    <a href="">
       <span class="material-icons">play_circle</span>
    </a>
</div>
</template>

<style lang="scss" scoped>
.time{
    position: absolute;
    width: 350px;
    height: 175px;
    background-color: $secondaryA;
    bottom: 0;
    border-radius: 350px 350px 0 0;
    text-align: center;
    h1{
        font-size: $font-l;
        color: $thirdA;
        margin-top: 57px;
    }
    p{
        line-height: 24px;
    }
    a{
        position: absolute;
        width: 116px;
        height: 116px;
        border-radius: 50%;
        bottom: 65%;
        left: 33%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image:radial-gradient(circle 116px,
            $light 0%,
            $light 20%,
            $primaryA 20%,
            $primaryA 42%,
            $thirdA 42%,
            $thirdA 44%,
            $primaryA 44%,
            $primaryA 100%,
            )
    }
    // a::before{
    //     content: '';
    //     position: absolute;
    //     bottom:7%;
    //     left:7%;
    //     width: 100px;
    //     height: 100px;
    //     border-radius: 50%;
    //     border: 2px solid $thirdA;
    // }
    span{
        font-size: 96px;
        color: $thirdA;
    }
}
</style>
