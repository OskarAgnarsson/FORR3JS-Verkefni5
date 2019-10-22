const spurningar = [
    "Afhverju er getElementById() fljótleglegasta aðferðin?",
    "Hvað er málið með auða hnúta (e. whitespace nodes) og DOM tréið?",
    "Hvað er static og live NodeList, hver er munurinn á NodeList og HTMLCollection?",
    `Hvað er event í eftirfarandi kóða og hvað er gert með því? <br><pre><code>
    &lta href='https://developer.mozilla.org/'>MDN&lt/a>
    &ltscript>
        let link = document.querySelector("a");
        link.addEventListener("click", event => {
            console.log('Nope.');
            event.preventDefault();
        });
    &lt/script></code></pre>`,
    "Af þremur leiðum til að binda event þá er AddEventListener() nýjust en afhverju er hún betri en hinar?",
    `Hver er munurinn á true og false í AddEventListener? <br><pre><code>
    elem.addEventListener("click", handlerFunction, true);
    elem.addEventListener("click", handlerFunction, false);
    </code></pre>`,
    `this vísar í Event listener á html element en ekki á object. Þú getur notað bind() til að breyta því, leystu eftirfarandi kóðadæmi með notkun á bind() til að birta í console “My name is Sam“ en ekki undefined.<br><pre><code>
    let Person = {
        name: 'Sam',
        sayName: function(){
        console.log('My name is '+ this.name);
        }
       };
    buttonEl.addEventListener('click', Person.sayName);
    </code></pre>`
];

const svor = [
    "Því getElementById() fer í gegnum tréð og stoppar strax og það finnur rétta id.",
    "Þegar þú setur inn whitespace í HTML getur það búið til node(hnút) sem er tómur.",
    "NodeList er hlutur sem er samansöfnun af nodes(ekki Array), static NodeList er bara listinn þegar þú sækir hann, live NodeList uppfærist sjálfkrafa.<br> Munurinn á NodeList og HTMLCollection er sá að NodeList heldur utan um alla node en HTMLCollections halda bara utan um elementa og HTMLCollection er alltaf live en NodeList getur verið static og live.",
    "Ef maður clickar á linkinn console.loggar það 'Nope' og fer ekki á síðuna.",
    "AddEventListener() leyfir þér að setja eins marga event handlera og þú vilt á element, það stöðvar conflict á milli falla fyrir sama event",
    "Ef það er true er kveikt á useCapture, þá keyrir event handlerinn á ysta elementinu og fer svo niður í innsta, það kallast capturing. Ef það er false keyrir event handlerinn á innsta og fer svo upp í ysta, það kallast bubbling.",
    `<pre><code>
    let Person = {
        name: 'Sam',
        sayName: function(){
        console.log('My name is '+ this.name);
        }
       };
    buttonEl.addEventListener('click', Person.sayName.bind(Person));
    </code></pre>`
];

const container = document.getElementById("container");
container.innerHTML = "<h1>Óskar Agnarsson</h1>";

let quizLink = document.createElement("a");
quizLink.classList.add("quizLink");
quizLink.href = "quiz.html";
quizLink.textContent = "QUIZ VEFAPP";
container.append(quizLink);

const verkefni_5_1 = document.createElement("div");
verkefni_5_1.classList.add("spurnListi");
const titill = document.createElement("h2");
titill.textContent = "Verkefni 5.1";
verkefni_5_1.append(titill);
const svaraListi = document.createElement("ol");

for (let i = 0; i < spurningar.length; i++) {
    let q = spurningar[i];
    let a = svor[i];
    let svar = document.createElement("li");
    let spParagraph = document.createElement("p");
    let svParagraph = document.createElement("p");
    spParagraph.innerHTML = q;
    svParagraph.innerHTML = `<b>${a}</b>`;
    svar.append(spParagraph);
    svar.append(svParagraph);
    svaraListi.append(svar);
}
verkefni_5_1.append(svaraListi);
container.append(verkefni_5_1);