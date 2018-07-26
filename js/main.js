/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
	$('#mySidenav').css('width', '250px');
    $('#main').css('margin-left', '250px');
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    $('#mySidenav').css('width', '0');
    $('#main').css('margin-left', '0');
}

function topDownNav() {
	$('#myTopNav').css('height', '250px');
	$('#main').css('margin-top', '250px');
}

function closeTopDownNav() {
	$('#myTopNav').css('height', '0');
	$('#main').css('margin-top', '0');
}