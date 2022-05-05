<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require_once 'phpMailer/PHPMailer.php';
    require_once 'phpMailer/Exception.php';
    require_once 'phpMailer/SMTP.php';

    $product = $_POST['product'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['tel'];

    $mail = new PHPMailer(true);
    $mail->CharSet = "UTF-8";
    $mail->isHTML(true);   

   
    //Получатели
    

    $mail->setFrom('shop@example.com', 'Покупатель антисептиков');//от кого письмо
    $mail->addAddress('insanhuman713@gmail.com','Вакилов Рамис');     //Add a recipient
    
        

    //Content
                                   
    $mail->Subject = 'Покупка антисептика';
    $mail->Body    = '<h2>Пришла заявка</h2>'.
                        'Клиент '. $name .' с такими данными: <br>'
                        .$email.' и <br>'.
                        $message.' решил купить у нас данный продкут:<b>'.$product.'</b>!';
                         
    $mail->AltBody = 'Пришла заявка ';

    
    try{
        $mail->send();
        echo 'the mail is send';
        
    }catch(Exception $e){
        echo "Mailer Error: " . $mail->ErrorInfo;
    }
    
 ?>   