<template>
<div class="link">
    <ul>
        <li><router-link to="/about/todolist"><span class="material-icons">
            list
            </span></router-link>
        </li>
        <li><router-link to="/about/analytics"><span class="material-icons">
            insert_chart
            </span></router-link>
        </li>
        <li><router-link to="/about/ringtones"><span class="material-icons">
            library_music
            </span></router-link>
        </li>
    </ul>
    <router-link to="/" class="logo">POMODORO</router-link>
</div>
</template>

<style lang="scss" scoped>
.link{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
ul{
    display: flex;
    flex-direction: column;
    row-gap: 48px;
}
li{
    span{
        font-size: $font-m;
    }
}
.logo{
    writing-mode: vertical-rl;
    text-orientation: mixed;
    font-size: $font-s;
    line-height: 32px;
}
</style>
