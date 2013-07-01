//change link descriptions to your own. Extend as needed
var linktext=new Array()
linktext[0]="¬ beanies"
linktext[1]="¬ scarves"
linktext[2]="¬ belts"
linktext[3]="¬ purses"
linktext[4]="¬ bikinis"
linktext[5]="¬ team"
linktext[6]="¬ jewelry"
linktext[7]="¬ about·contact"

var ns6=document.getElementById&&!document.all
var ie=document.all

function show_text(thetext, whichdiv){
if (ie) eval("document.all."+whichdiv).innerHTML=linktext[thetext]
else if (ns6) document.getElementById(whichdiv).innerHTML=linktext[thetext]
}

function resetit(whichdiv){
if (ie) eval("document.all."+whichdiv).innerHTML=' '
else if (ns6) document.getElementById(whichdiv).innerHTML=' '
}