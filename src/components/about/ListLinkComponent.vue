<template>
    <ul>
      <li class="active"><a href="./todoList.html" class="active"><span class="material-icons">
        list</span>to-do list</a>
        </li>
      <li><a href="./analytics.html"><span class="material-icons">
        insert_chart
        </span>analytics</a></li>
      <li><a href="./ringtones.html"><span class="material-icons">
        library_music
        </span>ringtones</a></li>
    </ul>
</template>
<style lang="scss" scoped>
  ul{
    display: flex;
    flex-direction: column;
    row-gap: 48px;
  }
  a{
    font-size: $font-m;
    color: #FFFFFF33;
  }
  .material-icons{
    font-size: $font-m;
  }
  .active{
    color: $thirdA;
  }
  span{
    margin-right: 8px;
  }
</style>
