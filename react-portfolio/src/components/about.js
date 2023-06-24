import selfie from '../images/selfie.JPG'

function About() {
    
    return (
        <div>
            <h3>About Me</h3>
            <img src={selfie} style={{width:'200px'}}/>
            <p>
                Welcome to my portfolio website! My name is Ruth Stevens and I am currently living in Cincinnati Ohio, and am currently enrolled in a fullstack coding bootcamp hosted by the Ohio State University. In 2020 I graduated with my bachelor's in visual arts, but have since decided to try another route. Feel free to peruse this website and check out some of my featured projects as well as my github.                
            </p>
        </div>

    );
}

export default About;