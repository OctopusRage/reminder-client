//List of URL
var url = 'https://reminder-engine.herokuapp.com/';
var urlRegister = 'user';
var urlLogin = 'users/sessions';
var urlnavbarTemplate = 'template/navbar.html';
var urlnavbarAccountTemplate = 'template/navbar-account.html';
var urlLoginTemplate = 'template/modal-login.html';
var urlRegisterTemplate = 'template/modal-register.html';
var urlAccountTemplate = 'template/account.html'
var urlProfilTemplate = 'template/profil.html';
var urlTimelineTemplate='template/timeline.html';

$(document).ready(function() {

	//Nilai awal
	$('#navbar').load(urlnavbarTemplate);
	$('#main').load(urlLoginTemplate);

	$(window).on('hashchange', function () {
	    if (window.location.hash == '#Register') {
	    	$('#main').load(urlRegisterTemplate);
		    window.location.hash = 'Register';
	    }else if(window.location.hash == '' || window.location.hash == '#'){
	    	$('#main').load(urlLoginTemplate);
	        window.location.hash = '';
	    }else if (window.location.hash == '#Login'||window.location.hash == '#Home' ||window.location.hash == '#HomeAccount') {
	    	$('#navbar').load(urlnavbarAccountTemplate);
	    	$('#main').load(urlAccountTemplate);
		    window.location.hash = 'Account';
		 }else if (window.location.hash == '#Profil') {
	    	$('#navbar').load(urlnavbarAccountTemplate);
	    	$('#main').load(urlProfilTemplate);
		    window.location.hash = 'Profil';
		 }else if (window.location.hash == '#Timeline') {
	    	$('#navbar').load(urlnavbarAccountTemplate);
	    	$('#main').load(urlTimelineTemplate);
		    window.location.hash = 'Timeline';
		 }
	    document.title = "Reminder " + (window.location.hash).substring(1);
	});
		// $('#btnRegister').click(function(){
	// 	$.ajax{
	// 		url: urlBase +urlRegister,
	// 	    dataType: 'json',
	// 	    type: 'POST',
	// 	    contentType:'application/json',
	// 	    data:JSON.stringify({ 
	// 	    	'user[name]' : $('#edtName').val(), 
	// 	    	'user[password]' : $('#edtPassword').val(),
	// 	    	'user[password_confirmation]': $('#edtPasswordConfirm').val(),
	// 	    	'user[email]' : $('#edtEmail').val()		    	
	// 	    }),
	// 	    processData: false,
	// 	    success: function( data, textStatus, jQxhr ){
	// 	         alert( JSON.stringify( data ));
	// 	    },
	// 	    error: function( jqXhr, textStatus, errorThrown ){
	// 	        console.log( errorThrown );
	// 	    }
	// 	}
	// 	alert('Ini alert btnRegister');
	// });

	// $('#btnLogin').click(function(){
	// 	$.ajax{
	// 		url: urlBase +urlLogin,
	// 	    dataType: 'json',
	// 	    type: 'POST',
	// 	    contentType:'application/json',
	// 	    data:JSON.stringify({ 
	// 	    	'email': $('#edtNameLogin').val(), 
	// 	    	'password' : $('#edtPasswordLogin').val()    	
	// 	    }),
	// 	    processData: false,
	// 	    success: function( data, textStatus, jQxhr ){
	// 	        alert( JSON.stringify( data ) );
	// 	    },
	// 	    error: function( jqXhr, textStatus, errorThrown ){
	// 	        console.log( errorThrown );
	// 	    }
	// 	}
	// 	alert('Ini alert btnRegister');
	// });
});