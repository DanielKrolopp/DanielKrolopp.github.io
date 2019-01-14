'use strict';

const sandiaDescription = "<p>Starting in May 2019, I will take on a new role as a summer R&D Intern at <a href=\"https://www.sandia.gov\" target=\"_blank\">Sandia National Laboratories</a>. Throughout the internship, I will be working as a part of their Center for Cyber Defenders (CCD), whose projects range from operating systems analysis and software defined networking to machine learning. I'm excited to spend my summer working along a group of bright and driven researchers dedicated to making a difference in the realm of digital security.</p>";
const sandiaLocation = "ALBUQUERQUE, NM";
const researchDescription = "<p>I'm currently involved in research with <a href=\"https://www.cs.purdue.edu/people/dec\" target=\"_blank\">Professor Douglas Comer</a> regarding a newly-proposed data center architecture named <a href=\"https://www.researchgate.net/publication/314203668_DCnet_A_new_data_center_network_architecture\" target=\"_blank\">DCnet (Data Center network)</a>. DCnet seeks to optimize East/West network traffic within modern data centers, which amounts to about 76% of all internet traffic, <a href=\"https://blogs.cisco.com/security/trends-in-data-center-security-part-1-traffic-trends\" target=\"_blank\">according to Cisco</a>. DCnet proposes reworking layers 2 and 3 of the network protocol stack within data centers to achieve faster communication and greater portability between virtualized server environments and containers.</p><p>The results of a DARPA grant proposal for DCnet are pending.</p>";
const researchLocation = "WEST LAFAYETTE, IN";
const msDescription = "<p>I decided midway through my undergraduate studies to pursue a combined-degree B.S./M.S. in Computer Science. By seizing this awesome opportunity, I'm seeking to further the depth of my knowledge in Computer Science. During my undergraduate studies, I discovered my fascination with computer networking, operating systems and other low-level systems concepts, and that I wanted to learn more. My anticipated graduation date from the Masters program is May 2020.<p>";
const msLocation = "WEST LAFAYETTE, IN";
const utaDescription = "<p>I'm very thankful to have the opportunity to be an Undergraduate Teaching Assistant for CS 252 Systems Programming, currently offered by <a href=\"https://www.cs.purdue.edu/people/grr\" target=\"_blank\">Professor Gustavo Rodriguez-Rivera<\a>. As a class that I enjoyed and whose concepts guided my interests in Computer Science, it has been really rewarding to share it with others. In CS 252, students build a number of large systems-level projects including a malloc implementation, shell and web server. Most work is done in C or C++.</p>";
const utaLocation = "WEST LAFAYETTE, IN";
const mobiDescription = "<p>The summer after my sophomore year of undergrad, I had the privilege of working as a Software Development Intern using Ruby on Rails and AngularJS at <a href=\"https://www.mobiwm.com\" target=\"_blank\">MOBI Wireless Management</a>. I feel honored to have worked with a team of highly-motivated developers who helped show me how a small group of talented and passionate individuals can make a difference in the world around them. As one of the most cohesive and productive teams I've ever been a part of, I learned to be my best self and to view mistakes as learning experiences from which I could grow to be better-equipped to tackle new challenges.</p><p>MOBI was acquired by <a href=\"https://www.tangoe.com\" target=\"_blank\">Tangoe Technology Expense Management Solutions</a> in December 2018.</p>";
const mobiLocation = "INDIANAPOLIS, IN";
const bsDescription = "<p>I feel incredibly fortunate to call Purdue University my alma mater. In addition to providing me with resources that helped me develop professionally, Purdue allowed me to make connections with people of diverse backgrounds that helped form my own sense of self-authorship.</p><p>Through my time as a Resident Assistant, I developed leadership skills that allowed me to serve as a resource for others and to encourage them to be their best selves. I learned how important a single person can be in the personal development of others and how this shapes one's worldview. As the Secretary and a founding member of the Purdue Impact Theory, I learned how to promote and communicate one of my passions (STEM education) with the broader community, as well as how to develop the passions and creativity of others.</p><p>Purdue offered me others who would challenge my beliefs and push me to think critically about why I held them. Just as importantly, Purdue taught me that life is short and how important it is to spend it pursuing my passions with people who matter.</p>";
const bsLocation = "WEST LAFAYETTE, IN";
const earlierDescription = "<p>My experiences at Glenbrook South High School in Glenview, Illinois were the first steps in discovering what I want to do with my life. I'm incredibly lucky to have been provided with an environment that taught me the value of hard work and the importance of following one's passions. Through my three years on my high school's yearbook (two of which as an editor), I was encouraged to pursue a new creative outlet of photography and to step outside of my comfort zone. I also played water polo, which taught me the importance an individual plays as part of a team.</p>";
const earlierLocation = "CHICAGO & GLENVIEW, IL"

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
        this.state.description = msDescription;
        this.state.occupationLocation = msLocation;
        break;
      case 'UNDERGRAD TEACHING ASSISTANT':
        this.state.description = utaDescription;
        this.state.occupationLocation = utaLocation;
        break;
      case 'MOBI WIRELESS MANAGEMENT':
        this.state.description = mobiDescription;
        this.state.occupationLocation = mobiLocation;
        break;
      case 'B.S. COMPUTER SCIENCE':
        this.state.description = bsDescription;
        this.state.occupationLocation = bsLocation;
      break;
      case 'EARLIER':
        this.state.description = earlierDescription;
        this.state.occupationLocation = earlierLocation;
        break;
      default:
        this.state.description = "Excepteur sint occaecat cupidatat.";
        this.state.occupationLocation = "UNKNOWN, USA"
        break;
    }
    return (
      <div className="occupation-section">
        <h2>{ this.props.occupation }</h2>
        <span className="inline-span">
          <strong className="occupation-location">{ this.state.occupationLocation } - </strong>
          <span className="inline-span" dangerouslySetInnerHTML={{ __html: this.state.description }}></span>
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
