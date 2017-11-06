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
            $('.navigation').append(pageLabel);
        }
    };

    this.init();
}
