<template>
    <div class="column categoryImg category-container">
        <router-link :to="{ name: 'category', params: {id: this.image.num, name: this.image.name}}">
            <img class="pic image" :src="this.image.img"/>
            <div class="middle">
                <div class="text">{{this.image.name}}</div>
            </div>
        </router-link>         
    </div>
</template>

<script>
    export default {
        name: 'categoryImg',
        props: ['image',],
        data() {
            return {
                test: 3,
            }
        },
    }
</script>

<style scoped>
    .pic{
        object-fit: cover;
        width: 100%;
        height: 450px;
    }
    .categoryImg{
        padding:0;

    }
    .category-container {
    position: relative;
    width: 50%;
}

.image {
  opacity: 1;
  display: block;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.category-container:hover .image {
  opacity: 0.3;
  
}

.category-container:hover{
    background: black;
}

.category-container:hover .middle {
  opacity: 1;
}

.text {
  color: white;
  font-size: 32px;
  padding: 16px 32px;
  text-transform: uppercase;
  letter-spacing: 5px;
}

</style>