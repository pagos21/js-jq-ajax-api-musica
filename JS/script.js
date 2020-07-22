
function appd(){
  var template = $("#cd0").html();
  var compiled = Handlebars.compile(template);

  var context = {"poster":"posters2", "title":"titles2", "author":"authors2", "year":"years2"}
  var target = $("#cds-container");
  var html = compiled(context);
  target.append(html);

}

function genere(){
  var valore= $("#slt").val();
  console.log(valore);
}

function getApi(){

  $.ajax({
    url : "https://flynn.boolean.careers/exercises/api/array/music",
    method: 'GET',
    success: function(data, state) { //Al termine della connessione al server (success)
      var success = data['success'];
      var value = data['response'];
      // var titles = value.map(anon => anon.title);
      // var posters = value.map(anon => anon.poster);
      // var authors = value.map(anon => anon.author);
      // var genre = value.map(anon => anon.genre);
      // var year = value.map(anon => anon.year);
      if (success) {
        // Handlebars
        var template = $("#template").html();
        var compiled = Handlebars.compile(template);
        var target = $(".cds-container");

        for (var i = 0; i < value.length; i++) {
          console.log(value[i]);
          var context = compiled(value[i]);
          target.append(context);
        }

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
}


$(document).ready(init);
