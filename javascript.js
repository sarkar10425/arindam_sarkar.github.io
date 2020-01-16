var database=[
	{
		username:"arindam_boss",
		password:"security",
	}
];

var newsFeed=[
	{
		username:"Ishita",
		timeline:"I love u Arindam",
	},
	{
		username:"Harsha",
		timeline:"I love u more than Ishita Arindam",
	}
];

var userInfo=prompt("Enter userame");
var passInfo=prompt("Enter password");

function signIn(user,pass){
	if(user===database[0].username && pass===database[0].password){
		console.log(newsFeed);
	}
	else{
		alert("Wrong details entered!!");
	}
}
signIn(userInfo,passInfo);

