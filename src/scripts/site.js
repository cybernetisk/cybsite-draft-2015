(function() {
    $(document).ready(function() {
        carousel();
        menu();
    });

    function carousel() {
        $('.carousel').carousel({
            interval: 2000
        });
    }

    function menu() {
        $('#menu').slicknav({
            label: '',
            duplicate: false,
            prependTo: '#menu-anchor'
        });
    }
})();
