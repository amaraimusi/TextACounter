/**
 * TextACounter.js
 * 
 * @note
 * Count the number of characters in the text area and display it on another element.
 * 
 * @version 1.0
 * @date 2016-11-29
 * @auther kenji uehara
 * 
 */
var TextACounter =function(option){
	
	
	this.option = option;
	
	var myself=this; // Instance of myself.

	/**
	 * initialized.
	 */
	this.constract=function(){
		
		// If Option property is empty, set a value.
		this.option = setOptionIfEmpty(this.option);
		
	};
	
	// If Option property is empty, set a value.
	function setOptionIfEmpty(option){
		
		if(option == undefined){
			option = {};
		}
		
		if(option['flg'] == undefined){
			option['flg'] = 0;
		}
		
		return option;
	};
	
	
	/**
	 * Add textarea element and count display element.
	 * @param ta_slt: Selector for textarea element.
	 * @param display_slt: Selector for count display element.
	 */
	this.add = function(ta_slt,display_slt){
		
		var ta = $(ta_slt);
		var disp = $(display_slt);
		
		ta.keyup(function(e){
			var str = ta.val();
			var len = str.length;
			disp.html(len); 
		});
		
	};

	
	
	
	// call constractor method.
	this.constract();
};
	