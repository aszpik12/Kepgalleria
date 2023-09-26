import Modell from "../model/Model.js";
import NagyKepView from "../view/NagyKep.js";
class Controller {
    constructor(){
        const MODELL = new Modell()

        const NAGYKEPVIEW = new NagyKepView(MODELL.getAktKep() ,$(".nagykep"))

        $(window).on("jobb",()=>{
            MODELL.jobb()
            let altKep=MODELL.getAktKep()

            NAGYKEPVIEW.nagyKepCsere(altKep)
        })
    }


}
export default Controller;