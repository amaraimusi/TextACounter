/**
 * TextACounter.js
 * 
 * @note
 * Count the number of characters in the text area and display it on another element.
 * 
 * @version 1.2
 * @date 2016-11-29 | 2016-12-1
 * @auther kenji uehara
 * 
 */
var TextACounter =function(option){

	var myself=this; // Instance of myself.
	
	this.elmsList = [];

	/**
	 * initialized.
	 */
	this.constract=function(){

	};
	

	
	/**
	 * Add textarea element and count display element.
	 * @param ta_slt: Selector for textarea element.
	 * @param display_slt: Selector for count display element.
	 */
	this.add = function(ta_slt,display_slt){
		
		var ta = $(ta_slt);
		var disp = $(display_slt);
		
		var str = ta.val();
		var len = str.length;
		
		notified(ta,disp);

		ta.keyup(function(e){
			notified(ta,disp);
		});
		
		var elms = {
				'ta':ta,
				'disp':disp,
		};
		
		this.elmsList.push(elms)
		
	};
	
	
	/**
	 * Refresh the then count display elements.
	 * 
	 * @note 
	 * When the text area is rewritten by another program.<br>
	 * In this case, the "refresh" function.
	 */
	this.refresh = function(){
		for(var i in this.elmsList){
			var elms = this.elmsList[i];
			
			notified(elms.ta,elms.disp);
		}
	};
	
	/**
	 * Notified to the count display element.
	 * @param ta: textarea element.
	 * @param disp: count display element.
	 */
	function notified(ta,disp){
		var str = ta.val();
		var len = str.length;
		
		var maxlength = ta.attr('maxlength');
		if(!maxlength){
			disp.html(len); 
		}else{
			var class_attr = 'text-success';
			if(len > maxlength){
				class_attr = 'text-danger';
			}
			var msg = "<span class='" + class_attr + "'>" + len + ' / ' + maxlength + "</span>";
			disp.html(msg); 
		}
	}

	
	
	
	// call constractor method.
	this.constract();
};
	