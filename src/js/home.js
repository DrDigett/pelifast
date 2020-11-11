console.log('hola mundo!');

const getUserAll = new Promise(function(todoBien, todoMal){
  setTimeout(function(){
    todoBien("se acabo el tiempoAll");
  }, 5000)
})

const getUser = new Promise(function(todoBien, todoMal){
  setTimeout(function(){
    todoBien("se acabo el tiempo");
  }, 3000)
})
//getUser
//  .then(function() {
//  console.log("todo esta bien")
//})
//  .catch(function(message){
//    console.log(message)
//})

Promise.race([
  getUser,
  getUser,
])

.then(function(message){
  console.log(message)
})
.catch(function(message) {
  console.log(message)
})
///////////////////////////////

$.ajax("https://randomuser.me/api/",{
  method: "GET",
  success: function(data) {
    console.log(data)
  },
  error: function(error){
    console.log(error)
  }
})
