import React, { Component } from 'react';


class Country extends Component {
     state = {
        medal: 'Gold Medals: ',
        number: 0,
        country: 'United States',
     }

     renderNumber(number){
        return (number === undefined || number === null ? 0 : number)
     }

     renderIncrement = () => {
        let totalMedals = this.state.number
        totalMedals ++
        this.setState({number: totalMedals})
     }

     render(){
        return (
            <div><div><b>{this.state.country}</b></div>{ this.state.medal } <div onClick={ this.renderIncrement} className='Medals'><button>{this.renderNumber(this.state.number)}</button></div></div>
        )
     }
}

export default Country