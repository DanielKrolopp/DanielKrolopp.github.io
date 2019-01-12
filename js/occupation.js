'use strict';

class OccDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    };
  }

  render() {
    return (
      <div className="occupation-section">
        <h2>SANDIA NATIONAL LABS</h2>
        <p>Excepteur sint occaecat cupidatat non but see an issue with steps. as per your fiddle, there are definitely three stages to the animation, but it's just getting darker and darker. instead, it should be flashing solid red, green, blue without fading or losing brightness. if i comment out the timing function, it does better at simply flashing each color, but</p>
      </div>
    );
  }
}

class OccBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      alert('Yo');
      this.state.showDetails = true;
    }
    return (
      <div className="occupation-image">
        <img src={ this.props.imagePath }  alt={ this.props.displayText } className="image"></img>
        <a className="btn shadow-none rounded-0 occupation-image-overlay" onClick={ this.props.onClick }>
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
      showDetails: false,
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state);
    this.setState({ showDetails: true });
    console.log(this.state);
  }

  render() {
    console.log('rendering...');
    console.log(this.state);
    return (
      <div className="occupation-container">
        <OccBox displayText='SANDIA NATIONAL LABS' imagePath='images/sandia.jpg' onClick={ this.handleClick  }/>
        <OccBox displayText='GRADUATE RESEARCH ASSISTANT' imagePath='images/network.jpg'/>
        <OccBox displayText='M.S. COMPUTER SCIENCE' imagePath='images/fallpurdue.jpg'/>
        <OccBox displayText='UNDERGRAD TEACHING ASSISTANT' imagePath='images/circuitry.jpg'/>
        <OccBox displayText='MOBI WIRELESS MANAGEMENT' imagePath='images/mobi.png'/>
        <OccBox displayText='B.S. COMPUTER SCIENCE' imagePath='images/purduebelltower.jpg'/>
        <OccBox displayText='EARLIER' imagePath='images/gbs.jpg'/>
        {this.state.showDetails && <OccDetails />}
      </div>
    );
  }
}

// ReactDOM.render(<OccBox />, document.getElementById('occ_box'));
ReactDOM.render(<MyWorkArea />, document.getElementById('occ_cont'));
