$(function(){
  
      var $panel = $('.panel-group');
      var $result = $('.result');
      $('.wiki-search').on('click', function(e){
         e.preventDefault();
         $panel.html("");
         var searchTerm = $('#search-item').val();
         var count = 1;
  
         $.ajax({
  
             url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchTerm+'&format=json&callback=?',
             type: 'GET',
             dataType: 'jsonp',
             contentType: 'application/json; charset=utf-8',
             async: false,
  
             success: function(data){
              
              for(var i = 0; i < data[1].length; i++){
  
                  if(i==0) {
                      $panel.append("<div class='panel panel-default'><div class='panel-heading'><h4 class='panel-title'>\
                          <a data-toggle='collapse' data-parent='#accordion' href='#accordion-"+count+"'>"+data[1][i]+"</a>\
                          </h4>\
                          </div>\
                          <div id='accordion-"+count+"' class='panel-collapse collapse-in'>\
                          <div class='panel-body'>"+data[2][i]+"<p><a href='"+data[3][i]+"'target='_blank'>Read More</a></p>\
                          </div>\
                          </div>\
                          </div>");
                  }
  
                  else {
                     $panel.append("<div class='panel panel-default'><div class='panel-heading'><h4 class='panel-title'>\
                      <a data-toggle='collapse' data-parent='#accordion' href='#accordion-"+count+"'>"+data[1][i]+"</a>\
                      </h4>\
                      </div>\
                      <div id='accordion-"+count+"' class='panel-collapse collapse'>\
                      <div class='panel-body'>"+data[2][i]+"<p><a href='"+data[3][i]+"'target='_blank'>Read More</a></p>\
                      </div>\
                      </div>\
                      </div>");
                 }
                 
                 
                 count++;                              
             }
         }
  
     })
      })
    })
  

  
  
  
  