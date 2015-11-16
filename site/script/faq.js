/**
FILE NAME: scipt/faq.js
WRITTEN BY: Birathepan Tharmakulasingam & Christian Haugland
WHEN: November 2015
PURPOSE:  Get a list full of boolean elements.Hide the answers if open.
*/


        var questionIds = ['questions', 'questions2', 'questions3', 'questions4',
        'questions5', 'questions6', 'questions7', 'questions8', 'questions9', 'questions10'
        ]
        , allQ = [];

        /*
        *Answers  and questions saved in a list
        */
        var faqStatus = [false, false, false, false, false, false, false, false, false, false];
        var svar = [];
        svar.push("Hvis du ikke får betalt for bøkene er det bare å kontakte oss på support");
        svar.push("Hvis vi mangler noen bøker som dere gjerne ville ha, er det bare å sende melding til oss på support. Vi vil gjøre best mulig for å få tak i bøkene for å fylle kundenes behov");
        svar.push("Mandag-Fredag: 10:00- 18:00, Lørdag:10:00-16:00. Stengt under helligdager ");
        svar.push( "Det er dessverre ikke mulig å skaffe eierskap i bedriften enda. Sem(vår CEO) har en emosjonell tilknytning til butikken.");
        svar.push("Under dagene vi har bokkvelder, leser vi litt av noen bøker og gir anmeldelse");
        svar.push("Vi søker ikke ansatte for øyeblikket, men det er mulig vi kommer til å øke bemanningen hvis vi skal utvide lokalet vårt ");
        svar.push("Vi sender dessverre ikke bøker, men du kan gjerne kjøpe/reserve og hente den i butikken.");
        svar.push("Du kan trykke på 'om' (under info i navigasjonsbaren) eller ringe til butikken på: 12345678 (falskt nummer)");
        svar.push("Siden vi er verdens første flytende bokhandel!!!");
        svar.push("Denne siden er en studentoppgave. <br>-'its not about the money, its about sending a message...to student-assistants");

/**This loop gets ids from all buttons. Only runs once.
* Saves in allQ and is used in question(id);
*/
for (var i = 0; i < questionIds.length; i++) {
    (function () {
        try {
            allQ[i] = document.getElementById(questionIds[i]);
        }
        catch (e) {
            console.log(e);
        }
    }())
    }




/**
 *@param id     id with numbers of questions
 *This function writes to the html depending of the status on the button-id
 */
function question(id){

        if (faqStatus[id]==false){
        allQ[id].innerHTML = svar[id];
        faqStatus[id] = true;
        }
        else{
            allQ[id].innerHTML = "";
            faqStatus[id] = false;
        }
}