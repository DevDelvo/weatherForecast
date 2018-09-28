import React from 'react';

class DetailedForecastCard extends React.Component {
    state ={
        displayFahrenheit: true,
    }

    render() {
        const { changeForecastDisplay, currentForecastDisplay, forecastDisplay } = this.props;
        console.log(currentForecastDisplay)
        return forecastDisplay === true ? (
            <div className="detailed-forecast-card" onClick={changeForecastDisplay}>
                <div className="detailed-forecast-card-info">
                    <div>City</div>
                    <div><span>The Date</span></div>
                    {
                        // data.map(forecast => {
                        // return <div>Time</div>
                        // <div>
                        //     <img className="" src="" alt="" />
                        //     <div className="">temp</div>
                        // </div>
                        // <div>high / low</div>
                        // <div>weather description</div>
                        // probably do a map off the data to show all the hourly forecasts..
                        // }
                    }
                </div>
            </div>
        )
        : null;
    }
}

export default DetailedForecastCard;
