<script>
import { store } from '../store.js';
export default {
    name: 'SiteHeader',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section id="header">
        <div class="container">
            <div class="d-flex align-items-center gap-4 justify-content-between">
                <div>
                    <img src="../assets/img/favicon-autocar.png" alt="">
                </div>
                <div>
                    <ul class="list-unstyled d-flex gap-3 mb-0 fw-bold" style="cursor: pointer">
                        <li v-for="voice in store.mainMenuVoices"><a class="text-decoration-none text-black"
                                :href="voice.id">{{ voice.text }}</a></li>
                    </ul>
                </div>
                <div class="d-flex">
                    <div class="py-2 fw-bold d-flex align-items-center border border-black px-3" style="cursor: pointer">
                        <img src="../assets/img/padlock.png" style="width: 40px">
                        <span class="px-1">My Account</span>
                    </div>
                    <div class=" py-2 fw-bold border border-black mx-1 px-3 d-flex align-items-center"
                        style="cursor: pointer">
                        <a class="text-decoration-none text-black" href="#car_search">
                            <img src="../assets/img/add.png" style="width: 35px">
                            <span class="px-1">Add Car</span>
                        </a>
                    </div>
                </div>
                <div class="fw-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list"
                        viewBox="0 0 16 16" style="cursor: pointer">
                        <path fill-rule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </div>
                <div class=" py-2 fw-bold mx-1 border border-black d-flex align-items-center px-2" style="cursor: pointer">
                    <img src="../assets/img/headphones.png" style="width:38px">
                    <span class="px-1">+1 (234) 567 89 10</span>
                </div>



            </div>
        </div>
    </section>
</template>

<style scoped>
li:hover {
    border-bottom: 2px solid black
}
</style>