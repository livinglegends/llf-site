var numArticles = 3;

$(document).ready(function(){

$(function() {

    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Fwww.allaccess.com%2Ffeed%2Fnet-news.rss%22&format=json&diagnostics=true&callback=",
      function(response) {
        // console.log();
        $.each(response.query.results.item, function (i,newsItem) {
            // var AAN_description = newsItem.description.split("...<br/>")[0];
            var AAN_description = newsItem.description;

            // if(AAN_description == newsItem.description){console.log("blerg");};
            $("#AllAccessNews-cont").append('<div class="media-news-item"><a class="pull-left" target="_blank" href="'+newsItem.link+'"><img class="media-object" src="img/ALLACCESSnewsimg.png"  alt="100x100" style="width: 100px; height: 100px;"></a><div class="media-body"><h4 class="media-heading">' + newsItem.title + '</h4><p>' + AAN_description);
            return ( i !== (numArticles -1) );
        });
      });

      $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.feedburner.com%2FRadiofacts%3Fformat%3Dxml%22&format=json&diagnostics=true&callback=",
        function(response) {
          $.each(response.query.results.item, function (i,newsItem) {
              var RF_description = newsItem.description.split("...<br/>")[0];
              $("#RadioFacts-cont").append('<div class="media-news-item"><a class="pull-left" target="_blank" href="'+newsItem.link+'"><img class="media-object" src="img/radiofacts.jpg"  alt="100x100" style="width: 100px; height: 100px;"></a><div class="media-body"><h4 class="media-heading">' + newsItem.title + '</h4><p>' + RF_description + '... <a target="_blank" href="' + newsItem.link + '">more </a></p></div></div>');

              return ( i !== (numArticles -1) );
          });
        });

        /*$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Fwww.billboard.com%2Frss%2Fcharts%2Fhot-100%3Fformat%3Dxml%22&format=json&diagnostics=true&callback=",
          function(response) {
            $.each(response.query.results.item, function (i,newsItem) {
                var RF_description = newsItem.description.split("...<br/>")[0];
                $("#Billboard-cont").append('<div class="media-news-item"><a class="pull-left" target="_blank" href="'+newsItem.link+'"><img class="media-object" src="img/billboard.jpg"  alt="100x100" style="width: 100px; height: 100px;"></a><div class="media-body"><h4 class="media-heading">' + newsItem.title + '</h4><p>' + RF_description + '... <a target="_blank" href="' + newsItem.link + '">more </a></p></div></div>');

                return ( i !== (numArticles -1) );
            });
          });*/

        // $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Fwww.allaccess.com%2Ffeed%2Fnet-news.rss%22&format=json&diagnostics=true&callback=",
        //   function(response) {
        //     // console.log();
        //     $.each(response.query.results.item, function (i,newsItem) {
        //         $("#Billboard-cont").append('<div class="media"><a class="pull-left" href="#"><img class="media-object" src="http://placehold.it/100x100/444/fff&text=image"  alt="100x100" style="width: 100px; height: 100px;"></a><div class="media-body"><h4 class="media-heading">' + newsItem.title + '</h4><p>' + newsItem.description + '</p></div></div>');
        //         return ( i !== (numArticles -1) );
        //     });
        //   });
        //



});

});
