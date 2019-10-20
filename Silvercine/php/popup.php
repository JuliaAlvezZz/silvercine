<?php

    if($_COOKIE["exibe-pop-up"] != 'não'){

?>

	<div id="popup1" class="overlay">
		<div class="popup">
			<a class="close" href="#popup1">x</a>
			<a href="paginas/promocoes.html"><img src="imagens/promocao.jpg"></a>
		</div>
	</div>
      	
<?php

    setcookie("exibe-pop-up","não",(time() + (300)));

	}

?>