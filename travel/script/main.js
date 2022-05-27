function Index() {
    const that = this;
    let dirName;

    this.init = function() {
        this.loadJson(this.onContentLoad);
    };

    this.loadJson = function(callback) {
        const params = new URLSearchParams(window.location.search);
        dirName = params.get('trip');

        $.ajax({
            url: `${dirName}/content.json`,
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
        // Create new nav + gallery
        const nav = new Navigation(data.meta.numPages);
        const pageNum = nav.currentPage();

        const { tripName, description } = data.meta;
        $('header .title').html(tripName);
        $('header .description').html(description);

        new Gallery(dirName, data, pageNum);
    };

    this.init();
}

// Global index (used in nav.js)
window.index = new Index();
