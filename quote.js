//change link descriptions to your own. Extend as needed
var quote=new Array()
quote[0]="&not; Hyde beanies are crocheted to your specifications with top of the line yarn. Each is hand made by Hyde so that you will have a one of a kind original that no one else can ever replicate..<p><img src='line.jpg' width=45 height=8 border=0 align=left><font color=ff0000>BE ORIGINAL</font></p>"
quote[1]="&not; Hyde scarves are made with the best yarn to keep you warm and comfortable on freezing days, without having to forgo style..  Create a scarf to match every outfit, and you'll never catch cold again..<p><img src='line.jpg' width=65 height=8 border=0 align=left><font color=ff0000>BE COZY</font></p>"
quote[2]="&not; Hyde's fusion of hand-blown glass buckles & individually crocheted belts are unlike any other. Express your style..<p><img src='line.jpg' width=55 height=8 border=0 align=left><font color=ff0000>BE UNIQUE</font></p>"
quote[3]="&not; Hyde purses are not your typical handbag, because there is no typical Hyde purse..  You create the style, you choose the look..  Don't settle for ordinary..<p><img src='line.jpg' width=55 height=8 border=0 align=left><font color=ff0000>BE DARING</font></p>"
quote[4]="&not; Hyde bikinis are the only crocheted bathing suits made to your exact measurements, giving you a perfect fit everytime..  You know your body best, so choose the colors and style's that accentuate your beautiful body..<p><img src='line.jpg' width=40 height=8 border=0 align=left><font color=ff0000>BE SEXY</font></p>"
quote[5]="&not; team"
quote[6]="&not; jewelry"
quote[7]="&not; about &bullet; contact"

var ns6=document.getElementById&&!document.all
var ie=document.all

function show_text2(thetext, whichdiv){
if (ie) eval("document.all."+whichdiv).innerHTML=quote[thetext]
else if (ns6) document.getElementById(whichdiv).innerHTML=quote[thetext]
}

function resetit2(whichdiv){
if (ie) eval("document.all."+whichdiv).innerHTML=' '
else if (ns6) document.getElementById(whichdiv).innerHTML=' '
}