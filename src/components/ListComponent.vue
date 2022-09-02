<template>
<div class="top3">
    <ul>
        <li>
            <a href=""><span class="material-icons">radio_button_unchecked</span></a>
            <p>the second thing to do today</p>
            <a href="#" class="playbutton"><span class="material-icons">
                play_circle_outline
                </span></a>
        </li>
        <li>
            <a href=""><span class="material-icons">radio_button_unchecked</span></a>
            <p>the third thing to do today</p>
            <a href="#" class="playbutton"><span class="material-icons">
                play_circle_outline
                </span></a>
        </li>
        <li>
            <a href=""><span class="material-icons">radio_button_unchecked</span></a>
            <p>the forth thing to do today</p>
            <a href="#" class="playbutton"><span class="material-icons">
                play_circle_outline
                </span></a>
        </li>
    </ul>
    <a href="#" class="more">more</a>
</div>
</template>

<style lang="scss" scoped>
.top3{
    display: flex;
    flex-direction: column;
    color: $primaryA;
}
ul{
    height: 114.5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
li{
    display: flex;
    justify-content: flex-start;
    line-height: 32px;
    border-bottom: 1pt solid gray;
}

.playbutton{
    margin-left: auto;
}

li>a{
    display: flex;
    justify-content: center;
    align-items: center;
    color: $primaryA;
}
.more{
    align-self: flex-end;
    margin-top: 9px;
    color: $thirdA;
}
</style>
