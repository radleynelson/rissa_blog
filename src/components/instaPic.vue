<template>
    <div>
        <a target="_blank" class="insta-link" :href="image.link">
            <img class="pic" :src="image.images.low_resolution.url"/>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'instaPic',
        data() {
            return {
                key: 4
            }
        },
        props: ['image'],
    }
</script>

<style scoped>
    .pic{
        object-fit: cover;
        width: 100%;
        height: 150px;
    }
    .pic:hover{
        background: gray;
        opacity: .5;
    }
    .insta-link{
        width: 100%;
    }
</style>