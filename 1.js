var a=[],
y=$('#y'),
t1=$('#t'),
s=$('#s'),
btn=$('#btn'),
t='',
l=location.href;

a=$('#x').html().split('*');
function btnA(){btn.attr('href', 'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href)+'&amp;src=sdkpreparse');}
s.click(function(){
var t=t1.val(),
    z='';
if(t){for(var k in a){
  if( a[k].toLowerCase().indexOf(t.toLowerCase())>=0 ){
    var c = a[k].split('`');
    z+='<a target=_blank href=//'+A+c[1]+'>'+c[0]+'</a><br>';
  }
}}
y.html(z);
location.href='#'+t;
btnA();
});
btnA();

var h;
if(l.indexOf('#')>0){
  h= location.href.split('#')[1];
}else if(h=l.match('query=.+&')){
  h=h[0];h=h.substr(6);h=h.substr(0,h.length-1)
}else if(h=l.match('query=.+$')){
  h=h[0];h=h.substr(6);
}
if(h&&h!=''){
  if(h.match(/%[A-Z0-9]/)){
    h=decodeURIComponent(h);
  }
  t1.val(h);s.trigger('click');
}

var $w=$(window),w=false,$hd=$('#hd'),$l=$('#l'),$f=$('#f');
$w.scroll(function(){
 w=true;
});
setInterval(function(){
  if(w){
    var f='removeClass';
  if($w.scrollTop()>390){
    f='addClass';
  }
  $hd[f]('f');
  $l[f]('f');
  $f[f]('f');
  }
},500);
