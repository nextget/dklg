
let sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);

let slider= document.querySelectorAll('.slider');
M.Slider.init(slider,{
	indicators : false,
	height : 450,
	duration : 600,
	interval : 2500
});

let paralax = document.querySelectorAll('.parallax');
M.Parallax.init(paralax);

let mBox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mBox);

let modal = document.querySelectorAll('.modal');
M.Modal.init(modal,{
	preventScrolling : false
});

let scrol = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrol,{
	scrollOffset : 60
});