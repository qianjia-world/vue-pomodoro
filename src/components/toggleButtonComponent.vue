<template>
    <div class="round-border">
        <div class="round">
          <a href="#" class="material-icons">
              play_circle_filled
          </a>
          <span class="material-icons">
          stop
          </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.round-border{
    width: 540px;
    height: 540px;
    border-radius: 50%;
    border: 4px solid $thirdA;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    >.round{
        background-color: $thirdA;
        border-radius: 50%;
        width: 500px;
        height: 500px;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        >a{
            font-size: 96px;
            color: $light;
        }
        >span{
        position: absolute;
        font-size: $font-s;
        color: $light;
        left: 58%;
        top: 54%;
        }
    }
}
</style>
