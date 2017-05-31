<?php
	include_once('./init.php');
	if (isset($_GET['data'])) commit_data(substr($_GET['data'], 0, 1000));
?>
