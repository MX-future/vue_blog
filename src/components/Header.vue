<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: rgba(248,248,255,0.8);">
            <a href="" class="navbar-brand">MX巴赫</a>
            <ul class="navbar-nav">
                <li><router-link to='/' class="nav-link">博客</router-link></li>
                <li><router-link to='my-note' class="nav-link">随手记</router-link></li>
                <li><router-link to='my-contact' class="nav-link">联系我</router-link></li>
            </ul>
            <ul class="navbar-nav ml-auto"> 
                <li><router-link to='my-newcontext' class="navbar-brand nav-link">新建内容</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
header{
    margin-top: 50px;
}

</style>




