function Navigation(numPages) {
    this.numPages = numPages;

    this.init = function() {
        this.pages = [];

        for (var i = 0; i < this.numPages; i++) {
            var number = i + 1;
            this.pages.push(number);

            var pageLabel = $('<a>').html(number);
            pageLabel.attr('href', `#${number}`);
            pageLabel.click(this.changePage);
            $('.navigation').append(pageLabel);
        }
    };

    this.currentPage = function() {
        var pageNum = parseInt(window.location.hash.replace('#', ''));
        if (this.pages.indexOf(pageNum) === -1) {
            pageNum = 1;
        }
        return pageNum;
    };

    this.changePage = function(event) {
        var pageNum = parseInt(event.target.innerHTML);

        index.loadJson((data) => {
            new Gallery(data, pageNum);
        });
    };

    this.init();
}
