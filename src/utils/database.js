 
    export function products(){
        // const products = await fetch()
        const products = [
            {
                id: 1,
                title: "Dark Blue Lace",
                description:"Lorem ipsum dolor ut sit ame dolore adipiscing elit, sed nonumy nibh sed euismod laoreet dolore magna aliquarm erat volutpat Nostrud duis molestie at dolore.",
                discount_price:47,
                price:62,
                cover_photo:"assets/products/model1.jpg",
                other_photos:["assets/products/other_photos/p7.jpg", "assets/products/other_photos/download.jpg"],
                rating: "4"
            
            },
            {
                id: 2,
                title: "Blue Coverall PPE",
                description:"Lorem ipsum dolor ut sit ame dolore adipiscing elit, sed nonumy nibh sed euismod laoreet dolore magna aliquarm erat volutpat Nostrud duis molestie at dolore.",
                discount_price:54,
                price:69,
                cover_photo:"assets/products/model2.jpg",
                other_photos:["assets/products/other_photos/cov1.jpg", "assets/products/cov2.jpg"],
                rating: "5"
            },
            {
                id: 3,
                title: "Dark Blue Lace",
                description:"Lorem ipsum dolor ut sit ame dolore adipiscing elit, sed nonumy nibh sed euismod laoreet dolore magna aliquarm erat volutpat Nostrud duis molestie at dolore.",
                discount_price:47,
                price:62,
                cover_photo:"assets/products/model3.jpg",
                other_photos:["assets/products/other_photos/p7.jpg", "assets/products/download.jpg"],
                rating: "3"
            
            },
            {
                id: 4,
                title: "Blue Coverall PPE",
                description:"Lorem ipsum dolor ut sit ame dolore adipiscing elit, sed nonumy nibh sed euismod laoreet dolore magna aliquarm erat volutpat Nostrud duis molestie at dolore.",
                discount_price:54,
                price:69,
                cover_photo:"assets/products/model4.jpg",
                other_photos:["assets/products/other_photos/cov1.jpg", "assets/products/cov2.jpg"],
                rating: "3"
            
            },
            {
                id: 5,
                title: "Dark Blue Lace",
                description:"Lorem ipsum dolor ut sit ame dolore adipiscing elit, sed nonumy nibh sed euismod laoreet dolore magna aliquarm erat volutpat Nostrud duis molestie at dolore.",
                discount_price:47,
                price:62,
                cover_photo:"assets/products/model5.jpg",
                other_photos:["assets/products/other_photos/p7.jpg", "assets/products/download.jpg"],
                rating: "4"
            },
            {
                id: 6,
                title: "Dark Blue Lace",
                description:"Lorem ipsum dolor ut sit ame dolore adipiscing elit, sed nonumy nibh sed euismod laoreet dolore magna aliquarm erat volutpat Nostrud duis molestie at dolore.",
                discount_price:47,
                price:62,
                cover_photo:"assets/products/model6.jpg",
                other_photos:["assets/products/other_photos/p7.jpg", "assets/products/download.jpg"],
                rating: "2"
            },
            {
                id: 7,
                title: "Blue Coverall PPE",
                description:"Lorem ipsum dolor ut sit ame dolore adipiscing elit, sed nonumy nibh sed euismod laoreet dolore magna aliquarm erat volutpat Nostrud duis molestie at dolore.",
                discount_price:54,
                price:69,
                cover_photo:"assets/products/model7.jpg",
                other_photos:["assets/products/other_photos/cov1.jpg", "assets/products/cov2.jpg"],
                rating: "2"
            },
            {
                id: 8,
                title: "Dark Blue Lace",
                description:"Lorem ipsum dolor ut sit ame dolore adipiscing elit, sed nonumy nibh sed euismod laoreet dolore magna aliquarm erat volutpat Nostrud duis molestie at dolore.",
                discount_price:47,
                price:62,
                cover_photo:"assets/products/model1.jpg",
                other_photos:["assets/products/other_photos/p7.jpg", "assets/products/download.jpg"],
                rating: "4"
            },
            {
                id: 9,
                title: "Blue Coverall PPE",
                description:"Lorem ipsum dolor ut sit ame dolore adipiscing elit, sed nonumy nibh sed euismod laoreet dolore magna aliquarm erat volutpat Nostrud duis molestie at dolore.",
                discount_price:54,
                price:69,
                cover_photo:"assets/products/model2.jpg",
                other_photos:["assets/products/other_photos/cov1.jpg", "assets/products/cov2.jpg"],
                rating: "5"
            },
            {
                id: 10,
                title: "Dark Blue Lace",
                description:"Lorem ipsum dolor ut sit ame dolore adipiscing elit, sed nonumy nibh sed euismod laoreet dolore magna aliquarm erat volutpat Nostrud duis molestie at dolore.",
                discount_price:47,
                price:62,
                cover_photo:"assets/products/model1.jpg",
                other_photos:["assets/products/other_photos/p7.jpg", "assets/products/download.jpg"],
                rating: "1"
            },
        ];

        return products;
    }

    export function latestProducts(){
        const getProducts = products();
        const output = getProducts.filter(filterNewProducts);
        return output;
    }

    export function filterNewProducts(product){
        return product.id < 4;
    } 

   
