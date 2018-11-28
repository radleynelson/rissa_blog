<template>
    <div class="child"> 
        <div class="category-img">
            <img class="img" :src="this.image.better_featured_image.source_url"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'categoryPreview',
        props: ['image'],
        data() {
            return {
                test: 3
            }
        },
    }
</script>

<style scoped>
    .child{
        width: 300px;
        height:500px;
        margin: 0;
        margin-left: 0;
        margin-right: 0;
    }
    .category-img{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    .img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin: 0%;
        padding: 0;
    }

</style>