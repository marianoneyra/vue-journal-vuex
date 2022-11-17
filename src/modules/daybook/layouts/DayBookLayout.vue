
<template>
    <NavBar />

    <div class="d-flex">
        <div class="col-4">
            <EntryListDaybook />
        </div>
        <div class="col">
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        NavBar: defineAsyncComponent(() => import('../components/NavBar.vue')),
        EntryListDaybook: defineAsyncComponent(() => import('../components/EntryListDaybook.vue'))
    }
}

</script>


