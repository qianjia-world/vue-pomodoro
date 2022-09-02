<template>
    <div class="list">
        <div class="focustime">
            <div class="title">
                <h2>focus time</h2>
            </div>
            <div class="total">
                <div class="today">
                    <h3>today</h3>
                    <p><span>20</span>/tomato</p>
                </div>
                <div class="week">
                    <h3>week</h3>
                    <p><span>108</span>/tomato</p>
                </div>
            </div>
        </div>
        <div class="chart">
            <div class="title">
                <h2>chart</h2>
                <div class="pickdate">
                    <a class="material-icons">keyboard_arrow_left</a>
                    <p>2019.7.1 - 2019.7.7</p>
                    <a class="material-icons">keyboard_arrow_right</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .list{
        display: flex;
        flex-direction: column;
        row-gap: 46px;
        color: $light;
    }
    .title{
        background: #FFFFFF33;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 8px 16px;
        margin-bottom: 16px;
        height: 44px;
        h2,span{
            font-size: $font-s;
        }
    }
    .pickdate{
        display: flex;
        flex-direction: row;
        align-items: center;
        p{
            line-height: 24px;
        }
    }
    .total {
        display: flex;
        justify-content: space-between;
        h3{
            line-height: 19px;
        }
        p{
            color: #FFFFFF33;
            line-height: 19px;
        }
        span{
            font-size: 64px;
            line-height: 75px;
            color: $thirdA;
        }
    }
</style>
