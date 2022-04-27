function Gallery(data, pageNum) {
    var that = this;
    const dirPath = data.meta.dirPath;

    this.init = function() {
        $('.content').empty();

        const content = data.content;
        const sections = Object.keys(content);
        const numSections = data.meta.perPage;

        for (var i = 0; i < numSections; i++) {
            var n = i + (numSections * (pageNum - 1));
            this.buildSection(sections[n], content[sections[n]]);
        }
    };

    this.buildSection = function(section, content) {
        if (!content) return;

        var container = $('<div>').addClass('day-block');
        var date = $('<div>').addClass('date').html(content.date);
        var title = $('<h3>').addClass('title').html(content.title);
        var description = $('<p>').addClass('description').html(content.description);
        container.append(date).append(title).append(description);

        $('.content').append(container);
        this.buildImages(section, content.images, container);
    };

    this.buildImages = function(section, images, container) {
        for (var i = 0; i < images.length; i++) {
            var files = images[i].files;
            var groupClass = images[i].class;
            var imageGroup = $('<div>').addClass('image-group').addClass(groupClass);

            for (var j = 0; j < files.length; j++) {
                const path = `${dirPath}/${section}/${files[j]}`;
                var img = $('<img>').attr('src', path);
                imageGroup.append(img);
                img.click(that.viewImage);
            }
            var caption = $('<p>').addClass('caption').html(images[i].caption);

            container.append(imageGroup).append(caption);
        }
    }

    this.viewImage = function(event) {
        var overlay = $('.overlay');
        var image = event.target;
        $(image).clone().appendTo(overlay);
        overlay.addClass('active');

        overlay.click(that.closeImage);
    };

    this.closeImage = function() {
        $('.overlay').empty().removeClass('active');
    };

    this.init();
}
