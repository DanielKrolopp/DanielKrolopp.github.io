'use strict';

const sandiaDescription = "Starting in May 2019, I will be a summer R&D Intern at Sandia National Laboratories.";
const sandiaLocation = "ALBUQUERQUE, NM";
const researchDescription = "I'm currently involved in research with Professor Comer regarding a new data center architecture named DCNet. DCNet seeks to optimize East/West network traffic.";
const researchLocation = "WEST LAFAYETTE, IN";

class OccDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: null,
      occupationLocation: null
    }
  }

  render() {
    switch(this.props.occupation) {
      case 'SANDIA NATIONAL LABS':
        this.state.description = sandiaDescription;
        this.state.occupationLocation = sandiaLocation;
        break;
      case 'GRADUATE RESEARCH ASSISTANT':
        this.state.description = researchDescription;
        this.state.occupationLocation = researchLocation;
        break;
      case 'M.S. COMPUTER SCIENCE':
        this.state.description = researchDescription;
        this.state.occupationLocation = researchLocation;
        break;
      case 'UNDERGRAD TEACHING ASSISTANT':
        this.state.description = researchDescription;
        this.state.occupationLocation = researchLocation;
        break;
      case 'MOBI WIRELESS MANAGEMENT':
        this.state.description = researchDescription;
        this.state.occupationLocation = researchLocation;
        break;
      case 'B.S. COMPUTER SCIENCE':
        this.state.description = researchDescription;
        this.state.occupationLocation = researchLocation;
      break;
      case 'EARLIER':
        this.state.description = researchDescription;
        this.state.occupationLocation = researchLocation;
        break;
      default:
        this.state.description = "Excepteur sint occaecat cupidatat non but see an issue with steps. as per your fiddle, there are definitely three stages to the animation, but it's just getting darker and darker. instead, it should be flashing solid red, green, blue without fading or losing brightness. if i comment out the timing function, it does better at simply flashing each color, but";
        this.state.occupationLocation = "UNKNOWN, USA"
        break;
    }
    return (
      <div className="occupation-section">
        <h2>{ this.props.occupation }</h2>
        <span className="inline-span">
          <strong className="occupation-location">{ this.state.occupationLocation } - </strong>
          <p> { this.state.description } </p>
        </span>
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
        <img src={ this.props.imagePath }  alt={ this.props.occupation } className="image"></img>
        <a className="btn shadow-none rounded-0 occupation-image-overlay" onClick={ () => this.props.onClick(this.props.occupation) }>
          <span className="occupation-text">{ this.props.occupation }</span>
        </a>
      </div>
    );
  }
}

class MyWorkArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      occupation: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(occupation) {
    this.setState({ occupation: occupation });
  }

  render() {
    return (
      <div className="occupation-container">
        <OccBox occupation='SANDIA NATIONAL LABS' imagePath='images/sandia.jpg' onClick={ this.handleClick } />
        <OccBox occupation='GRADUATE RESEARCH ASSISTANT' imagePath='images/network.jpg' onClick={ this.handleClick } />
        <OccBox occupation='M.S. COMPUTER SCIENCE' imagePath='images/fallpurdue.jpg' onClick={ this.handleClick } />
        <OccBox occupation='UNDERGRAD TEACHING ASSISTANT' imagePath='images/circuitry.jpg' onClick={ this.handleClick } />
        <OccBox occupation='MOBI WIRELESS MANAGEMENT' imagePath='images/mobi.png' onClick={ this.handleClick } />
        <OccBox occupation='B.S. COMPUTER SCIENCE' imagePath='images/purduebelltower.jpg' onClick={ this.handleClick } />
        <OccBox occupation='EARLIER' imagePath='images/gbs.jpg' onClick={ this.handleClick } />
        { this.state.occupation && <OccDetails occupation={ this.state.occupation } /> }
      </div>
    );
  }
}

// ReactDOM.render(<OccBox />, document.getElementById('occ_box'));
ReactDOM.render(<MyWorkArea />, document.getElementById('occ_cont'));
