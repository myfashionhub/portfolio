function Navigation(numPages) {
    this.numPages = numPages;
    this.pages = [];

    this.init = function() {
        this.generatePages();
    };

    this.generatePages = function() {
        // Generate page numbers
        for (let i = 0; i < this.numPages; i++) {
            const pageNum = i + 1;
            this.pages.push(pageNum);

            var pageLabel = $('<a>').html(pageNum);
            pageLabel.attr('href', `#${pageNum}`);
            pageLabel.addClass(`page-${pageNum}`);
            pageLabel.click(this.changePage);
            $('.navigation').append(pageLabel);
        }
    }

    this.currentPage = function() {
        let pageNum = parseInt(window.location.hash.replace('#', ''));
        if (this.pages.indexOf(pageNum) === -1) {
            pageNum = 1;
        }

        $('.navigation .active').removeClass('active');
        $(`.page-${pageNum}`).addClass('active');
        return pageNum;
    };

    this.changePage = function(event) {
        $('.navigation .active').removeClass('active');
        $(event.target).addClass('active');

        const params = new URLSearchParams(window.location.search);
        const dirName = params.get('trip');
        const pageNum = parseInt(event.target.innerHTML);
        index.loadJson((data) => {
            new Gallery(dirName, data, pageNum);
        });
    };

    this.init();
}
