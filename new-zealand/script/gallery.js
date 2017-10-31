function Gallery(content) {
    var that = this;
    var numDays = 5; // days per page

    this.init = function() {
        var days = Object.keys(content);
        for (var i = 0; i < numDays; i++) {
            this.buildDay(days[i], content[days[i]]);
        }
    };

    this.buildDay = function(day, content) {
        var container = $('<div>').addClass('day-block');
        var date = $('<div>').addClass('date').html(content.date);
        var title = $('<h3>').addClass('title').html(content.title);
        var description = $('<p>').addClass('description').html(content.description);
        container.append(date).append(title).append(description);

        $('.content').append(container);
        this.buildImages(day, content.images, container);
    };

    this.buildImages = function(day, images, dayContainer) {
        for (var i = 0; i < images.length; i++) {
            var files = images[i].files;
            var groupClass = images[i].class;
            var imageGroup = $('<div>').addClass('image-group').addClass(groupClass);

            for (var j = 0; j < files.length; j++) {
                var src = 'images/' + day + '/' + files[j];
                var img = $('<img>').attr('src', src);
                imageGroup.append(img);
            }
            var caption = $('<p>').addClass('caption').html(images[i].caption);

            dayContainer.append(imageGroup).append(caption);
        }
    }

    this.init();
}
