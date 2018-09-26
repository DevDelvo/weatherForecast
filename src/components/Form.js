import React from 'react';

const Form = (props) => {

    return (
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="City" />
            <input type="text" name="country" placeholder="Country" />
            <input type="text" name="zipcode" placeholder="Zip code" />
            <button>Get Weather</button>
        </form>
    )
}

export default Form;