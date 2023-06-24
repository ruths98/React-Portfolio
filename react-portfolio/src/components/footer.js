import github from '../images/github-mark.png'
import linkedIn from '../images/linkedIn.png'

const linkedInLogo = {
  width:'80px',
  marginBottom:'0px'
}

const githubLogo = {
  width:'50px',
  marginBottom:'17px'
}

export default function Footer() {
    return(
        <footer className="footer">
       <a href="https://github.com/ruths98"><img style={githubLogo} src={github}   alt="github logo"/></a>
       <a href="https://www.linkedin.com/in/ruth-stevens-5a2a2b244/"><img  style={linkedInLogo} src={linkedIn} alt="linkedIn logo"/></a>
      </footer>
    )
}
