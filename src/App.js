import './App.css';
import styled from 'styled-components';


function App() {
  return (
    <Wrapper>
      <Card>
        <Background />
        <PersonalDetails>
            <Name>Keriann Wilmot</Name>
            <JobTitle>Author, Speaker, Pediatric Occupational Therapist</JobTitle>
            <Location>Prosper, Texas</Location>
        </PersonalDetails>
        <Image />
        <Numbers>
            <Logo>
            <a href="https://www.amazon.com/dp/0876597983/" target="_blank" rel="noreferrer" alt="Purchase Wired Differently Book">
            <Book />
              </a>
            </Logo>
              
            <Logo>
            <a href="https://www.toyqueen.com/" target="_blank" rel="noreferrer" alt="ToyQueen Website">
            <ToyQueen />
              </a>
            </Logo>
              
            <Logo>
              <a href="https://www.linkedin.com/in/keriannsullivanwilmot/" target="_blank" rel="noreferrer" alt="Keri's Linkedin">
            <Social />
              </a>
            </Logo>
              
        </Numbers>
          
      </Card>

    </Wrapper>
  );
}

export default App;

const Wrapper =styled.div`
Background-image: url("https://www.maryfreebed.com/wp-content/uploads/2014/12/Mary-Free-Bed-Rehabilitation-Hospital-Textured-Background-Orange-gradient.jpg");
background-size: cover;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
const Card =styled.div`
background-color: whitesmoke;
display: flex;
flex-direction: column;
justify-content: flex-start;
border-radius: 10px;
width: 450px;
height: 450px;
position: relative;
`
const Background =styled.div`
background-image: url("http://toyqueen.com/wp-content/uploads/2020/02/Spielwarenmesse_ToyQueen_2020_2.jpg");
background-size: cover;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
width: 100%;
height: 33%;
`
const PersonalDetails =styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
width: 100%;
height: 38%;
`
const Name =styled.h1`
font-size: 35px;
margin-bottom: -15px;
`
const Location =styled.h4`
font-size: 15px;
margin-top: 3px;
`
const JobTitle =styled.h3`
font-size: 10px;
`

const Image =styled.div`
background-image: url("https://media-exp1.licdn.com/dms/image/C4E03AQFHskC6z8Y7IA/profile-displayphoto-shrink_800_800/0/1550748581559?e=1635379200&v=beta&t=OxUc83bi5g8xCd8nnrNf4-6fUP4-KI8TdXAuI3u46mM");
background-size: contain;
border-radius: 50%;
border: 3px lightblue solid;
left: 150px;
top: 90px;
width: 120px;
height:120px;
position: absolute;
`
const Numbers =styled.div`
display: flex;
justify-content: space-around;
border-top: 1px orangered solid;

`
const Logo =styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 20px;


`
const Book =styled.div`
background-image: url("https://m.media-amazon.com/images/P/B087JDCVVY.01._SCLZZZZZZZ_SX500_.jpg");
background-size: contain;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
width: 90px;
height: 90px;

&:hover{
transform: scale(1.75);
transition: all 0.5s ease-out;

}
`;
const ToyQueen =styled.div`
background-image: url("/tqimages/TQ-logo-markonly-LG.png");
background-size: contain;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
width: 90px;
height: 90px;

&:hover{
transform: scale(1.5);
transition: all 0.5s ease-out;
}
`;
const Social =styled.div`
background-image: url("https://gartman.com/wp-content/uploads/2020/08/57-571935_linkedin-icon-vector-png-linkedin-circle-logo-transparent.jpg");
background-size: contain;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
width: 90px;
height: 90px;

&:hover{
transform: scale(1.2);
transition: all 0.5s ease-out;
}

`;


