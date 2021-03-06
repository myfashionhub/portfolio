function Navigation(numDays) {
    var that = this;

    this.numDays = numDays;

    this.init = function() {
        this.perPage = 5;
        this.numPages = Math.ceil(this.numDays / this.perPage);
        this.pages = [];

        this.createNav();
    };

    this.createNav = function() {
        for (var i = 0; i < this.numPages; i++) {
            var number = i + 1;
            this.pages.push(number);

            var pageLabel = $('<a>').html(number);
            pageLabel.attr('href', '#' + number);
            pageLabel.click(that.changePage);
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
        var gallery = new Gallery(pageNum);
    };

    this.init();
}
