import Global from "@/Global";
import axios from "axios";

export default class SerieServices{
    api = Global.apiSeries;

    getSeries(){
        return new Promise(resolve=>{
            let url = this.api + "api/series"
            axios.get(url).then(resolve)
        })
    }

    getSerie(idSerie){
        return new Promise(resolve=> {
            let url = this.api + "api/series/" + idSerie;
            axios.get(url).then(resolve)
        })
    }


}