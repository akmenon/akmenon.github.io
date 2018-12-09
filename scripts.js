var hidden = {};

hidden['bio_div']          = 0;
hidden['interests_div']    = 0;
hidden['software_div']     = 0;
hidden['publications_div'] = 0;
hidden['other_div']        = 1;

function showDiv(id) {
	var div    = document.getElementById(id);
	div.style.display = 'block';
}

function hideDiv(id) {
	var div    = document.getElementById(id);
	div.style.display = 'none';
}

function hidePlusMinusDiv(id) {
	var div    = document.getElementById(id);
	var anchor = document.getElementById(id.split("_")[0] + "_anchor");

	if (hidden[id]) {
		hidden[id]        = 0;
		div.style.display = 'block';
		anchor.innerHTML  = '<small>[-]</small>';
	}

	else {
		hidden[id]        = 1;
		div.style.display = 'none';		
		anchor.innerHTML  = '<small>[+]</small>';
	}
}
