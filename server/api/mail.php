<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
 
require_once '../libs/PHPMailer/src/Exception.php';
require_once '../libs/PHPMailer/src/PHPMailer.php';
require_once '../libs/PHPMailer/src/SMTP.php';
  
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// $data = file_get_contents('php://input');
$string = file_get_contents("../.env");
$string = str_replace("\r", '', $string);
$arrayRows = explode("\n", $string);

for ($i = 0; $i < sizeof($arrayRows); $i++) {
    $arrayOneRow = explode("=", $arrayRows[$i]);
    $dotENV["$arrayOneRow[0]"] = trim($arrayOneRow[1]);
}

// echo "<br />";
// print_r($dotENV);

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';
 
// Настройки SMTP
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;
 
$mail->Host = "ssl://smtp.mail.ru"; //$dotENV["SMTP_HOST"];
$mail->Port = 465; //$dotENV["SMTP_PORT"];
$mail->Username = "hutoryanin_test@mail.ru"; //$dotENV["SMTP_LOGIN"];
$mail->Password = $dotENV["SMTP_PASS"];
 
// От кого
// $mail->setFrom($dotENV["SMTP_LOGIN"], 'ХуторянинЪ сайт');
$mail->setFrom("hutoryanin_test@mail.ru", "ХуторянинЪ сайт");
 
// Кому
$mail->addAddress("ogneyar@hutoryanin.ru", "Огънеяръ");
 
// Тема письма
$mail->Subject = "Письмо с сайта hutoryanin.ru";
 
// Тело письма
$body = '<p><strong>operacion</strong></p>';
// $body = '<p><strong>operacion = '.$_GET["operacion"].'</strong></p>';
// $body .= '<p><strong>email = '.$_GET["email"].'</strong></p>';
// $body .= '<p><strong>message = '.$_GET["message"].'</strong></p>';
$mail->msgHTML($body);
 
// Приложение
// $mail->addAttachment(__DIR__ . '/image.jpg');
 
if ($_GET["operacion"] && $_GET["operacion"] == $dotENV["OPERACION"]) {    
    if ($_GET["email"] && $_GET["message"]) {
        $mail->send();        
        echo "send";
    }else {
        echo "no email or message";
    }    
}else {
    echo "no operacion";
}


?>
