    <?php
    	session_start();

	    $servername = "localhost";
	    $database = "cinema";
	    $user = "root";
	    $password = "";
	    
	    $con = mysqli_connect($servername, $user, $password, $database);
	    
	    if (!$con) {
	        die("Connection failed: " . mysqli_connect_error());
	    }

	    $username = $_POST['username'];
	    $password = $_POST['password'];

	    mysqli_set_charset($con, 'utf8') or die(mysqli_error($con));

	    $resultado = mysqli_query($con, "SELECT * FROM usuarios WHERE username = '$username' AND password = '$password'");

	    if($resultado->num_rows > 0){
	    	$_SESSION['username'] = $username;
			$_SESSION['password'] = $password;
	    	header('Location: ../index.php');
	    }else{
	    	unset ($_SESSION['username']);
  			unset ($_SESSION['password']);
	    	header('Location: ../paginas/login.html');
	    }

	    mysqli_close($con);
    ?>