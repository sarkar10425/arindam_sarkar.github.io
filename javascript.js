var database=[
	{
		username:"arindam_boss",
		password:"security",
	}
];

var newsFeed=[
	{
		username:"Alexa",
		timeline:"I love u Arindam",
	},
	{
		username:"Sirie",
		timeline:"I love u more than Alexa Arindam",
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

