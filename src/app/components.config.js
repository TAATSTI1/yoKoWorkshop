﻿define({
    // Pages - knockout components that serve as pages
    pages: [
        // [Scaffolded pages will be inserted here. To retain this feature, don't remove this comment.]
        { name: 'feed', path: 'pages/feed/feed' },
        { name: 'contact', path: 'pages/contact/contact' },
        { name: 'home-page', path: 'pages/home/home' },
        { name: 'about-page', path: 'pages/about/about' }
    ],
    // Components - knockout components intended as parts of pages, a.k.a. components
    components: [
        // [Scaffolded components will be inserted here. To retain this feature, don't remove this comment.]
        { name: 'post', path: 'components/post/post' },
        { name: 'post-list', path: 'components/post-list/post-list' },
        { name: 'contact-form', path: 'components/contact-form/contact-form' },
        { name: 'address-info', path: 'components/address-info/address-info' },
        { name: 'test', path: 'components/test/test' },
        { name: 'nav-bar', path: 'components/nav-bar/nav-bar' }

    ]
});