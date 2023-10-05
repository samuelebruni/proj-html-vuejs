import { reactive } from "vue";

export const store = reactive({
    mainMenuVoices: [
        {
            text: 'Home',
        },

        {
            text: 'About Us',
            id: '#customer'
        },

        {
            text: 'Vehicles',
        },

        {
            text: 'Dealers',
            id: '#wanttobuy'
        },

        {
            text: 'Packages',
        },

        {
            text: 'Blog',
            id: '#resentarticle'
        },
        {
            text: 'Contacts',
            id: '#footer'
        }
    ],
    firstFooterVoices: [
        {
            text: 'My Account',
        },

        {
            text: 'Checkout',
        },

        {
            text: 'Cart',
        },

        {
            text: 'Packages',
        },

        {
            text: 'Add Car',
            id: '#car_search'
        }
    ],
    secondFooterVoices: [
        {
            text: 'Home',
            id: '#site_jumbotron'
        },

        {
            text: 'About Us',
            id: '#customer'
        },

        {
            text: 'Blog',
            id: '#resentarticle'
        },
        {
            text: 'Contacts',
            id: '#footer'
        },
        {
            text: 'Refound & Returns'
        }
    ],
})