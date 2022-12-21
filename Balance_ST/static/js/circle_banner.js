var circle = document.getElementById('central-circle'),
        imgs = document.getElementsByClassName('hero'),
        total = imgs.length,
        coords = {},
        diam, radius1, radius2, imgW;


//imgW = imgs[0].getBoundingClientRect().width,
//radius2 = radius + imgW/2


var i,
    alpha = Math.PI / 2,
    len = imgs.length,
    corner = 2 * Math.PI / total;
for ( i = 0 ; i < total; i++ ){
  diam = parseInt(window.getComputedStyle(circle).getPropertyValue('width') ),
  radius = diam/2,
  imgW = imgs[i].getBoundingClientRect().width,
  radius2 = radius + imgW/2
  imgs[i].style.left = parseInt( ( radius - imgW / 2 ) + ( radius2 * Math.cos( alpha ) ) ) + 'px'
  imgs[i].style.top =  parseInt( ( radius - imgW / 2 ) - ( radius2 * Math.sin( alpha ) ) ) + 'px'
  alpha = alpha - corner;
}