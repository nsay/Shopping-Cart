/*
  Below are functions I've made to attach to the HTML buttons onClick().
*/

function addProduct(){
    window.location.href = '/admin/products/add';
}

function cancelAdd(){
    window.location.href = '/admin/products';
}

function cancelOrder() {
    window.location.href = '/admin/users';
}

function cancelUserAdd() {
    window.location.href = '/';
}

function checkout() {
    window.location.href = 'orders/checkout'
}