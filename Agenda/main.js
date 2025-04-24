function showLoader() {
    document.getElementById('loader').style.display = 'flex';
}
function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function () {
    showLoader(); 
});
window.addEventListener('load', function () {
    hideLoader(); 
});