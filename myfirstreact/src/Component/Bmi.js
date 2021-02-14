import React from "react";
import './bmi.css'

class Bmi extends React.Component {
    constructor(){
        super();
        this.state = {
            hasil: 'Masukkan Berat dan Tinggi Anda!',
            berat: 0,
            tinggi: 0
        }
    }



    berat = (event) => {
        this.setState({berat: event.target.value});
    }

    tinggi = (event) =>{
        this.setState({tinggi: event.target.value});
    }
    proses = () => {
        let berat = this.state.berat;
        let tinggi = this.state.tinggi;
        let bmi = berat / ((tinggi / 100) ** 2)
        console.log(bmi)

        if (bmi < 18.5) {
            this.setState({
                hasil: 'Kekurangan berat badan'
            })
        } else if (bmi >= 18.5 && bmi < 25) {
            this.setState({
                hasil: 'Normal(Ideal)'
            })
        } else if (bmi >= 25 && bmi < 30) {
            this.setState({
                hasil: 'Kelebihan berat badan'
            })
        } else {
            this.setState({
                hasil: 'Kegemukan'
            })
        }

    }

    render() {
        return (
            <center>
                <div className="card">
                    <div className="card-header">
                        Body Mass Index
                    </div>
                    <div className="card-body">
                        <table>
                            <tr>
                                <td>Berat</td>
                                <td><input className="form-control" name="berat" value={this.state.berat} onChange={ev => this.setState({ berat: ev.target.value })} /></td>
                            </tr>
                            <tr>
                                <td>Tinggi</td>
                                <td><input className="form-control" name="tinggi" value={this.state.tinggi} onChange={ev => this.setState({ tinggi: ev.target.value })} /></td>
                            </tr>
                        </table>
                    </div>
                    <div className="card-footer">
                        <button href="" className="btn btn-info" onClick={this.proses}>Hitung</button>
                        <hr />
                        <h4 className="title">Hasil</h4>
                        <div class="alert alert-success">
                            {this.state.hasil}
                        </div>
                    </div>
                </div>
            </center>
        );
    }

}


export default Bmi;