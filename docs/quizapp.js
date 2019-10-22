const container = document.getElementById("quizContainer");

function Spurning(spurning,svor,svarIndex){
    this.spurning = spurning;
    this.svor = svor;
    this.svarIndex = svarIndex;
}

Spurning.prototype.setSpurning = function(){
    //Gera spurningu
    let spurn = document.createElement("div");
    spurn.classList.add("spurn");
    spurn.innerHTML = `<h1>${this.spurning}</h1>`

    //Gera svör
    let svorListi = document.createElement("div");
    let count = 0;
    svorListi.classList.add("svorListi");
    if (this.svor.length % 2 == 0) {
        for (let i = 0; i < this.svor.length / 2; i++){
            let svorRow = document.createElement("div");
            svorRow.classList.add("svorRow");
            for (let i = 0; i < 2; i++) {
                if (count == this.svarIndex) {
                    let svar = document.createElement("button");
                    svar.type = "button";
                    svar.classList.add("svar");
                    svar.innerHTML = `<p>${this.svor[count]}</p>`;
                    svar.addEventListener("click",rett);
                    svorRow.append(svar);
                    count++;
                } else {
                    let svar = document.createElement("button");
                    svar.type = "button";
                    svar.classList.add("svar");
                    svar.innerHTML = `<p>${this.svor[count]}</p>`;
                    svar.addEventListener("click",rangt);
                    svorRow.append(svar);
                    count++;
                }
            }
            svorListi.append(svorRow);
        }
    }
    container.append(spurn);
    container.append(svorListi);
    let back = document.createElement("div");
    back.classList.add("back");
    back.innerHTML = "<a href='index.html'>Til Baka</a>";
    container.append(back);

}

Spurning.prototype.clearSpurning = function() {
    container.innerHTML = "";
}
const spurn1 = "What is the airspeed velocity of an unladen swallow?";
const svor1 = ["African or European swallow?","I don't know that!","It doesn't matter","50-65km/h"];
const spurning1 = new Spurning(spurn1,svor1,3);

const spurn2 = "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.";
const svor2 = ["True","False"];
const spurning2 = new Spurning(spurn2,svor2,0);

const spurn3 = "Who is the coach of Mousesports";
const svor3 = ["yNk", "lmbt", "adreN", "Kakafu", "Rejin", "Johnta"];
const spurning3 = new Spurning(spurn3,svor3,4);

const spurningar = [spurning1,spurning2,spurning3];
let currentSpurning = 0;

const rangtListi = document.getElementsByClassName("rangt");
const rettListi = document.getElementsByClassName("rett");

function rett() {
    if (rangtListi.length == 0 && rettListi.length == 0) {
        this.classList.add("rett");
        setTimeout(function() {
            currentSpurning++;
            if (spurningar.length > currentSpurning) {
                spurningar[currentSpurning].clearSpurning();
                spurningar[currentSpurning].setSpurning();
            } else {
                currentSpurning = 0;
                spurningar[currentSpurning].clearSpurning();
                spurningar[currentSpurning].setSpurning();
            }
    },1000);
}
}

function rangt() {
    if (rangtListi.length == 0 && rettListi.length == 0) {
        this.classList.add("rangt")
        setTimeout(function() {
            currentSpurning++;
            if (spurningar.length > currentSpurning) {
                spurningar[currentSpurning].clearSpurning();
                spurningar[currentSpurning].setSpurning();
            } else {
                currentSpurning = 0;
                spurningar[currentSpurning].clearSpurning();
                spurningar[currentSpurning].setSpurning();
            }
    },1000);
}
}

spurningar[currentSpurning].setSpurning();
