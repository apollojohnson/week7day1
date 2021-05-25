import React, { Component } from 'react'

export default class Home extends Component {
    // we need to gain access to the state of our component, we need to go through the constructor
    // constructor() {
    //     // console.log("component constructed")
    //     super();

    //     this.state = {
    //         racers: []
    //     }
    //     // console.log(this.state.racers)
    // };

    

    render() {
        const racers = this.props.racers;
        // console.log("component rendered")
        return (
            <div>
                <h3>{this.props.name}</h3>
                <hr />
                <form className="row row-cols-lg-auto g-3 align-items-center" onSubmit={(e) => this.props.handleSubmit(e)}>
                    <div className="col-12">
                        <input type="text" className="form-control" name="year" placeholder="Year" />
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" name="season" placeholder="Season" />
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-outline-info">Submit</button>
                    </div>
                </form>

                <button id="api-btn" className="btn btn-outline-success" onClick={this.props.handleClick}>Get Data</button>
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Points</th>
                        <th>Wins</th>
                        <th>Name</th>
                        <th>DOB</th>
                        <th>Nationality</th>
                        <th>Constructor</th>
                    </tr>
                </thead>
                <tbody>
                    {racers.map((racer, index) => (

                    <tr key={index}>
                        <td>{racer.position}</td>
                        <td>{racer.points}</td>
                        <td>{racer.wins}</td>
                        <td>{racer.Driver.givenName}</td>
                        <td>{racer.Driver.dateOfBirth}</td>
                        <td>{racer.Driver.nationality}</td>
                        <td>{racer.Constructors[0].name}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        )
    }
}
