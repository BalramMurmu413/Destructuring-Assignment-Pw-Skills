let  myData = {Name:"Balram",
               Age: 22,
Contact:{Email:"bala4545@gmai.com",
Mobile: "544-546-5754"},
Adress:{
    Street: "Bank More",
    State: "Jharkhand",
  Country:"India"
}}
// console.log(myData)
// nested Object function

function details(data){
  const{
    Name,Age,Contact:{Email,Mobile},Adress: {Street,State},} = data
  return {Name,Mobile,Email,Street,State}
  }

console.log(details(myData))