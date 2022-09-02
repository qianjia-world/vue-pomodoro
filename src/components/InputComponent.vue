<template>
    <div class="inputbox">
        <label for="writeTodo">
            <input type="text" id="writeTodo" placeholder="add a new mission…" >
        </label>
        <a href="#"><span class="material-icons">add</span></a>
    </div>
</template>

<style lang="scss" scoped>
.inputbox{
    position: relative;
}
input{
    width: 100%;
    height: 56px;
    padding-left: 17px;
    border-style: none;
    outline: none;
    &::placeholder{
        color: $thirdA;
        text-transform: uppercase;
        font-weight: bold;
        font-style: italic;
    }
    &:focus{
        border: 1px solid $thirdA;
    }
}

a{
    color: $thirdA;
    position: absolute;
    top:30%;
    right: 5%;
}
</style>
