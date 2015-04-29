(function() {
    $(document).ready(activate);

    function activate() {
        carousel();
    }

    function carousel() {
        $('.carousel').carousel({
            interval: 2000
        });
    }
})();
