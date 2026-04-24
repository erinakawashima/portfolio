$(function() {
	  $(".show").on("inview", function(event, isInview) {	
			  if (isInview) {                        // 「show」というクラス名が付いている要素が表示領域に入ったとき
					  $(this).addClass("fade-in");			 // 「fade-in」というクラス名を付けます
			  } else {                               // 「show」というクラス名が付いている要素が表示領域を出たとき
					  $(this).removeClass("fade-in");	   // 「fade-in」というクラス名を外します
			  }
	  });
});