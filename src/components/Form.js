import React from 'react';

class Form extends React.Component {
    state = {
        country: '',
        zipCode: 0,
        formErrors: { country: '', zipCode: 0},
        formValid: false,
    }
   
    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ ...this.state, [name] : value });
    }

    render() {
        const { getWeather } = this.props;
        const { country, zipCode } = this.state;
        return (
            <form className="submit-form" onSubmit={getWeather}>
                <div>
                    <span>Country: </span>
                    <input type="text" 
                           name="country" 
                           placeholder="Country Abbreviation" 
                           onChange={this.handleChange} />
                </div>
                <div>
                <span> Zip code: </span>
                <input type="text" 
                       name="zipCode" 
                       placeholder="Zip code" 
                       onChange={this.handleChange} />
                </div>
                <button className="get-weather-button" disabled={ !country || !zipCode }>Get Weather</button>
            </form>
        )
    }
}

export default Form;