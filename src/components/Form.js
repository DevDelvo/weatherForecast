import React from 'react';

const Form = (props) => {

    return (
        <form onSubmit={props.getWeather}>
            <span>Country: </span><input type="text" name="country" placeholder="Country Abbreviation" />
            <span> Zip code: </span><input type="text" name="zipcode" placeholder="Zip code" />
            <button>Get Weather</button>
        </form>
    )
}

export default Form;