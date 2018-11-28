<template>
    <router-link to="/">
        <div class="mainLogo">  
            Rissa Nelson
        </div>
    </router-link>
</template>

<script>
    export default {
        name: 'mainLogo',
        data() {
            return {
                test: 3,
            }
        },
    }
</script>

<style scoped>
@font-face {
    font-family: Champagne;
    src: url('/static/Champagne&Limousines.ttf') format("truetype")
}
    .mainLogo{
        text-transform: uppercase;
        letter-spacing: 30px;
        font-size: 85px;
        margin-top: 55px;
        font-family: Champagne;
        color: black;
    }
    
</style>