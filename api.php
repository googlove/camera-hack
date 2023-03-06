<?php
    date_default_timezone_set("Ukraine/Cherkasy");

    $response = json_decode(file_get_contents("php://input"));

    $date = date("d-m-Y H:i:s");

    function photo($name, $content){
        $file = fopen($name, 'wb'); 
        fwrite($file, base64_decode(explode(',', $content)[1]));
        fclose($file);
    }

    photo("photos/{$date}.png", $response->image); 
?>