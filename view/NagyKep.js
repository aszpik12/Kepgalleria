class NagyKepView{
    #kep
    constructor(kep, szuloElem){
        this.#kep
        this.szuloElem=szuloElem

        this.#htmlOsszerak()

        this.BalGombElem=$("#bal")
        this.JOBBGombElem=$("#jobb")
        this.nagyKepHelye=$("#nagykephelye")
        this.BalGombElem.on("click", ()=>{
            this.#sajatEsemenykezelo("bal")
        })
        this.JobbGombElem.on("click", ()=>{
            this.#sajatEsemenykezelo("jobb")
        })
 
    }

nagyKepCsere(kep){
    this.nagyKepCsere.attr("src",kep)
}

    #sajatEsemenykezelo(esemenynev){
        const esemenyem = new CustomEvent(esemenynev)
        window.dispatchEvent(esemenyem)
    }

    #htmlOsszerak(){
        let txt = "<button id = 'bal'>BAL</button>";
        txt+=`
        <div class="card">
            <div class="card-header">Header</div>
            <div class="card-body"><img src="${this.#kep}" id='nagykephelye' class="img-thumbnail" alt="Cinque Terre">></div>
            <div class="card-footer">Footer</div>
        </div>`
        txt += "<button id = 'jobb'>JOBB</button>";
        this.szuloElem.html(txt);
    }
}
export default NagyKepView