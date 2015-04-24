var products = [];

$(document).ready(function () {
    if (typeof (Storage) !== "undefined") {
        appStart();
    } else {
        // Sorry! No Web Storage support..
        alert('No Local Storage support found, exiting!');
        return;
    }
});

function appStart() {
    
}

function updateAllProductsFromService() {
    $.ajax({
        url: "http://json2jsonp.com/?url=http://mcafee.0x10.info/api/app?type=json",
        dataType: 'jsonp',
        contentType: "text/html; charset=UTF-8",
    }).success(function (data) {
        products = [];
        $(data).each(function () {
            products.push(this);
        });
    }).error(function (data) {
        alert("An Error Occured");
        // @TODO other error handling code
    });
}

function createProductCard(info) {
    var card = document.createElement("DIV");
//    card.setAttribute('id','abc')
    card.className = 'card';
    document.body.appendChild(card);


    var imageContainer = document.createElement('DIV');
    imageContainer.className = 'image-container';
    var image = document.createElement('IMG');
    image.src = info.imagee;
    image.className = 'imagee';
    imageContainer.appendChild(image);
    card.appendChild(imageContainer);
    card.appendChild(document.createElement('BR'));


    var name = document.createElement("P");
    var text = document.createTextNode(info.name);
    name.className = 'name';
    name.appendChild(text);
    card.appendChild(name);


    var usersContainer = document.createElement('SPAN');
    usersContainer.className = 'users-container';
    text = document.createTextNode("Users:");
    usersContainer.appendChild(text);
    text = document.createTextNode(info.users);
    usersContainer.appendChild(text);
    card.appendChild(usersContainer);
    card.appendChild(document.createElement('BR'));


    var ratingContainer = document.createElement("SPAN");
    ratingContainer.className = 'rating-container'
    var rating = document.createElement('SPAN');
    rating.className = 'rating-static ' + calculateRatingClass(info.rating);
    ratingContainer.appendChild(rating);
    card.appendChild(ratingContainer);


    var price = document.createElement('SPAN');
    price.className = 'price';
    text = document.createTextNode(processPrice(info.price));
    price.appendChild(text);
    card.appendChild(price);
    //card.appendChild(ratingContainer);
}

function calculateRatingClass(rating) {
    if (rating < 0.5)
        return 'rating-0';
    else if (rating >= 0.5 && rating < 1)
        return 'rating-5';
    else if (rating >= 1 && rating < 1.5)
        return 'rating-15';
    else if (rating >= 1.5 && rating < 2)
        return 'rating-20';
    else if (rating >= 2 && rating < 2.5)
        return 'rating-25';
    else if (rating >= 2.5 && rating < 3)
        return 'rating-30';
    else if (rating >= 3 && rating < 3.5)
        return 'rating-35';
    else if (rating >= 3.5 && rating < 4)
        return 'rating-40';
    else if (rating >= 4 && rating < 4.5)
        return 'rating-45';
    else if (rating >= 4.5 && rating < 5)
        return 'rating-50';
}

function processPrice(price) {
    if (price == 0) {
        return 'Free';
    }
    else {
        return '$' + price;
    }
}

