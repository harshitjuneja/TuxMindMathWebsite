document.addEventListener('WebComponentsReady', function () {
    var template = document.querySelector('template[is="dom-bind"]');
    template.page = 0; // selected is an index by default
  });

//Following functions are used to load game using iframe within the <id="gamesPage">
//This is done to make the navigation easy and work like ajax request
//And also to save the new loading time of the page form pressing the back button
var gamesPage;
var toolBarContent;
function gameLoader(number)
{
	var num = number;
	//console.log("onclick function working");
	gamesPage = document.getElementById('GamesPage').innerHTML;
	toolBarContent = document.getElementById('toolBar_content').innerHTML;
	//console.log(gamesPage);
	document.getElementById('drawerPanel').setAttribute("force-narrow", "true");
	//console.log('force-narrow="true"');
	if(num === 1)
	{
	var putContent = '<iframe src="http://tuxmindmathdemo.azurewebsites.net" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading Please wait</iframe> ';
	document.getElementById('GamesPage').innerHTML = putContent;

	var puttoolbarContent = '<paper-toolbar style="background-color:#01579b"><paper-fab onclick="goBack()"  style="background-color:#ffffff; color:#01579b" icon="arrow-back" mini></paper-fab><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><div style="font-family:Georgia;font-style: italic;font-size: 15px">Tux Mind Math</div><iron-icon icon="chevron-right"></iron-icon><div style="font-family:Georgia;font-style: italic;font-size: 15px">Multiplication </div><iron-icon icon="chevron-right"></iron-icon><div style="font-family:Georgia;font-style: italic;font-size: 15px">Multiplication by 50</div><iron-icon icon="chevron-right"></iron-icon><div style="font-family:Georgia;font-style: italic;font-size: 15px">Play</div></paper-toolbar>'
	document.getElementById('toolBar_content').innerHTML = puttoolbarContent;
	}
	
}
function goBack()
{
	//console.log("Go Back clicked");
	document.getElementById('GamesPage').innerHTML = gamesPage;
	document.getElementById('toolBar_content').innerHTML = toolBarContent;
	document.getElementById('drawerPanel').removeAttribute("force-narrow");
}
