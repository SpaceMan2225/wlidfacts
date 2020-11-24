<?php
if (isset($_POST['submit'])) {
     $to = "kirat.industries.2@gmail.com";
     $subject = $_POST['email'];
     $message = $_POST['subject'];
     $name = $_POST['fname'];
     $txt = $message.".\n\n".$name;
     mail($to,$subject,$txt,"From: kirat.industries.2@gmail.com");
     echo "Email sent,We will reply shortly :)";
}        
      
?>
                                                                                                            