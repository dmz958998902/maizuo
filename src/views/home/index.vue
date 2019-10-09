<template>
    <div class="page">
        <!-- 一级路由页面 -->
        

        <!-- 二级路由页面的坑 -->
        <router-view></router-view>
        <ul>
            <li>
                <router-link to='/films'>电影</router-link>
            </li>
            <li>
                <router-link to='/cinemas'>影院</router-link>
            </li>
            <li>
                <router-link to='/center'>我的</router-link>
            </li>
        </ul>
    </div>
</template>