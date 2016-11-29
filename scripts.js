$(document).ready(function(){
	
	$('#btnStart').click(function(){

	});

	$('#btnStop').click(function(){

	});

	function updateTimer(){
		var seconds = parseInt($('#timer').val());
		seconds = seconds -1;
		if (secs < 0) { //timer is over

		}
		else {
			$('#timer').val(seconds);
		}
	}
});

function modify_qty(val, id) {
    var qty = document.getElementById(id).value;
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }   
    document.getElementById(id).value = new_qty;
    return new_qty;
}