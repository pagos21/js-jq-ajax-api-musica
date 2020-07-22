


function getApi(){

  $.ajax({
    url : "https://flynn.boolean.careers/exercises/api/array/music",
    method: 'GET',
    success: function(data, state) {
      var success = data['success'];
      var value = data['response'];
      var title = value['title'];
      // var poster = data[response.poster];
      // var title = data[response.title];

      if (success) {
        console.log(title);

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
