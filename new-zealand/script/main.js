function Index() {
    var that = this;

    this.init = function() {
        this.loadJson();
    };

    this.loadJson = function() {
        $.ajax({
            url: 'content.json',
            type: 'GET',
            complete: function(xhr) {
                if (xhr.status === 200) {
                    var content = JSON.parse(xhr.responseText);
                    that.onContentLoad(content);
                }
            }
        });
    };

    this.onContentLoad = function(content) {
        var numDays = Object.keys(content).length;

        // Create new nav + gallery
        var nav = new Navigation(numDays);
        var pageNum = nav.currentPage();

        var gallery = new Gallery(content, pageNum);
    };

    this.init();
}

var index = new Index();
