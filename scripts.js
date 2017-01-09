$(document).ready(function(){
	var interval;
	var sessionLength = $('#qtySession').val();
	var secsLength = 60 * sessionLength;
	var currentTimeSecs = 0;
	var isBreak = false;


	//Event to start countdown
	$('#btnStart').click(function(){
		$('#pomodoro').removeClass('break');

		var sessionLength = $('#qtySession').val();
		var secsLength = 60 * sessionLength;
		currentTimeSecs = secsLength;

		$('#timer').text(secondsToHms(secsLength));
		interval = setInterval(updateTimer, 1000);


		function updateTimer(){
			if (currentTimeSecs <= 0 && isBreak === false) { //timer is over
				$('#pomodoro').addClass('break');
				isBreak = true;
				currentTimeSecs = 60 * $('#qtyBreak').val();
			}
			else if (currentTimeSecs <= 0 && isBreak === true) {
				clearInterval(interval);
				return;
			}
			currentTimeSecs = currentTimeSecs -1;
			$('#timer').text(secondsToHms(currentTimeSecs));
		}
	});

	//Event to abort countdown
	$('#btnStop').click(function(){
		clearInterval(interval);
	});
	
});

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    return (
      (h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s
    ); 
  }

function modify_qty(val, id) {
    var qty = document.getElementById(id).value;
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }   
    document.getElementById(id).value = new_qty;
    return new_qty;
}