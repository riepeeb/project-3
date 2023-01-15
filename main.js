(function () {
    
    var bv = new Bideo();
    bv.init({
        //Video Elements
        videoB1: document.querySelector('#video_highlight'),
        
        //Container Element
        container: document.querySelector('body'),

        //Resize
        resize: true,

        //autoplay: false

        isMobile: window.matchMedia('(max-width: 768px)').matches,

        playButton: document.querySelector('#play'),
        pauseButton: document.querySelector('#pause'),

        //Source of video
        src: [
            {
                src: 'project3.mp4',
                type: 'video/mp4'
            }
        ]

        //What to do once the video loads
        onLoad: function() {
            document.querySelector('#video_cover').style.display = 'none';
        }
    });
}());
