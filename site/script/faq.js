   /**
 * @author Birathepan Tharmakulasingam
 */

    /*
 *  Get a list full of boolean elements
 * its purpose is to make the button hide the answers if open.
 */
    var liste=[];
        for (var i = 0; i < 9; i++) {
            liste.push(true);
        };
    /*
 *  function that shows and hides the answer
 */
        function question1() {
            if (liste[0]==true){
            document.getElementById("questions").innerHTML = "Hvis du ikke får betalt for bøkene er det bare å kontakte oss på support";
            liste[0]=false
            }else{
            document.getElementById("questions").innerHTML = "";
            liste[0]=true;
                    }
            }
            /*
 *  function that shows and hides the answer
 */    
            function question2() {
            if (liste[1]==true){
            document.getElementById("questions2").innerHTML = "Hvis vi mangler noen bøker som dere gjerne ville ha, er det bare å sende melding til oss på support. Vi vil gjøre best mulig for å få tak i bøkene for å fylle kundenes behov";
            liste[1]=false
            }else{
            document.getElementById("questions2").innerHTML = "";
            liste[1]=true;
                    }
            }
    /*
 *  function that shows and hides the answer
 */
            function question3() {
            if (liste[2]==true){
            document.getElementById("questions3").innerHTML = "Mandag-Fredag: 8:00- 18:00, Lørdag:9:00-18:00. Stengt under helligdager ";
            liste[2]=false
            }else{
            document.getElementById("questions3").innerHTML = "";
            liste[2]=true;
                    }
            }
    /*
 *  function that shows and hides the answer
 */
            function question4() {
            if (liste[3]==true){
            document.getElementById("questions4").innerHTML = "Det er dessverre ikke mulig å skaffe eierskap i bedriften enda. Sem(vår CEO) har en emosjonell tilknytning til butikken.";
            liste[3]=false
            }else{
            document.getElementById("questions4").innerHTML = "";
            liste[3]=true;
                    }
            }
    /*
 *  function that shows and hides the answer
 */
            function question5() {
            if (liste[4]==true){
            document.getElementById("questions5").innerHTML = "Under dagene vi har bokkvelder, leser vi litt av noen bøker og gir anmeldelse";
            liste[4]=false
            }else{
            document.getElementById("questions5").innerHTML = "";
            liste[4]=true;
                    }
            }
    /*
 *  function that shows and hides the answer
 */
            function question6() {
            if (liste[5]==true){
            document.getElementById("questions6").innerHTML = "Vi søker ikke ansatte for øyeblikket, men det er mulig vi kommer til å øke bemanningen hvis vi skal utvide lokalet vårt ";
            liste[5]=false
            }else{
            document.getElementById("questions6").innerHTML = "";
            liste[5]=true;
                    }
            }
    /*
 *  function that shows and hides the answer
 */
            function question7() {
            if (liste[6]==true){
            document.getElementById("questions7").innerHTML = "svar";
            liste[6]=false
            }else{
            document.getElementById("questions7").innerHTML = "";
            liste[6]=true;
                    }
            }
    /*
 *  function that shows and hides the answer
 */
            function question8() {
            if (liste[7]==true){
            document.getElementById("questions8").innerHTML = "svar";
            liste[7]=false
            }else{
            document.getElementById("questions8").innerHTML = "";
            liste[7]=true;
                    }
            }
    /*
 *  function that shows and hides the answer
 */
            function question9() {
            if (liste[8]==true){
            document.getElementById("questions9").innerHTML = "svar";
            liste[8]=false
            }else{
            document.getElementById("questions9").innerHTML = "";
            liste[8]=true;
                    }
            }
    /*
 *  function that shows and hides the answer
 */
            function question10() {
            if (liste[9]==true){
            document.getElementById("questions10").innerHTML = " Denne siden er en studentoppgave. <br>-'its not about the money, its about sending a message...to student-assistants";
            liste[9]=false
            }else{
            document.getElementById("questions10").innerHTML = "";
            liste[9]=true;
                    }
            }
