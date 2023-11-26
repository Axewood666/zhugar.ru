phpfunctions.php
<?php
    function generateString($len=8){

        if($len<4){
            return "ERROR: to small pass, regenerate";
        }

        $chars='qwertyuiopasdfghjklzxcvbnmQWERTYUIOP1234567890';
        $numChars=strlen($chars);
        $str = '';
        for($i = 0; $i < $len; $i++){
            $str .= substr($chars, mt_rand(1,$numChars)-1, 1);
        }
        return $str;
    }

    function devisors($num){
        $divisors = [];
        for ($i=1; $i<=$num**0.5;$i++)
        {
            if ($num % $i == 0)
            {
                $divisors[] = $i;
                if ($num / $i != $i)
                {
                    $divisors[] = $num / $i;
                }
            }
        }
        sort($divisors);

        return $divisors;

    }

    ?>
