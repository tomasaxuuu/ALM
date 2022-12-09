function mili () {
    
    let parametrsXs = document.querySelector('.inputX');
    parametrsXs = parametrsXs.value;
    let s0 = "000", s1 = "001", s2 = "010", s3 = "011", s4 = "100", s5 = "101", y1 = 0, y2 = 0, y3 = 0, y4 = 0, y5 = 0;
    let F1, F2, F3, F4;
    if(parametrsXs.length == 4 && parametrsXs != null) {

        let truthTable =  { // таблица истинности для наших функций
            "0000" : "1001",
            "0001" : "1011",
            "0010" : "1001",
            "0011" : "1101",
            "0100" : "1001",
            "0101" : "1001",
            "0110" : "1000",
            "0111" : "1011",
            "1000" : "0000",
            "1001" : "0100",
            "1010" : "0010",
            "1011" : "1001",
            "1100" : "0101",
            "1101" : "0101",
            "1110" : "0000",
            "1111" : "1111",
        };

        let functions = truthTable[parametrsXs].split("");

        F1 = +functions[0];
        F2 = +functions[1];
        F3 = +functions[2];
        F4 = +functions[3];

        document.querySelector('.fun1').innerHTML = "FUNCTIONS:<br><br>F1: " + F1;
        document.querySelector('.fun2').innerHTML = "F2: " + F2;
        document.querySelector('.fun3').innerHTML = "F3: " + F3;
        document.querySelector('.fun4').innerHTML = "F4: " + F4;
        switch (F1) {
            case 1:
                document.querySelector('.s0').innerHTML = "States:<br><br>s0: " + s0;
                document.querySelector('.y0').innerHTML = "y1: " + y1 + ", y2: " + y2 + ", y3: " + y3 + ", y4: " + y4 + ", y5: " + y5 + "<br><br>";
                setTimeout(function(){ alert("Программа зациклилась!!!"); }, 1000);
                setTimeout(function(){ location.reload(); }, 3000);
            break;
            case 0:
                document.querySelector('.s0').innerHTML = "Early States:<br><br>s0: " + s0;
                document.querySelector('.y0').innerHTML = "y1: " + y1 + ", y2: " + y2 + ", y3: " + y3 + ", y4: " + y4 + ", y5: " + y5 + "<br><br>";
                setTimeout(function(){  
                    y1 = 1;
                    y3 = y5 = y1;
                    document.querySelector('.s1').innerHTML = "States:<br><br>s1: " + s1;
                    document.querySelector('.y1').innerHTML = "y1: " + y1 + ", y2: " + y2 + ", y3: " + y3 + ", y4: " + y4 + ", y5: " + y5 + "<br><br>"; 
                }, 1000);
                setTimeout(function(){  
                    y2 = y3;
                    y1 = 0;
                    y4 = y5 = y1;
                    document.querySelector('.s2').innerHTML = "States:<br><br>s2: " + s2;
                    document.querySelector('.y2').innerHTML = "y1: " + y1 + ", y2: " + y2 + ", y3: " + y3 + ", y4: " + y4 + ", y5: " + y5 + "<br><br>"; 
                }, 2000);
                switch(F2) {
                    case 1:
                        setTimeout(function(){
                            y1 = 0, y3 = y5 = y1;
                            y2 = y4 = 1;
                            document.querySelector('.s3').innerHTML = "States:<br><br>s3: " + s3;
                            document.querySelector('.y3').innerHTML = "y1: " + y1 + ", y2: " + y2 + ", y3: " + y3 + ", y4: " + y4 + ", y5: " + y5 + "<br><br>";
                            document.querySelector('.s4').innerHTML = "States:<br><br>s4: " + s4;
                            y3 = 1, y5 = y3;
                            y2 = y4 = y1;
                            document.querySelector('.y4').innerHTML = "y1: " + y1 + ", y2: " + y2 + ", y3: " + y3 + ", y4: " + y4 + ", y5: " + y5 + "<br><br>";
                            document.querySelector('.s5').innerHTML = "States:<br><br>s5: " + s5;
                            y3 = 1;
                            y1 = 0;
                            y2 = y4 = y3;
                            y5 = y1;
                            document.querySelector('.y5').innerHTML = "y1: " + y1 + ", y2: " + y2 + ", y3: " + y3 + ", y4: " + y4 + ", y5: " + y5 + "<br><br>";
                        }, 3000);
                        setTimeout(function(){ 
                            y1 = 0;
                            y2 = y3 = y4 = y5 = y1; 
                            if(F1 == 0) {
                                document.querySelector('.s6').innerHTML = "States:<br><br>s2: " + s2;
                                document.querySelector('.y6').innerHTML = "y1: " + y1 + ", y2: " + y2 + ", y3: " + y3 + ", y4: " + y4 + ", y5: " + y5 + "<br><br>";
                                setTimeout(function(){
                                    alert("Программа зациклилась!!!");
                                }, 1000);  
                            } else {
                                document.querySelector('.s6').innerHTML = "States:<br><br>s0: " + s0;
                                document.querySelector('.y6').innerHTML = "y1: " + y1 + ", y2: " + y2 + ", y3: " + y3 + ", y4: " + y4 + ", y5: " + y5 + "<br><br>";
                                setTimeout(function(){
                                    alert("Конец программы!");
                                }, 1000);  
                            }
                        }, 4000);
                    break;
                    case 0:
                       switch (F3) {
                            case 0:
                                setTimeout(function(){
                                    y1 = 0, y2 = y3 = y4 = y5 = y1;
                                    document.querySelector('.s3').innerHTML = "States:<br><br>s3: " + s3;
                                    document.querySelector('.y3').innerHTML = "y1: " + y1 + ", y2: " + y2 + ", y3: " + y3 + ", y4: " + y4 + ", y5: " + y5 + "<br><br>";
                                    document.querySelector('.s4').innerHTML = "States:<br><br>s4: " + s4;
                                    y3 = 1, y5 = y3;
                                    document.querySelector('.y4').innerHTML = "y1: " + y1 + ", y2: " + y2 + ", y3: " + y3 + ", y4: " + y4 + ", y5: " + y5 + "<br><br>";
                                    document.querySelector('.s5').innerHTML = "States:<br><br>s5: " + s5;
                                    y3 = 1;
                                    y1 = 0;
                                    y2 = y4 = y3;
                                    y5 = y1;
                                    document.querySelector('.y5').innerHTML = "y1: " + y1 + ", y2: " + y2 + ", y3: " + y3 + ", y4: " + y4 + ", y5: " + y5 + "<br><br>";
                                    
                                }, 5000);
                                setTimeout(function(){  
                                    y1 = 0;
                                    y2 = y3 = y4 = y5 = y1;
                                    if(F1 == 0) {
                                        document.querySelector('.s6').innerHTML = "States:<br><br>s2: " + s2;
                                        document.querySelector('.y6').innerHTML = "y1: " + y1 + ", y2: " + y2 + ", y3: " + y3 + ", y4: " + y4 + ", y5: " + y5 + "<br><br>";
                                        setTimeout(function(){
                                            alert("Программа зациклилась!!!");
                                        }, 1000);  
                                    } else {
                                        document.querySelector('.s6').innerHTML = "States:<br><br>s0: " + s0;
                                        document.querySelector('.y6').innerHTML = "y1: " + y1 + ", y2: " + y2 + ", y3: " + y3 + ", y4: " + y4 + ", y5: " + y5 + "<br><br>";
                                        setTimeout(function(){
                                            alert("Конец программы!");
                                        }, 1000);  
                                    }
                                }, 6000);
                            break;
                            case 1:
                                switch(F4) {
                                    case 0:
                                        setTimeout(function(){
                                            y1 = 0, y2 = y3 = y4 = y5 = y1;
                                            document.querySelector('.s3').innerHTML = "States:<br><br>s3: " + s3;
                                            document.querySelector('.y3').innerHTML = "y1: " + y1 + ", y2: " + y2 + ", y3: " + y3 + ", y4: " + y4 + ", y5: " + y5 + "<br><br>";
                                            document.querySelector('.s4').innerHTML = "States:<br><br>s4: " + s4;
                                            y3 = 1, y5 = y3;
                                            document.querySelector('.y4').innerHTML = "y1: " + y1 + ", y2: " + y2 + ", y3: " + y3 + ", y4: " + y4 + ", y5: " + y5 + "<br><br>";
                                            document.querySelector('.s5').innerHTML = "States:<br><br>s5: " + s5;
                                            y3 = 1;
                                            y1 = 0;
                                            y2 = y4 = y3;
                                            y5 = y1;
                                            document.querySelector('.y5').innerHTML = "y1: " + y1 + ", y2: " + y2 + ", y3: " + y3 + ", y4: " + y4 + ", y5: " + y5 + "<br><br>";
                                        }, 7000);
                                        setTimeout(function(){  
                                            y1 = 0;
                                            y2 = y3 = y4 = y5 = y1;
                                            if(F1 == 0) {
                                                document.querySelector('.s6').innerHTML = "s2: " + s2;
                                                document.querySelector('.y6').innerHTML = "y1: " + y1 + ", y2: " + y2 + ", y3: " + y3 + ", y4: " + y4 + ", y5: " + y5 + "<br><br>";
                                                setTimeout(function(){
                                                    alert("Программа зациклилась!!!");
                                                }, 1000);  
                                            } else {
                                                document.querySelector('.s6').innerHTML = "s0: " + s0;
                                                document.querySelector('.y6').innerHTML = "y1: " + y1 + ", y2: " + y2 + ", y3: " + y3 + ", y4: " + y4 + ", y5: " + y5 + "<br><br>";
                                                setTimeout(function(){
                                                    alert("Конец программы!");
                                                }, 1000);  
                                            }
                                        }, 8000);
                                    break;
                                    case 1:
                                        setTimeout(function(){
                                            document.querySelector('.s3').innerHTML = "States:<br><br>s4: " + s4;
                                            y3 = 1, y5 = y3;
                                            y1 = 0, y2 = y4 = y1;
                                            document.querySelector('.y3').innerHTML = "y1: " + y1 + ", y2: " + y2 + ", y3: " + y3 + ", y4: " + y4 + ", y5: " + y5 + "<br><br>";
                                            document.querySelector('.s4').innerHTML = "States:<br><br>s5: " + s5;
                                            y3 = 1;
                                            y1 = 0;
                                            y2 = y4 = y3;
                                            y5 = y1;
                                            document.querySelector('.y5').innerHTML = "y1: " + y1 + ", y2: " + y2 + ", y3: " + y3 + ", y4: " + y4 + ", y5: " + y5 + "<br><br>";
                                        }, 9000);
                                        setTimeout(function(){  
                                            y1 = 0;
                                            y2 = y3 = y4 = y5 = y1;
                                            if(F1 == 0) {
                                                document.querySelector('.s5').innerHTML = "States:<br><br>s2: " + s2;
                                                document.querySelector('.y5').innerHTML = "y1: " + y1 + ", y2: " + y2 + ", y3: " + y3 + ", y4: " + y4 + ", y5: " + y5 + "<br><br>";
                                                setTimeout(function(){
                                                    alert("Программа зациклилась!!!");
                                                }, 1000);  
                                            } else {
                                                document.querySelector('.s5').innerHTML = "States:<br><br>s0: " + s0;
                                                document.querySelector('.y5').innerHTML = "y1: " + y1 + ", y2: " + y2 + ", y3: " + y3 + ", y4: " + y4 + ", y5: " + y5 + "<br><br>";
                                                setTimeout(function(){
                                                    alert("Конец программы!");
                                                }, 1000);  
                                            }
                                        }, 10000);
                                    break;
                                }
                            break;
                       }
                    break;
                }
            break;
        }
    } else {
        alert("Ошибка при введении значений!");
    }
}