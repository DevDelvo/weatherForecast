import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Form.css';

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
        const { getWeather, clearDisplay } = this.props;
        const { zipCode } = this.state;
        return (
            <div className="form-container">
            <form className="submit-form" onSubmit={getWeather}>
                <div>
                    <label>Country: </label>
                    <input
                        type="text"
                        name="country"
                        placeholder="Country Abbreviation"
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                <label> Zip code: </label>
                <input
                    type="text"
                    className="zipcode-form"
                    name="zipCode"
                    placeholder="Zip code"
                    onChange={this.handleChange}
                />
                </div>
                <button className="get-weather-button" disabled={ !zipCode }>Get Weather</button>
            </form>
            <button className="clear-weather-button" onClick={clearDisplay}>Clear</button>
            </div>
        )
    }
}

Form.propTypes = {
    getWeather: PropTypes.func.isRequired,
}

export default Form;