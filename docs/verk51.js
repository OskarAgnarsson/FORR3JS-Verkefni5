const spurningar = [
    "Afhverju er getElementById() fljótleglegasta aðferðin?",
    "Hvað er málið með auða hnúta (e. whitespace nodes) og DOM tréið?",
    "Hvað er static og live NodeList, hver er munurinn á NodeList og HTMLCollection?",
    "Hvað er event í eftirfarandi kóða og hvað er gert með því?",
    "Af þremur leiðum til að binda event þá er AddEventListener() nýjust en afhverju er hún betri en hinar?",
    "Hver er munurinn á true og false í AddEventListener?",
    "this vísar í Event listener á html element en ekki á object. Þú getur notað bind() til að breyta því, leystu eftirfarandi kóðadæmi með notkun á bind() til að birta í console “My name is Sam“ en ekki undefined."
];

const svor = [
    "Því getElementById() fer í gegnum tréð og stoppar strax og það finnur rétta id.",
    "Þegar þú setur inn whitespace í HTML getur það búið til node(hnút) sem er tómur",
    "NodeList er hlutur sem er samansöfnun af nodes(ekki Array), static NodeList er bara listinn þegar þú sækir hann, live NodeList uppfærist sjálfkrafa.\nMunurinn á NodeList og HTMLCollection er sá að NodeList heldur utan um alla node en HTMLCollections halda bara utan um elementa og HTMLCollection er alltaf live en NodeList getur verið static og live.",
    "",
    "",
    "",
    ""
];

const container = document.getElementById("container");
container.innerHTML = "<h1>Óskar Agnarsson</h1>";
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
    spParagraph.textContent = q;
    svParagraph.textContent = a;
    svar.append(spParagraph);
    svar.append(svParagraph);
    svaraListi.append(svar);
}
verkefni_5_1.append(svaraListi);
container.append(verkefni_5_1);
