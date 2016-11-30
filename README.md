# TextACounter
Count the number of characters in the text area and display it on another element.

# Example
<http://amaraimusi.sakura.ne.jp/TextACounter/example1.html>

# Source code
	<script src="jquery.js"></script>
	<script src="TextACounter.js"></script>
	............ any codes .....
	
	<script>
	$(function(){
		var obj = new TextACounter();
		obj.add("#ta1","#ta1_counter");
		
	});
	</script>
	
	<textarea id="ta1" ></textarea>
	<div id="ta1_counter"></div>

# version 1.0
2016-11-30


