// Randomly load an image from the imgs folder.  To add new images, simply add them to the var below.
var images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'bg7.jpg', 'bg8.jpg', 'bg9.jpg', 'bg10.jpg', 'bg11.jpg', 'bg12.jpg', 'bg13.jpg', 'bg14.jpg', 'bg15.jpg', 'bg16.jpg', 'bg17.jpg', 'bg18.jpg', 'bg19.jpg', 'bg20.jpg', 'bg21.jpg', 'bg22.jpg', 'bg23.jpg', 'bg24.jpg', 'bg25.jpg'];
$('html').css({'background-image': 'url(imgs/' + images[Math.floor(Math.random() * images.length)] + ')'});

//no-repeat center center fixed