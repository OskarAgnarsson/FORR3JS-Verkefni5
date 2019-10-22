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
                    //svar.addEventListener("click",rett);
                    svorRow.append(svar);
                    count++;
                } else {
                    let svar = document.createElement("button");
                    svar.type = "button";
                    svar.classList.add("svar");
                    svar.innerHTML = `<p>${this.svor[count]}</p>`;
                    //svar.addEventListener("click",rangt);
                    svorRow.append(svar);
                    count++;
                }
            }
            svorListi.append(svorRow);
        }
    }
    container.append(spurn);
    container.append(svorListi);
}

const spurn1 = "Who has the role of Tony Stark in Iron Man";
const svor1 = ["Ian McKellen","Patrick Stewart","Brad Pitt","Robert Downey Jr."];

let spurning1 = new Spurning(spurn1,svor1,3);

spurning1.setSpurning();
