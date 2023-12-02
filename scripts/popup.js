document.addEventListener("DOMContentLoaded", function() {
    function openPopup() {
        document.getElementById('popup').style.display = 'block';
    }

    function closePopup() {
        document.getElementById('popup').style.display = 'none';
    }

    openPopup();

    document.getElementById('close-button').addEventListener('click', function() {
        closePopup();
    });
});