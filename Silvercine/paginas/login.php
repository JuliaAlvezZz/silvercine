<!DOCTYPE html>
<html>
	<head>
		<title>Login</title>
		<meta charset="utf-8"/>
		<link rel="stylesheet" type="text/css" href="../css/estilo_login.css">
	</head>
	<body>
		<div class="logo">
			<a  href="../index.php"><img src="../imagens/logo2.png" alt="logo"></a>
		</div>
		
		<?php	
			session_start();
			if((isset ($_SESSION['username']) == true) and (isset ($_SESSION['password']) == true)){
				$logado = $_SESSION['username'];
			 	header('location:../index.php');
			}
		?>

		<a href="../index.php"><img src="../imagens/voltar1.png" id="voltar"></a>
		<a href="../index.php"><img src="../imagens/voltarhover.png" id="voltarhover"></a>
		<form action="../php/logar.php" method="POST" class="login">
			<legend>Login</legend>
				<label for="username">Usuário</label><br><br>
				<input type="text" name="username" id="username" placeholder="usuario123" required="true"><br><br>
				<label for="password">Senha</label><br><br>
				<input type="password" name="password" id="password" placeholder="1234s3nh4" required="true"><br><br>
				<button type='submit' style="font-size: 20px">Entrar</button>
		</form>
	</body>
</html>