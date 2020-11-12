const fail= "algo fallo"
/////////////CON jquery//////////////////
  $.ajax("https://randomuser.me/api/",{
  method: "GET",
  success: function(data) {
    console.log(data)
  },
  error: function(error){
    console.log(error)
  }
});

/////////////JavaScript Vanilla////////
fetch("https://randomuser.me/api/")
  .then(function(response){
    return response.json()
  })

  .then(function(user){
    console.log("user", user.results[0].name.first)
  })
  .catch(function(){
    console.log(fail)
  }); //Al acabar una promesa hay que poner un ; para evitar problemas
