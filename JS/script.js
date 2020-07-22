
function appd(){
  var template = $("#cd0").html();
  var compiled = Handlebars.compile(template);

  var context = {"poster":"posters2", "title":"titles2", "author":"authors2", "year":"years2"}
  var target = $("#cd");
  var html = compiled(context);
  target.append(html);

}

function getApi(){

  $.ajax({
    url : "https://flynn.boolean.careers/exercises/api/array/music",
    method: 'GET',
    success: function(data, state) {
      var success = data['success'];
      var value = data['response'];
      var titles = value.map(anon => anon.title);
      var posters = value.map(anon => anon.poster);
      var authors = value.map(anon => anon.author);
      var genre = value.map(anon => anon.genre);
      var year = value.map(anon => anon.year);



      if (success) {
        console.log(titles, authors);

      } else {
        console.log("Error");
      }

    },
    error: function(request, state, error){
      console.log("error");
    }
  })
}



function init (){
getApi();
appd();
}


$(document).ready(init);
