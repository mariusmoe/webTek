var faqId = [1,2,3,4,5,6,7,8,9,10],
var answers = ['Hvis du ikke får betalt for bøkene er det bare å kontakte oss på support',
               'Hvis vi mangler noen bøker som dere gjerne ville ha, er det bare å sende melding til oss på support. Vi vil gjøre best mulig for å få tak i bøkene for å fylle kundenes behov',
               'Mandag-Fredag: 8:00- 18:00, Lørdag:9:00-18:00. Stengt under helligdager',
               'Det er dessverre ikke mulig å skaffe eierskap i bedriften enda. Sem(vår CEO) har en emosjonell tilknytning til butikken.',
               'Under dagene vi har bokkvelder, leser vi litt av noen bøker og gir anmeldelse',
               'Vi søker ikke ansatte for øyeblikket, men det er mulig vi kommer til å øke bemanningen hvis vi skal utvide lokalet vårt',
               'svar',
               'svar',
               'svar'
               'Denne siden er en studentoppgave. Its not about the money, its about sending a message...to student-assistants'
              ]
;
console.log('Running js')
faqId.addEventListener('click',function(){
   question(id);
})
		function question(id) {
            console.log(id);
            document.getElementById(id)

            /*if (liste[0]==true){
            document.getElementById("questions").innerHTML = "Hvis du ikke får betalt for bøkene er det bare å kontakte oss på support";
            liste[0]=false
            }else{
            document.getElementById("questions").innerHTML = "";
            liste[0]=true;
                    }*/
            }