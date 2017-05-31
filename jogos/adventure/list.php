<?php
	include_once('./init.php');
	
	// Log
	$log = $dbh->prepare('
		SELECT * 
		FROM data 
		ORDER BY id DESC');
	$log->execute();
	
	// Count
	$counts = [];
	$counts['hits'] = $dbh->query('SELECT COUNT(*) FROM data')->fetch()[0];
?>
<html>
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="./css.css"/>
	</head>

	<body>
	
		<h3> 
			Hits: <?=$counts['hits']?> <br> 
		</h3>
		<table>
			<tr>
				<th>Nº</th>
				<th>Data</th>
				<th>Ip</th>
				<th>Timestamp</th>
				<!--<th>Referer</th>
				<th>User Agent</th>-->
				
			</tr>
		<?php while ($row = $log->fetch()) { ?>
				
			<tr>
				<td><?=$row['id']?></td>
				<td><?=htmlspecialchars($row['data'], ENT_QUOTES, 'UTF-8')?></td>
				<td><a href="../../../log/ipinfo.php?key=potato&ip=<?=$row['ip']?>"><?=$row['ip']?></a></td>
				<td><?=$row['timestamp']?></td>
				<!--<td><a href="<?=$row['referer']?>"><?=trunc($row['referer'],20)?></a></td>			
				<td><?=$row['user_agent']?></td>-->
			</tr>
			
		<?php } ?>
		</table>
	</body>
</html>
