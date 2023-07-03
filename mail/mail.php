<?php
    // // echo 'hello world';
    // $method = $_SERVER['REQUEST_METHOD'];
    // if ($method !== 'POST') {
    //     exit();
    // }
    // $to = 'dmitriy.komarov.1998@mail.ru';
    // $project_name = 'PizzaTime';
    // $admin_email = 'dmitriy.komarov.1998@mail.ru';
    // $form_subject = 'Заявка на доставку';
    // // $message = 'HELLO WORLD';
    // $message = '';
    // $color_counter = 1;

    // print_r($_POST);
    // exit();
    // foreach($_POST as $key => $value) {
    //     if ($value === '') {
    //         continue;
    //     }
    //     $color = $color_counter % 2 === 0 ? '#fff' : '#f8f8f8';
    //     $message .=  "
    //         <tr style='background-color: $color;'>
    //             <td style='padding: 10px; border: 1px solid #e9e9e9;'>$key</td>
    //             <td style='padding: 10px; border: 1px solid #e9e9e9;'>$value</td>
    //         </tr>";
    //     $color_counter ++;
    // }

    // $message = "<table style='width: 100%;'>$message</table>";
   
    // $message = '<table style="width: 100%;">
    // <tr style="background-color: #f8f8f8;">
    // <td style="padding: 10px; border: 1px solid #e9e9e9;">Name</td>
    // <td style="padding: 10px; border: 1px solid #e9e9e9;">Value</td>
    // </tr>
    // <tr style="background-color: #f8f8f8;">
    //     <td style="padding: 10px; border: 1px solid #e9e9e9;">Name</td>
    //     <td style="padding: 10px; border: 1px solid #e9e9e9;">Value</td>
    //     </tr>
    // </table>'

    // $headers  = "MIME-Version: 1.0\r\n"; 
    // // $headers .= "Content-type: text/plain; charset=utf-8\r\n";
    // $headers .= "Content-type: text/html; charset=utf-8\r\n";
    // $headers .= "From: $admin_email\r\n";

    
    // $success_send = mail($to, $project_name, $form_subject, $message, $headers);
    // if ($success_send) {
    //     echo "success";
    // } else {
    //     echo 'error';
    // }
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'dmitriy.komarov.1998@mail.ru';
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $body = '';
    foreach($_POST as $key => $value) {
        if ($value === '') {
            continue;
        }
        $color = $color_counter % 2 === 0 ? '#fff' : '#f8f8f8';
        $body .=  "
            <tr style='background-color: $color;'>
                <td style='padding: 10px; border: 1px solid #e9e9e9;'>$key</td>
                <td style='padding: 10px; border: 1px solid #e9e9e9;'>$value</td>
            </tr>";
        $color_counter ++;
    };
   $body = "<table style='width: 100%;'>$body</table>";
   $to_email = "dmitriy.komarov.1998@mail.ru";
   $subject = "Simple Email Test via PHP";
//    $body = "Hi,\n This is test email send by PHP Script";
    // $headers .= "From: $admin_email\r\n";
 
   if ( mail($to_email, $subject, $body, $headers)) {
      echo("Email successfully sent to $to_email...");
   } else {
      echo("Email sending failed...");
   }
    ?>