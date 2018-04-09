console.log('Loading a web page');
var page = require('webpage').create();
var url = 'https://rsyehann.github.io/Trackster/';

// page.settings.userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Mobile Safari/537.36';

page.viewportSize = {
    width: 320,
    height: 480
};

page.open(url, function (status) {
    page.render('Trackster.jpeg');
    phantom.exit();
});
