var products = [];

$(document).ready(function() {
    updateAllProductsFromService();
});

function updateAllProductsFromService() {
    $.ajax({
        url: "http://json2jsonp.com/?url=http://mcafee.0x10.info/api/app?type=json",
        dataType: 'jsonp',
        contentType: "text/html; charset=UTF-8",
    }).success(function(data) {
        products = [];
       $(data).each(function() {
           products.push(this);
       });
    }).error(function(data) {
        alert("An Error Occured");
        // @TODO other error handling code
    });
}

