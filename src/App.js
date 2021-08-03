import clusterAI_demo from './ClusterAI demo.jpg'
import './App.css';
import React from 'react';
import { InfoBox, InfoButton } from './Components.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { infobox: null };
  }

  render() {
    const AboutMeButton = (
      <InfoButton title="About Me" isSelected={true} id="aboutme">
        <h2>About Me</h2>
        <p>I am a undergrad computer science major currently studying at the University of California - Los Angeles.
          I am deeply fascinated with computer science and software engineering because I love solving difficult challenges.
          To me, computers are all about solving problems.
          I love working with theory and princples to logically deduce key points of some data and or a design.
          I love the flames of creativity that inspire unique ideas and algorithms.
          I love meticulously assembling each gear of a practical application that
          deploys all the theories and all the ideas from before,
          to craft an elegant and flexible solution.
          But most of all, I love learning and experiencing new concepts, theories, algorithms, etc. each time I undergo this process.</p>
      </InfoButton>
    );

    const ClusterAIButton = (
      <InfoButton title="ClusterAI" id="cluster">
        <h3>Cluster AI</h3>
        <img src={clusterAI_demo} alt="Demonstration of clusterAI website from LAHacks" className="projectImg"/>
        <p>Project that I worked on during the LAHacks hackathon in March 2021. ClusterAI is a visualization tool that represents research papers as spherical nodes in 3D space.
        A user can input a search query, which the backend will then find research papers related to the search query and then display them in 3D space.
        Similar research papers are closer to together, and dissimilar papers are farther apart. The user can drag the 3D model around, zoom in and out, and rotate their view.
        Upon clicking on a node, the corresponding paper's title, author, abstract, and link are presented to the user.</p>
        <p>ClusterAI uses CORE resarch paper API to query and access a database of research papers and their metadata.
        The metadata is then fed into a BERT-based machine learning model that converts the research paper's abstract and title into a series of word encodings.
        These encoding provide a numerical representation of the sentence that encapsulates the sentence's semantic meaning.
        The encodings for the retrieved papers are then fed into a Multidimensional Scaler which compresses the word encodings into a 3D point.
        Finally, a JavaScipt 3D visualization tool is used to draw the 3D points in a Django served webpage.</p>
        <p>I researched, designed, and built the machine learning and multidimensional scaling pipeline that converts the research paper metadata into 3D points.
        From my research, I concluded that a BERT-based machine learning model would best encapsulate the semantic meaning of the research paper, enabling the 
        final 3D points to be most accurate. I also chose a multidimensional scaler for the fact that is motiviation is to preserve the distances between the inputted vectors
        as much as possible. Meaning, if papers are deemed semantic dissimilar by the BERT model, then the multidimensional scaler will also try to keep the papers spatially dissimilar.</p>
      </InfoButton>
    );

    const ColoniaButton = (
      <InfoButton title="Colonia Unity Game" id="colonia">
        <h3>Colonia Unity Game</h3>
        <p></p>
      </InfoButton>
    );

    const CookyAppButton = (
      <InfoButton title = "Cooky Website" id="cooky">

      </InfoButton>
    );

    const MusicGenreButton = (
      <InfoButton title = "Music Genre Classification" id="musicgenre">

      </InfoButton>
    );

    const ExperienceButton = (
      <InfoButton title="Experience" id="experience">
        <h2>Experience</h2>
        <p>Almost all of my projects come from personal projects that were designed with the intent of learning something new.
          My early expeditions into computer science involved understanding the basics of programming and object-oriented design.
          Such projects include a simple text-based graphics engine and a short video game. Both of which developed my understanding of
          how an object-oriented design organizes different pieces of the program, and how those pieces became integrated together.
          I have experience with machine learning and data science. Projects in this area include a music-genre classification app, a March Madness prediction app,
          and a basic machine learning Java library. Recently, I have been working on various web applications. These include cookbook MERN-like website,
          this personal website, and a AI-based research paper visualization application. Finally, the biggest project I have been working on is another video game.
          But this time, it's sole purpose was to be large, so I could experience working with a large project and with various frameworks. The game uses the Unity game engine.
          I have been working on and off on this project for a year, accumulating over 7,800 lines of code. Although the project is nowhere near complete nor up to industry standard,
          I have learned a great deal about software design and engineering.</p>
        <InfoBox defaultText="Select a project for further information." buttons={[ColoniaButton, ClusterAIButton, CookyAppButton, MusicGenreButton]}/>
      </InfoButton>
    );

    return (
      <div>
        <h1>Victor Wen</h1>

        {/* Menu of buttons. Click to display text below */}
        <InfoBox buttons={[AboutMeButton, ExperienceButton]} selected="aboutme"/>
      </div>
    );
  }
}

export default App;
