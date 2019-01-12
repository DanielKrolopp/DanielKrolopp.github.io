'use strict';

class OccDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="occupation-section">
        <h2>{ this.props.organization }</h2>
        <p>Excepteur sint occaecat cupidatat non but see an issue with steps. as per your fiddle, there are definitely three stages to the animation, but it's just getting darker and darker. instead, it should be flashing solid red, green, blue without fading or losing brightness. if i comment out the timing function, it does better at simply flashing each color, but</p>
      </div>
    );
  }
}

class OccBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="occupation-image">
        <img src={ this.props.imagePath }  alt={ this.props.displayText } className="image"></img>
        <a className="btn shadow-none rounded-0 occupation-image-overlay" onClick={ () => this.props.onClick(this.props.displayText) }>
          <span className="occupation-text">{ this.props.displayText }</span>
        </a>
      </div>
    );
  }
}

class MyWorkArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(organization) {
    this.setState({ showDetails: organization });
  }

  render() {
    return (
      <div className="occupation-container">
        <OccBox displayText='SANDIA NATIONAL LABS' imagePath='images/sandia.jpg' onClick={ this.handleClick } />
        <OccBox displayText='GRADUATE RESEARCH ASSISTANT' imagePath='images/network.jpg' onClick={ this.handleClick } />
        <OccBox displayText='M.S. COMPUTER SCIENCE' imagePath='images/fallpurdue.jpg' onClick={ this.handleClick } />
        <OccBox displayText='UNDERGRAD TEACHING ASSISTANT' imagePath='images/circuitry.jpg' onClick={ this.handleClick } />
        <OccBox displayText='MOBI WIRELESS MANAGEMENT' imagePath='images/mobi.png' onClick={ this.handleClick } />
        <OccBox displayText='B.S. COMPUTER SCIENCE' imagePath='images/purduebelltower.jpg' onClick={ this.handleClick } />
        <OccBox displayText='EARLIER' imagePath='images/gbs.jpg' onClick={ this.handleClick } />
        { this.state.showDetails && <OccDetails organization={ this.state.showDetails } /> }
      </div>
    );
  }
}

// ReactDOM.render(<OccBox />, document.getElementById('occ_box'));
ReactDOM.render(<MyWorkArea />, document.getElementById('occ_cont'));
