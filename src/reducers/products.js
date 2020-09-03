var initialState = [
    {
        id : "1",
        name : "Figure 01",
        price : 1000000,
        size: "50cm" ,
        author: "Hoàng Huỳnh",
        series: "AAA" ,
        released: "7/2020",
        products: ["Action Figure", "Chibi Figure", "Manga", "Thể loại khác"],
        productType: "Action Figure",
        image : "/template/images/actionfigure/2b1.jpg",
        imageDetail: "/template/images/actionfigure/2b2.jpg",
        imageDetail2: "/template/images/actionfigure/2b3.jpg"
        
    },
    {
        id : "2",
        name : "Figure 02",
        price : 2000000,
        size: "50cm" ,
        author: "Hoàng Huỳnh",
        series: "AAA" ,
        released: "7/2020",
        productType: "Action Figure",
        image : "/template/images/actionfigure/alice1.jpg",
        imageDetail: "/template/images/actionfigure/alice2.jpg",
        imageDetail2: "/template/images/actionfigure/alice3.jpg"
    },
    {
        id : "3",
        name : "Figure 03",
        price : 3000000,
        size: "50cm" ,
        author: "Hoàng Huỳnh",
        series: "AAA" ,
        released: "7/2020",
        productType: "Action Figure",
        image : "/template/images/actionfigure/altersaber1.jpg",
        imageDetail: "/template/images/actionfigure/altersaber2.jpg",
        imageDetail2: "/template/images/actionfigure/altersaber3.jpg"
    },
    {
        id : "4",
        name : "Figure 04",
        price : 4000000,
        size: "50cm" ,
        author: "Hoàng Huỳnh",
        series: "AAA" ,
        released: "7/2020",
        productType: "Action Figure",
        image : "/template/images/actionfigure/izuna1.jpg",
        imageDetail: "/template/images/actionfigure/izuna2.jpg",
        imageDetail2: "/template/images/actionfigure/izuna3.jpg",
    },
    {
        id : "5",
        name : "Figure 05",
        price : 5000000,
        size: "50cm" ,
        author: "Hoàng Huỳnh",
        series: "AAA" ,
        released: "7/2020",
        productType: "Action Figure",
        image : "/template/images/actionfigure/rem1.jpg",
        imageDetail: "/template/images/actionfigure/rem2.jpg",
        imageDetail2: "/template/images/actionfigure/rem3.jpg"
    },
    {
        id : "6",
        name : "Chibi Figure 01",
        price : 6000000,
        size: "50cm" ,
        author: "Hoàng Huỳnh",
        series: "AAA" ,
        released: "7/2020",
        productType: "Chibi Figure",
        image : "/template/images/chibifigure/aqua1.jpg",
        imageDetail: "/template/images/chibifigure/aqua2.jpg",
        imageDetail2: "/template/images/chibifigure/aqua3.jpg"
        
    },
    {
        id : "7",
        name : "Chibi Figure 02",
        price : 7000000,
        size: "50cm" ,
        author: "Hoàng Huỳnh",
        series: "AAA" ,
        released: "7/2020",
        productType: "Chibi Figure",
        image : "/template/images/chibifigure/itachi1.jpg",
        imageDetail: "/template/images/chibifigure/itachi2.jpg",
        imageDetail2: "/template/images/chibifigure/itachi3.jpg"
    },
    {
        id : "8",
        name : "Chibi Figure 03",
        price : 8000000,
        size: "50cm" ,
        author: "Hoàng Huỳnh",
        series: "AAA" ,
        released: "7/2020",
        productType: "Chibi Figure",
        image : "/template/images/chibifigure/L1.jpg",
        imageDetail: "/template/images/chibifigure/L2.jpg",
        imageDetail2: "/template/images/chibifigure/L3.jpg"
    },
    {
        id : "9",
        name : "Chibi Figure 04",
        price : 9000000,
        size: "50cm" ,
        author: "Hoàng Huỳnh",
        series: "AAA" ,
        released: "7/2020",
        productType: "Chibi Figure",
        image : "/template/images/chibifigure/miku1.jpg",
        imageDetail: "/template/images/chibifigure/miku2.jpg",
        imageDetail2: "/template/images/chibifigure/miku3.jpg"
    },
    {
        id : "10",
        name : "Chibi Figure 05",
        price : 10000000,
        size: "50cm" ,
        author: "Hoàng Huỳnh",
        series: "AAA" ,
        released: "7/2020",
        productType: "Chibi Figure",
        image : "/template/images/chibifigure/zerotwo1.jpg",
        imageDetail: "/template/images/chibifigure/zerotwo2.jpg",
        imageDetail2: "/template/images/chibifigure/zerotwo3.jpg"
    }
];

const products = (state = initialState, action) => {
    switch ( action.type ) {
        default : return [...state];
    }
}

export default products;