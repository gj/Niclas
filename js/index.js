
        var videoUrl = 'https://vimeo.com/219603868';
       
        var endpoint = 'http://www.vimeo.com/api/oembed.json';
       
        var callback = 'embedVideo';

        var url = endpoint + '?url=' + encodeURIComponent(videoUrl) + '&callback=' + callback + '&width=640';
       
        function embedVideo(video) {
            document.getElementById('embed').innerHTML = unescape(video.html);
        }
       
        function init() {
            var js = document.createElement('script');
            js.setAttribute('type', 'text/javascript');
            js.setAttribute('src', url);
            document.getElementsByTagName('head').item(0).appendChild(js);
        }
      
        window.onload = init;