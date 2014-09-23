//change link descriptions to your own. Extend as needed
var linktext=new Array()
linktext[0]="&not; beanies"
linktext[1]="&not; scarves"
linktext[2]="&not; belts"
linktext[3]="&not; purses"
linktext[4]="&not; bikinis"
linktext[5]="&not; team"
linktext[6]="&not; jewelry"
linktext[7]="&not; about &bullet; contact"

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