// create the head titles for articles table ...
$('#articles').append('<thead id="articles-table-header"></thead>');
$('#articles-table-header').append('<tr id="articles-table-header-row"></tr>');
let articlesTableHeaderTitles = ["Marque", "Nom", "Prix", "Action"];
let add = "Ajouter";
for (let title in articlesTableHeaderTitles)
{
    $('#articles-table-header-row').append('<th>'+articlesTableHeaderTitles[title]+'</th>');
}
// now get data via ajax to create the body articles table ...
$('#articles').append('<tbody id="articles-table-body"></tbody>');

$.ajax({
    url: 'articles.php',
    type: 'GET',
    dataType: 'json',
    statusCode: {
        404: f_404,
        501: f_501
    },
    success: ajax_success,
    error: ajax_error,
    timeout: 2000
});
// create the order table body by clicking on add button ...
$('#commande thead').after('<tbody id="order-table-body"></tbody>');
function ajax_success(data) {
    $.each(data, function (article, key) {
        $('#articles-table-body').append('<tr id="body-row-'+article+'"></tr>');
        $.each(key, function (title, cle) {
            $('#body-row-'+article).append('<td>'+cle+'</td>');
        });
        $('#body-row-'+article).append('<button id="add'+article+'">'+add+'</button>');
        $('#order-table-body').append('<tr id="order-table-body-row-'+article+'"></tr>');
        let orderTableBodyRow = $('#order-table-body-row-'+article);
        $('#add'+article).on('click', function (e) {
            let clickContent = $(e.currentTarget).closest('tr').html();
            orderTableBodyRow.append(clickContent);
            orderTableBodyRow.append('<td colspan="3" id="counter"><button id="plus">+</button><button id="less">-</button>'+
                                     '<label id="amount">0</label></td><td id="subtotal">0</td>');
        $('#counter').on('click', function (e) {
                if (e.target.id === 'plus')
                {
                    let price = $(e.target).parent().prev().text();
                    $('#amount').text(parseInt($('#amount').text())+1);
                    $('#subtotal').text(parseInt($('#subtotal').text())+parseInt(price));
                    $('.total').text(parseInt($('.total').text())+ parseInt(price));
                }
                if (e.target.id === 'less')
                {
                    let price = $(e.target).parent().prev().text();
                    $('#amount').text(parseInt($('#amount').text())-1);
                    $('#subtotal').text(parseInt($('#subtotal').text())-parseInt(price));
                    $('.total').text(parseInt($('.total').text())- parseInt(price));
                }
            });
        }); 
    });
}
function ajax_error() {
    console.log('Ajax Error !');
}
function f_404() {
    $('body').load('404.html');
}
function f_501() {
    console.log("Error 501");
}
