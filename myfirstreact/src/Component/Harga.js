import React from "react"
import './harga.css'

class Harga extends React.Component{
    constructor(){
        super();
        this.state = {
            hargaAwal: 0,
            ppn: 0,
            diskon: 0,
            hasil: 0
        }
    }

    hargaAwal = (event) => {
        this.setState({hargaAwal: event.target.value});
    }

    ppn = (event) => {
        this.setState({ppn: event.target.value});
    }

    diskon = (event) => {
        this.setState({diskon: event.target.value});
    }

    hitung = () => {
        let hargaAwal = Number(this.state.hargaAwal)
        let ppn = Number(this.state.ppn)
        let diskon = Number(this.state.diskon)
        let P = (ppn / 100) * hargaAwal
        let D = (diskon / 100) * hargaAwal
        let hargaAkhir = (hargaAwal*1 + P) - D

        console.log(hargaAwal)
        console.log(P)
        console.log(D)

        this.setState({hasil: hargaAkhir})
    }

    render(){
        return(
               <center>
            <div className="layer1">
                <div className="layeratas">
                    <h6>Hitung Harga Akhir</h6>
                </div>
                <table>
                    <tr>
                        <td>
                            <div class="form-group">
                            <label >Harga Awal</label>
                            <input name="hargaAwal" class="form-control" value={this.state.hargaAwal} onChange={ev => this.setState({hargaAwal: ev.target.value})} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label >PPN</label>
                            <div class="input-group mb-3">
                            <input name="ppn" class="form-control" value={this.state.ppn} onChange={ev => this.setState({ppn: ev.target.value})} />
            
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label >Diskon</label>
                            <div class="input-group mb-3">
                            <input name="diskon" class="form-control" value={this.state.diskon} onChange={ev => this.setState({diskon: ev.target.value})} />
                            </div>
                        </td>
                    </tr>                  
                </table>             
                <button className="btn btn-danger" onClick={this.hitung}>Hitung</button>
                <hr/>
                <h6>Harga Akhir</h6>
                <input className="form form-control" name="hasil" value={"Rp." + this.state.hasil} disabled />
            </div>
            </center>
        ); 
    }
}

export default Harga;