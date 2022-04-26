function Index() {
    var that = this;

    this.init = function() {
        this.loadJson(this.onContentLoad);
    };

    this.loadJson = function(callback) {
        const paths = window.location.pathname.split('/');

        $.ajax({
            url: `./content.json`,
            type: 'GET',
            complete: function(xhr) {
                if (xhr.status === 200) {
                    data = JSON.parse(xhr.responseText);
                    callback(data);
                }
            }
        });
    };

    this.onContentLoad = function(data) {
        var numSections = Object.keys(data.content).length;

        // Create new nav + gallery
        var nav = new Navigation(numSections);
        var pageNum = nav.currentPage();

        var gallery = new Gallery(data, pageNum);
    };

    this.init();
}

// Global index (used in nav.js)
window.index = new Index();
