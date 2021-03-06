


namespace P_3_4Server {

    interface ServerAntwort {
        fname: string;
        lname: string;
        adress: string;
        mail: string;

    }

    async function print(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        //let _url: RequestInfo = "https://gis-sose-21.herokuapp.com";
        let _url: RequestInfo = "http://localhost:8100";

        _url = _url + "/paste";
        console.log(_url);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let response: Response = await fetch(_url);
        let antwort: ServerAntwort = <ServerAntwort> await response.json();
        console.log(antwort);
        let para: HTMLParagraphElement = document.createElement("p");
        //let antwortString: string = JSON.stringify(antwort);
        para.innerHTML = "Vorname: " + antwort.fname + " , " + " Nachname: " + antwort.lname + " , " + " Adresse: " + antwort.adress + " , " + " Mail: " + antwort.mail; 
        //BITTE LESEN : Ich habe versucht die Informationen aus dem JSON String herauszubekommen aber es zeigt mir bei den Atributen immer UNDEFINED aus. Wo liegt der Fehler???? In der Konsole werden meine Daten aber angezeigt??
        //para.innerHTML = antwortString;
        document.body.appendChild(para);



    }
    async function send(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        //let _url: RequestInfo = "https://gis-sose-21.herokuapp.com";
        let _url: RequestInfo = "http://localhost:8100";

        _url = _url + "/send";

        console.log(_url);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let response: Response = await fetch(_url);
        let benutzer: ServerAntwort = await response.json();
        console.log(benutzer);
    }

    document.querySelector("#print").addEventListener("click", print);
    document.querySelector("#send").addEventListener("click", send);





}




