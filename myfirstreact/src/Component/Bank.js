import React from "react"
import './bank.css'

class Bank extends React.Component{
    constructor(){
        super();
        this.state ={
            hasil: 0,
            nominal: 0,
            bunga: 0,
            periode: 0
        }
    }

    nominal = (event) => {
        this.setState({nominal: event.target.value});
    }

    bunga = (event) =>{
        this.setState({bunga: event.target.value});
    }
    
    periode = (event) =>{
        this.setState({periode: event.target.value});
    }

    hitung = () =>{
        let nominal = this.state.nominal;
        let bunga = this.state.bunga;
        let periode = this.state.periode;
        let bungaAwal = nominal * (bunga / 100)
        let bungaAkhir = nominal*1 + bungaAwal
        let cicilan = bungaAkhir / periode

        this.setState({hasil: cicilan})
    }

    render(){
        return(
            <center>
            <div className="layer1">
                <div className="titlelayer2">
                    <h6>Cicilan Bank</h6>
                </div>
                <table>
                    <tr>
                        <td>Nominal</td>
                        <td><input className="form-control" name="nominal" value={this.state.nominal} onChange={ev => this.setState({nominal: ev.target.value})} /></td>
                    </tr>
                    <tr>
                        <td>Bunga</td>
                        <td><input className="form-control" name="bunga" value={this.state.bunga} onChange={ev => this.setState({bunga: ev.target.value})} /></td>
                    </tr>
                    <tr>
                        <td>Periode</td>
                        <td>
                        <select className="form-control" name="periode" value={this.state.periode} onChange={ev => this.setState({periode: ev.target.value})}>
                        <option>Pilih Periode -</option>
                        <option name="periode" value="6">6 Bulan</option>
                        <option name="periode" value="12">12 Bulan</option>
                        <option name="periode" value="18">18 Bulan</option>
                        <option name="periode" value="24">24 Bulan</option>
                        </select>
                        </td>
                    </tr>
                </table>
                
                <button className="btn btn-primary" onClick={this.hitung}>Hitung</button>
                <hr/>
                <input className="form form-control" name="hasil" value={"Rp." + this.state.hasil} disabled />
            </div>
            </center>
        );

    }
}
export default Bank;