;(function($){
	
	function letra(carac){
		if(carac.charCodeAt(0)>=65 && carac.charCodeAt(0)<=90 || carac.charCodeAt(0)>=97 && carac.charCodeAt(0)<=122)
		{
			return true;
		}
		return false;
	}
	function numero(carac){
		
		if(carac.charCodeAt(0)>=48 && carac.charCodeAt(0)<=57){
			return true;
		
		}
		return false;
	}
	function especial(carac){
		if(carac.charCodeAt(0)>=33 && carac.charCodeAt(0)<=47 || carac.charCodeAt(0)>=58 && carac.charCodeAt(0)<=64 ){
			return true;
		}
		return false;
	}
	
$.fn.verificar = function($campo,$status){
$campo.keydown(function (){	
		var tam = $campo.val().length;
		var tipo = 0;
		var normal=false, num=false, esp=false;
		for(var i=0;i<tam-1;i++){
			var carac = $campo.val().charAt(i);
			if(letra(carac)==true){
				normal=true;
			}
			if(numero(carac)==true){
				num=true;
			}
			if(especial(carac)==true){
				esp=true;
			}
		}
	
		if(tam<8 && normal){
			$status.removeClass();
			$status.text("Muito fraca").addClass("alert alert-danger");
		}
		if(tam<8 && normal && num){
			$status.removeClass();
			$status.text("Fraca").addClass("alert alert-danger");
		}
		if(tam>=8 && normal && num){
			$status.removeClass();
			$status.text("Moderada").addClass("alert alert-warning");
		}
		if(tam>=8 && normal && num && esp){
			$status.removeClass();
			$status.text("Forte").addClass("alert alert-success");
		}
});
}
})(jQuery);