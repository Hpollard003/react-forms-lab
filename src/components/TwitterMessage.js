import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {characters: ''};

    // this.maxChars = this.maxChars.bind(this);

  }


  characterCount= (event)=> {
    this.setState({
      characters: event.target.value
    })
  }

  render() {
    let message = this.state.message
    let messageLength = this.props.maxChars - this.state.characters.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="characters" id="characters" onChange={this.characterCount} value={this.state.characters} />
        {messageLength}
      </div>
    );
  }
}

export default TwitterMessage;
