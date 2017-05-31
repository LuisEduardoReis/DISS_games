<?php
	session_start();

	$BASE_DIR = '/usr/users2/mieic2012/ei12085/public_html/diss/jogos/adventure';
	$dbh = new PDO('sqlite:'.$BASE_DIR.'/data.db');
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
	$log_stmt = $dbh->prepare('INSERT INTO data (data, ip, referer, user_agent) VALUES (?,?,?,?)');
	
	function commit_data($data) {	
		global $log_stmt;

		$_ip = 			$_SERVER['REMOTE_ADDR'];
		$_referer = 	isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : NULL;
		$_user_agent = 	isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : NULL;
		$log_stmt->execute(array($data, $_ip, $_referer, $_user_agent));
	}
	
	function trunc($string, $len=10) {
		return (strlen($string) > $len+3) ? substr($string,0,$len).'...' : $string;
	}
?>
