
// list of element

let myLuckyFriend = ["Sumit", "Paresh",
	"Mohan", "Lakhiram","Anita","Sanjali"];

function randomFriend() {    //function 
	console.log(myLuckyFriend[(Math.floor(Math.random() * myLuckyFriend.length))]);
}
randomFriend()  //calling the function 
