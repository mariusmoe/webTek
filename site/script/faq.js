    console.log("hei");
    var liste=[];
        for (var i = 0; i < 9; i++) {
            liste.push(true);
        };

        function question1() {
            if (liste[0]==true){
            document.getElementById("questions").innerHTML = "Hvis du ikke får betalt for bøkene er det bare å kontakte oss på support";
            liste[0]=false
            }else{
            document.getElementById("questions").innerHTML = "";
            liste[0]=true;
                    }
            }
            
            function question2() {
            if (liste[1]==true){
            document.getElementById("questions2").innerHTML = "Hvis vi mangler noen bøker som dere gjerne ville ha, er det bare å sende melding til oss på support. Vi vil gjøre best mulig for å få tak i bøkene for å fylle kundenes behov";
            liste[1]=false
            }else{
            document.getElementById("questions2").innerHTML = "";
            liste[1]=true;
                    }
            }

            function question3() {
            if (liste[2]==true){
            document.getElementById("questions3").innerHTML = "svar";
            liste[2]=false
            }else{
            document.getElementById("questions3").innerHTML = "";
            liste[2]=true;
                    }
            }

            function question4() {
            if (liste[3]==true){
            document.getElementById("questions4").innerHTML = "svar";
            liste[3]=false
            }else{
            document.getElementById("questions4").innerHTML = "";
            liste[3]=true;
                    }
            }

            function question5() {
            if (liste[4]==true){
            document.getElementById("questions5").innerHTML = "svar";
            liste[4]=false
            }else{
            document.getElementById("questions5").innerHTML = "";
            liste[4]=true;
                    }
            }

            function question6() {
            if (liste[5]==true){
            document.getElementById("questions6").innerHTML = "svar";
            liste[5]=false
            }else{
            document.getElementById("questions6").innerHTML = "";
            liste[5]=true;
                    }
            }

            function question7() {
            if (liste[6]==true){
            document.getElementById("questions7").innerHTML = "svar";
            liste[6]=false
            }else{
            document.getElementById("questions7").innerHTML = "";
            liste[6]=true;
                    }
            }

            function question8() {
            if (liste[7]==true){
            document.getElementById("questions8").innerHTML = "svar";
            liste[7]=false
            }else{
            document.getElementById("questions8").innerHTML = "";
            liste[7]=true;
                    }
            }

            function question9() {
            if (liste[8]==true){
            document.getElementById("questions9").innerHTML = "svar";
            liste[8]=false
            }else{
            document.getElementById("questions9").innerHTML = "";
            liste[8]=true;
                    }
            }

            function question10() {
            if (liste[9]==true){
            document.getElementById("questions10").innerHTML = "svar";
            liste[9]=false
            }else{
            document.getElementById("questions10").innerHTML = "";
            liste[9]=true;
                    }
            }
