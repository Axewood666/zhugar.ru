phpexamples.php
    <!DOCTYPE html>
    <html lang="en">
       
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link href="css/style.css" rel="stylesheet" type="text/css">
        <script type="text/javascript"> 
        let generateNumber = (max, min) => Math.floor(Math.random()*(max-min))+1;

        let sumTwoNumbers = (n1, n2) => n1+n2;

        let setElement = (id, val)=> document.getElementById(id).innerHTML=val;
        </script>

        <title>Document</title>
    </head>

        <body>
        <div id="page">
            
            <div id="header">
                <h1> Жугар Игорь Константинович (веб-разработчик) </h1>
            </div>   
        

            <div id="main">
                <div id="menu">
                    <h3>
                        <p> <a href="index.html">Главная</a></p>
                        <p> <a href="jsexamples.html">Примеры JS</a></p>
                        <p> <a href="colorcalcform.html">Форма цвета</a></p>                    
                        <p> <a href="phpexamples.php">Примеры PHP</a></p>
                        <p> <a href="calcform.php">Калькулятор PHP</a></p>
                        <p> <a href="uploadFileForm.php">Загрузка файла PHP</a></p>
                        <p> <a href="registrationForm.html">Форма регистрации</a></p>                    
                        <p> <a href="weather.html">Погода в городе</a></p>
                        <p> <a href="chatnodejs.html">NodeJs Web Chat</a></p>
                        <p> <a href="bootstrap.html">Bootstrap</a></p>
                        <p> <a href="restclient.html">REST Api client</a></p>
                    </h3>
                </div>

                <div id="content">
                <h3> Примеры скриптов на PHP:</h3>

                <?php                  
                    include 'libphp/phpfunctions.php';
                    $num1 = mt_rand(1, 1000);
                    $num2 = mt_rand(1, 1000);
                    $res = $num1+$num2;
                    echo "<h3 style='text-align: left;' > 1) сумма чисел $num1 + $num2 = $res</h3>";
                    
                    $len=mt_rand(2, 10);
                    $pass=generateString($len);
                    echo "<h3 style='text-align: left;' > 2) Сгенерированный пароль строка (длина $len):  $pass</h3>";
                ?>

                <h3 style="text-align: left;">3) сумма двух чисел (JS)
                <span id="num1">num1</span>           и
                <span id="num2">num2</span>:
                <span id="sum_result">sum_result</span>
                </h3>

                <?php
                echo '<script type="text/javascript">
                let n1 = setElement("num1", generateNumber(1000,1));
                let n2 = setElement("num2", generateNumber(1000,1));
                setElement("sum_result", sumTwoNumbers(n1, n2));
                </script>';
                $num = mt_rand(1, 1000);
                $arr = devisors($num);
                echo "<h3 style='text-align: left;'>4) Число $num имеет делители: ";
                echo implode(", ", $arr);
                ?>

                </div>
            </div>
            
            <div id="projects">
                    <h2>Примеры выполненных мною проектов </h2>
            </div>
            
            <div class="block"><div class="blockfont"><b>Проект 1</b></div><img src="images/1.jpg">
            </div>
            <div class="block"><div class="blockfont"><b>Проект 2</b></div><img src="images/2.jpeg">
            </div>
            <div class="block"><div class="blockfont"><b>Проект 3</b></div><img src="images/3.jpg">
            </div>
        
        </div>  

    </body>

    </html>