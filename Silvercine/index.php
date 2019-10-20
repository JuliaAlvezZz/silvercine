<!DOCTYPE html>
<html>
	<head>
		<title>SilverCine</title>
		<link rel="stylesheet" type="text/css" href="css/estilo.css" />
		<link rel="icon" href="imagens/icon.png" type="image/x-icon" />
		<link rel="shortcut icon" href="imagens/icon.png" type="image/x-icon" />
		<meta charset="utf-8">
	</head>
	<body>
		<header id="titulo">
			<a href="index.php"><img id="logo" src="imagens/logo2.png" /></a>
			<nav id="menu">
				<ul>
					<li><a class="active" href="index.php">Início</a></li>
					<li><a href="paginas/cartaz.html">Em cartaz</a></li>
					<li><a href="paginas/salas.html">Salas</a></li>
					<li><a href="paginas/promocoes.html">Promoções</a></li>
					<li><a href="paginas/sobre.html">Sobre</a></li>
					<li style="border: 0;"><a href="paginas/login.html"><img id="usuario" src="imagens/usuario.png"/></a></li>
				</ul>

				<div id="login">
					<h3>Usuário: </h3><input type="text" name="usuario" /><br/>
					<h3>Senha: </h3><input type="password" name="senha" />
					<input id="btn2" type="submit" name="enviar" value="Entrar">
				</div>
			</nav>
		</header>

		<?php
			include('php/popup.php');
		?>

		<section id="um">
			<h1>Em Cartaz</h1>
			
			<div>
				<a href="paginas/filme1.html"><img src="imagens/posters/poster1.jpg" />
				<h2>Vingadores: Ultimato</h2></a>
				<h3>Ação/Aventura</h3>
				<a href="paginas/compra.html"><input type="button" value="Comprar ingresso"  /></a>
			</div>
			<div>
				<a href="paginas/filme2.html"><img src="imagens/posters/poster2.jpg" />
				<h2>Alita: Anjo de Combate</h2></a>
				<h3>Ação/Aventura</h3>
				<a href="paginas/compra.html"><input type="button" value="Comprar ingresso"/></a>
			</div>
			<div>
				<a href="paginas/filme3.html"><img src="imagens/posters/poster3.jpg" />
				<h2>Shazam</h2></a>
				<h3>Ação/Comédia</h3>
				<a href="paginas/compra.html"><input type="button" value="Comprar ingresso" /></a>
			</div>
			<div>
				<a href="paginas/filme4.html"><img src="imagens/posters/poster4.jpg" />
				<h2>Capitã Marvel</h2></a>
				<h3>Ação/Aventura</h3>
				<a href="paginas/compra.html"><input type="button" value="Comprar ingresso" /></a>
			</div>
			<div>
				<a href="paginas/filme5.html"><img src="imagens/posters/poster5.jpg" />
				<h2>Dumbo</h2></a>
				<h3>Aventura/Fantasia</h3>
				<a href="paginas/compra.html"><input type="button" value="Comprar ingresso" /></a>
			</div>
		</section>

		<section id="dois">
			<h1>Lançamentos</h1>
			<div>
				<a href="paginas/filme6.html"><img src="imagens/posters/poster6.jpg" />
				<h2>O Rei Leão</h2></a>
				<h3>Animação/Aventura</h3>
				<a href="paginas/compra.html"><center><input type="button" value="Pré-estreia" /></center></a>
			</div>
			<div>
				<a href="paginas/filme7.html"><img src="imagens/posters/poster7.jpg" />
				<h2>Aladdin</h2></a>
				<h3>Aventura/Comédia</h3>
				<a href="paginas/compra.html"><center><input type="button" value="Pré-estreia" /></center></a>
			</div>
			<div>
				<a href="paginas/filme8.html"><img src="imagens/posters/poster8.jpg" />
				<h2>A Maldição da Chorona</h2></a>
				<h3>Terror/Mistério</h3>
				<a href="paginas/compra.html"><center><input type="button" value="Pré-estreia" /></center></a>
			</div>
			<div>
				<a href="paginas/filme9.html"><img src="imagens/posters/poster9.jpg" />
				<h2>Suspiria: A Dança do Medo</h2></a>
				<h3>Fantasia/Terror</h3>
				<a href="paginas/compra.html"><center><input type="button" value="Pré-estreia" /></center></a>
			</div>
			<div>
				<a href="paginas/filme10.html"><img src="imagens/posters/poster10.jpg" />
				<h2>X-Men: Fênix Negra</h2></a>
				<h3>Ação/Aventura</h3>
				<a href="paginas/compra.html"><center><input type="button" value="Pré-estreia" /></center></a>
			</div>
		</section>

		<section id="tres">
			<h1>Promoção exclusiva!</h1>
			<div>
				<img class="lado1" src="imagens/pipoca2.png">
				<img class="lado2" src="imagens/pipoca3.png">
				<h2 style="color: gold;">Na compra de três ingressos, você ganha o combo:</h2>
				<h2>um balde de pipoca tamanho família + três copos de refrigerante!</h2>
				<h1 style="color: gold;">E tem mais!</h1>
				<h2>Toda segunda, terça e quarta-feira, todos pagam meia entrada!</h2>
				<center><img class="centro" src="imagens/pipoca.png" /></center>

			</div>
		</section>

		<footer id="rodape">
			<div class="redes">
				<a href="https://facebook.com"><img class="cima"  src="imagens/redes/facebook.png" /><img class="baixo" src="imagens/redes/facebookred.png" /><h2>Facebook<br/>/SilverCineOficial</h2></a>
				<a href="https://instagram.com"><img class="cima" src="imagens/redes/instagram.png" /><img class="baixo" src="imagens/redes/instagramred.png" /><h2>Instagram<br/>/SilverCineOficial</h2></a>
				<a href="https://twitter.com"><img class="cima" src="imagens/redes/twitter.png" /><img class="baixo" src="imagens/redes/twitterred.png" /><h2>Twitter<br/>/SilverCineOficial</h2></a>
				<a href="https://youtube.com"><img class="cima" src="imagens/redes/youtube.png" /><img class="baixo" src="imagens/redes/youtubered.png" /><h2>Youtube<br/>/SilverCineOficial</h2></a>
				<hr/>
			</div>
			<div class="logorodape">
				<a href="index.php"><img src="imagens/logo2.png" /></a>
			</div>
			<div class="info">
				<h2>WhatsApp: </h2><h3>(35) 9 9235-4543</h3>
				<h2>Endereço: </h2><h3>Rua do Cinema, 3 - Bairro Santa Clara, Passos/MG</h3>
				<h2>Email: </h2><h3>contato@silvercine.com.br</h3>
				<hr class="vertical" />
			</div>
			<div class="paginas">
				<ul>
					<li><a href="index.php">Início</a></li>
					<li><a href="paginas/cartaz.html">Em cartaz</a></li>
					<li><a href="paginas/salas.html">Salas</a></li>
					<li><a href="paginas/promocoes.html">Promoções</a></li>
					<li><a href="paginas/sobre.html">Sobre</a></li>
				</ul>
				<hr class="vertical" />
			</div>
			<div class="design">
				<h2>Design by <a href="https://scontent.fvag2-1.fna.fbcdn.net/v/t1.0-9/52853994_368987717266957_5280076143360212992_n.jpg?_nc_cat=106&_nc_ht=scontent.fvag2-1.fna&oh=dcf7848adbc58c710e08dc8cfc872f2c&oe=5D5335DB" target="_blank">Flip Floppers</a></h2>
			</div>
		</footer>
	</body>
</html>