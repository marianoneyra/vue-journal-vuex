<template>
    <div class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10}})">

        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">22</span>
            <span class="mx-1 fs-5">Noviembre</span>
            <span class="mx-2 fw-light">2022, martes</span>
        </div>
    

        <div class="entry-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum nibh a lectus condimentum, et pulvinar quam molestie. Integer urna enim, feugiat eu elit et, tincidunt egestas eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non libero nec mi auctor convallis. Integer sagittis pulvinar cursus. Quisque eget libero pretium, consequat ipsum eu, posuere dolor. Quisque risus nunc, euismod id ultrices at, commodo ac tellus. Donec scelerisque tortor quis odio faucibus volutpat.
        </div>
    </div>  
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2 all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2 all ease-in;
    }
    .entry-description {
        font-size: .7em;
    }
}


</style>