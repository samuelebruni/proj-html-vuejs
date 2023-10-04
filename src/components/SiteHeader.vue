<script>
export default {
    name: 'SiteHeader',
}
</script>

<template>
    <div class="container">
        <div class="d-flex align-items-center justify-content-between">
            <div>
                <img src="../assets/img/favicon-autocar.png" alt="">
            </div>
            <div>
                <ul class="list-unstyled d-flex gap-4 mb-0 fw-bold">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Veichles</li>
                    <li>Dealers</li>
                    <li>Packages</li>
                    <li>Blog</li>
                    <li>Contacts</li>
                </ul>
            </div>
            <div class="d-flex">
                <div class="bg-dark py-3 fw-bold text-white rounded-2">
                    <img src="../assets/img/padlock.png" style="width: 40px">
                    <span class="px-1">My Account</span>
                </div>
                <div class="bg-dark py-3 fw-bold text-white rounded-2 mx-1 d-flex align-items-center">
                    <div class="px-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                            class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </div>
                    <span class="px-1">Add Car</span>
                </div>
            </div>
            <div class="fw-bold">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>
            <div class="bg-dark py-3 fw-bold text-white rounded-2 mx-1 d-flex align-items-center px-2">
                <div class="px-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                        class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                </div>
                <span class="px-1">+1 (234) 567 89 10</span>
            </div>



        </div>
    </div>
</template>