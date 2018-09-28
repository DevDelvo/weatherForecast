import React from 'react';

class DetailedForecastCard extends React.Component {
    state ={
        data: [],
    }

    componentDidMount() {
        this.setState({
            data: this.props.data,
        })
    }

    render() {
        return(
            <div className="detailed-forecast-card">
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
    }
}

export default DetailedForecastCard;
