function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function getBase(l) {
	if (l && isNumeric(l) && l >= 0) {
		var b = "../".repeat(l);
	} else {
		var b = "";
	}
	return b;
}

function getHeader(b, p) {
	return "<h1>Online Appendix - Shaping Civility [Blinded for Review]</h1>";
}
				
function getFooter(b, p) {
	return "";
}

document.addEventListener("DOMContentLoaded", function() {
	var b = getBase(window.linkLevel);
	var p = (/^file/.test(window.location.protocol))?"/index.html":"";
	document.getElementById('header').innerHTML = getHeader(b, p);
	document.getElementById('footer').innerHTML = getFooter(b, p);
	/* make links clickable offline */
	if (/^file/.test(window.location.protocol)) {
		var anchors = document.getElementsByTagName('a');
		for (var i = 0; i < anchors.length; i++) {
			if(anchors[i].dataset.role && anchors[i].dataset.role == "internal") {
				anchors[i].href += '/index.html';
			}			
		}
	}
});