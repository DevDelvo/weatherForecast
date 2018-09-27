import React from 'react';

const Form = (props) => {

    return (
        <form className="submit-form" onSubmit={props.getWeather}>
            <div>
                <span>Country: </span><input type="text" name="country" placeholder="Country Abbreviation" />
            </div>
            <div>
            <span> Zip code: </span><input type="text" name="zipcode" placeholder="Zip code" />
            </div>
            <button>Get Weather</button>
        </form>
    )
}

export default Form;