getAllRegisteredUsers.php
<!DOCTYPE html>
    <html lang="en">
       
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link href="css/style.css" rel="stylesheet" type="text/css">
        
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
                <div id="content">
                <?php
                     include ('libphp/pdoConnectDB.php');
                            
                     try {                        
                         $pdo = pdoConnectDB();
                         $sql = "select * from users";
                         $statement=$pdo->query($sql);
                         while($row=$statement->fetch()){
                            echo $row['email'].", ".$row['FirstName'].", ".$row['LastName'].", ".$row['Patronymic'].", ".$row['City']."<br>";
                         }                         

                    } catch (PDOException $e){
                            echo "<br>ERROR:Connection to DB FAILED:". $e->getMessage()."<br>";
                    }
                ?>    

            </div>
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