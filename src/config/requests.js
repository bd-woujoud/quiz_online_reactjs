
export const apiUrls = {

    offres: {
        create: '/offres',
        get: '/offres',
        search:'/offres/search',
        delete:'/offres/deletebyid/',
        update:'/offres/updatebyid/'
    },
    
    condidatures: {
        create: '/condidatures',
        get: '/condidatures'
    },
    authentication: {
        login: '/admin/login',
        logout: '/admin/logout',
    },

    tests: {
        create: '/test',
        getbyid: '/test/getbyid/',
        update: '/test/updatebyid/',

    },
    
    categories : {

        get: '/category',
        delete:'/category/deletebyid/',
        create:'/category/add',
        update:'/category/updatebyid/'
    },

    qcms: {
        create: '/',
        get:'/qcms/getall',
        update:'/qcms/',
        delete:'/qcms/deletebyid/',
    },


}