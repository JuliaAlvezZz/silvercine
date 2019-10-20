<?php
	require_once('config.php');
	require_once('connection.php');
	require_once('database.php');

	$pesquisa = $_GET['pesquisa'];

	$query = "SELECT * FROM filmes WHERE titulo LIKE '%".$pesquisa."%'";

	$result = DBExecute($query);

	$row = mysqli_fetch_array($result);

	$link = '../paginas/'.$row['link'];

	header("location:$link");

?>