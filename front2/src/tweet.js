import React, {Component} from "react";
import "./tweet.css";
class Tweet extends Component {

  constructor(props){
    super(props);
    this.state = {
      votes : 0
    }
    this.onVote = this.onVote.bind(this);
  }

  onVote = () =>
  {
    this.setState({
      votes: this.state.votes+1
    })
  }
  render () {
    return (
      <div className="tweet">
        {this.props.tweet.text}
        <label htmlFor = "btnVote">
          <button
            onClick={this.onVote}
            id="btnVote"className="btn btn-primary">
            Vote{" "}
            <span role="img" aria-label="thumbs up">
              👍
            </span>
          </button>
          <span> Votes: <span id="spVoteValue">{this.state.votes}</span></span>
        </label>
     </div>);
  }
}
export default Tweet