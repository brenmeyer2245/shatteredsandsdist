import React, {Component} from 'react'
import {numberToArray} from '../../utils';


export class StatusTracker extends Component {

  constructor(props){
    super();
    this.state = {
      currentStatus: 1
    }
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.moveToStatus = this.moveToStatus.bind(this);
  }

  next(){
    if (this.state.currentStatus + 1 < this.props.statusSteps) this.setState({currentStatus: statusNum+1});
  }

  prev(){
    if (this.state.currentStatus - 1 >= 0) this.setState({currentStatus: statusNum - 1});
  }

  moveToStatus(statusNum){
    this.setState({currentStatus: statusNum});
  }

  render(){
    return (
      <div className="StatusTracker__Container">
      {/* For Each Step in the Tracker */}
        {numberToArray(this.props.statusSteps).map((step, index) => (
            <div key={index} className={"btn StatusTracker__Step" + (this.state.currentStatus === (index+1) ?' selected' : "")}
              onClick={() => {
                this.moveToStatus(index + 1)
              }
            }
            >
                <span> {index + 1}</span>
            </div>
        ))}
      </div>
    )
  }

}

