<template>
    <div class="list">
        <div class="title">
            <h2>to-do</h2>
            <a href="">
                <span class="material-icons">arrow_drop_up</span>
                <!-- <span class="material-icons">arrow_drop_down</span> -->
            </a>
        </div>
        <ul>
            <li>
                <!-- <span class="material-icons">
                check_circle_outline
                </span> -->
                <a href="">
                    <span class="material-icons">radio_button_unchecked</span>
                </a>
                <p>the second thing to do today</p>
                <a href="#" class="playbutton">
                    <span class="material-icons">
                    play_circle_outline
                    </span>
                </a>
            </li>
            <li>
                <a href="">
                    <span class="material-icons">radio_button_unchecked</span>
                </a>
                <p>the second thing to do today</p>
                <a href="#" class="playbutton">
                    <span class="material-icons">
                    play_circle_outline
                    </span>
                </a>
            </li>
            <li>
                <a href="">
                    <span class="material-icons">radio_button_unchecked</span>
                </a>
                <p>the second thing to do today</p>
                <a href="#" class="playbutton">
                    <span class="material-icons">
                    play_circle_outline
                    </span>
                </a>
            </li>
            <li>
                <a href="">
                    <span class="material-icons">radio_button_unchecked</span>
                </a>
                <p>the second thing to do today</p>
                <a href="#" class="playbutton">
                    <span class="material-icons">
                    play_circle_outline
                    </span>
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .list{
        height: 300px;
    }
    .title{
        color: $light;
        background: #FFFFFF33;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 8px 16px;
        margin-bottom: 16px;
        h2,span{
            font-size: $font-s;
        }
    }
    ul{
        display: flex;
        flex-direction: column;
        row-gap: 9px;
    }
    li{
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 32px;
        color: $light;
        border-bottom:1px solid rgb(151, 151, 151);
        .playbutton{
            margin-left: auto;
        }
        p{
            margin-left: 4px;
            line-height: 19px;
            font-size: 16px;
        }
        a{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 24px;
            height: 24px;
        }
    }

</style>
