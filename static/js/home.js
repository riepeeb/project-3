//adding Bideo file
(function () {

    var bv = new Bideo();
    bv.init({
        //video element
        videoB1: document.querySelector('home_video'),

        //container element
        container: document.querySelector('body'),

        //Resize?
        resize: true;

        isMobile: window.matchMedia('(max-width: 500px)').matches,
        
        //naming source
        src: [
            {
                src: 'Project3.mp4',
                type: 'video/mp4'
            },
        ],
        //Telling video what to do once the video loads
        onload: function () {
            document.querySelector('#video_cover').style.display = 'none';
        }
    });
});