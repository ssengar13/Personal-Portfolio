<?php
$conn = mysqli_connect("localhost", "spectrum_super", "Ywynbw2z2!@123", "spectrum_arun_blog");
$getMediaImage = mysqli_fetch_assoc(mysqli_query($conn, "SELECT guid FROM wp_posts WHERE id='" . addslashes($_GET['id']) . "'"));
mysqli_close($conn);
// echo $getMediaImage['guid'];
// header('Content-type: image/jpeg');
// echo file_get_contents($getMediaImage['guid']);
$recordingPath = str_replace("https://arunkrishna.in/blog/", "", $getMediaImage['guid']);  // Replace with your image URL

$quoted = sprintf('"%s"', addcslashes(basename($recordingPath), '"\\'));
			$size   = filesize($recordingPath);
			header('Content-Description: File Transfer');
			header('Content-Type: image/*');
			header('Content-Disposition: attachment; filename=' . $quoted); 
			header('Content-Transfer-Encoding: binary');
			header('Connection: Keep-Alive');
			header('Expires: 300');
			header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
			header('Pragma: public');
			header('Content-Length: ' . $size);
			ob_clean();
			flush();
			readfile($recordingPath); //Absolute URL
			exit();

?>