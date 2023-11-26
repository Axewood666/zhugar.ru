<?php       
    $content=file_get_contents('russian_cities.txt');
    $a=explode("\n", $content);

    $q=$_GET['q'];

    $hint="";

    if($q != ""){
            
            $q=mb_strtolower($q);
            $len = strlen($q);
            $count=0;
            foreach($a as $name){
                    $name_low=mb_strtolower($name);
                    if(stristr($q, substr($name_low,0,$len))){

                            $count++;
                            $hint .="<br/>$name";
                            
                    }                        

                    if($count>5){
                            $hint.="<br/>еще...";
                            break;
                    }
            }
            
    }

    echo $hint =="" ? "<br/>нет вариантов" : $hint;
?>