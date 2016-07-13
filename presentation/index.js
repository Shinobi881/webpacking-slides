// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

import Intro from './Section/intro/intro-1.jsx';


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  webpack: require("../assets/webpack2.png")
};

preloader(images);

const videoGames = createTheme({
  bgDark: "#412854",
  bgLight: "#4cc35b",
  headingDark: "#ff4081",
  headingLight: "#d8d8d8",
  textLight: "#68da23",
  textDark: "#120a3d"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={videoGames}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
        {/* Intro slide */}
          <Slide transition={["fade"]} bgColor="bgLight" textColor="textDark">
          <Image src={images.webpack.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={1} fit caps lineHeight={1} textColor="text">
              Webpacking
            </Heading>
            <Appear>
              <Heading size={2} fit caps textColor="text">
                An introduction to the Webpack module bundler
              </Heading>
            </Appear>
              
          </Slide>
        {/* Before we get started */}
          <Slide transition={["fade"]} bgColor="bgLight" textColor="textDark">
            <Heading textSize={38} fit caps lineHeight={1} textColor="text">
              Setup
            </Heading>
            <List>
              <ListItem><Code>github.com/Shinobi881/webpacking</Code></ListItem>
              <ListItem><Code>npm i</Code></ListItem>
              <ListItem><Code>git tag</Code></ListItem>
            </List>            
          </Slide>
        {/* Why Webpack */}
          <Slide transition={["fade"]} bgColor="bgLight" textColor="textDark">
            <Heading size={1} fit caps lineHeight={1} textColor="text">
              Why Webpack?
            </Heading>
            <Image src={images.webpack.replace("/", "")} margin="0px auto 40px" height="293px"/>              
          </Slide>
        {/* React Ecosystem */}
          <Slide transition={["fade"]} bgColor="background" textColor="text">
            <Heading caps>React Ecosystem</Heading>
            <List>
              <Appear><ListItem textColor="#ecfb77">React</ListItem></Appear>
              <Appear><ListItem textColor="#ecfb77">Redux</ListItem></Appear>
              <Appear><ListItem textColor="#ecfb77">ES6/7</ListItem></Appear>
              <Appear><ListItem textColor="#ecfb77">Webpack</ListItem></Appear>
              <Appear><ListItem textColor="#ecfb77">Babel</ListItem></Appear>
              <Appear><ListItem textColor="#ecfb77">Enzyme(testing)</ListItem></Appear>
              <Appear><ListItem textColor="#ecfb77">Your favorite preprocessor</ListItem></Appear>
              <Appear><ListItem textColor="#ecfb77">RxJS</ListItem></Appear>
              <Appear><ListItem textColor="#ecfb77">postCSS</ListItem></Appear>
              <Appear><ListItem textColor="#ecfb77">autoPrefixer</ListItem></Appear>
              <Appear><ListItem textColor="#ecfb77">A million other things</ListItem></Appear>
            </List>
          </Slide>
        {/* Topics to cover */}
          <Slide transition={["zoom", "fade"]} transitionDuration={500} bgColor="bgLight" textColor="textDark">         
            <Heading caps fit>Coverage?</Heading>
            <Layout>
              <Fill>
                <Heading size={2} caps >Yep!</Heading>
                <List>
                  <Appear><ListItem>Webpack and NPM</ListItem></Appear>
                  <Appear><ListItem>Babel</ListItem></Appear>
                  <Appear><ListItem>ES5-ES6/7</ListItem></Appear>
                  <Appear><ListItem>Hot Module Replacement</ListItem></Appear>
                  <Appear><ListItem>React</ListItem></Appear>
                </List>
              </Fill>
              <Fill>
                <Heading size={2} caps >Nope!</Heading>
                <List>
                  <Appear><ListItem>Browserify</ListItem></Appear>
                  <Appear><ListItem>Grunt</ListItem></Appear>
                  <Appear><ListItem>Gulp</ListItem></Appear>
                  <Appear><ListItem>JSPM</ListItem></Appear>
                  <Appear><ListItem>Not much else</ListItem></Appear>
                </List>
              </Fill>
            </Layout>
          </Slide>         
        {/* Use Cases */}
          <Slide transition={["fade"]} bgColor="background" textColor="text">
            <Heading caps>Use Cases</Heading>
            <List>
              <Appear><ListItem textColor="#ecfb77">CommonJS</ListItem></Appear>
              <Appear><ListItem textColor="#ecfb77">Modularized Code</ListItem></Appear>
              <Appear><ListItem textColor="#ecfb77">Bundling code</ListItem></Appear>
              <Appear><ListItem textColor="#ecfb77">Transpiling</ListItem></Appear>
              <Appear><ListItem textColor="#ecfb77">Hot Module Replacement</ListItem></Appear>
              <Appear><ListItem textColor="#ecfb77">Component Based Libraries (React)</ListItem></Appear>
            </List>
          </Slide>
        {/* Let's get started */}
          <Slide transition={["fade"]} bgColor="background" textColor="text">
            <Heading caps>Let's Get It Started</Heading>
            <br></br>
            <Text bold textColor="textLight">Repo:</Text><Link href="https://github.com/Shinobi881/webpacking"><Code textColor="#ecfb77">Shinobi881/webpacking</Code></Link>            
          </Slide>
        {/* CommonJS */}
          <Slide transition={["fade"]} bgColor="background" textColor="text">
            <Heading>CommonJS</Heading>
            <br></br>
            
            
            <List>
              <Appear><ListItem><Code fit textColor="headingDark">module.exports</Code></ListItem></Appear>
              <Appear>
                <CodePane
                  lang="javascript"
                  source={require("raw!../assets/commonjs2.example")}
                  margin="20px auto"
                  fit
                />
              </Appear>
              <Appear><ListItem><Code textColor="headingDark"fit>require</Code></ListItem></Appear>
              <Appear>
                <CodePane
                  lang="javascript"
                  source={require("raw!../assets/commonjs.example")}
                  margin="20px auto"
                  fit
                />
              </Appear>
            </List>
            <Code fit textColor="headingDark">$ git checkout 02-make-it-work</Code>
          </Slide>
        {/* Transpiling */}
          <Slide transition={["fade"]} bgColor="background" textColor="text">
            <Heading>Transpiling/Compiling</Heading>
            
            <List>
              <Appear><ListItem textColor="#ecfb77">es2015 (via Babel)</ListItem></Appear>
              <Appear><ListItem textColor="#ecfb77">typescript</ListItem></Appear>
              <Appear><ListItem textColor="#ecfb77">elm</ListItem></Appear>
              <Appear><ListItem textColor="#ecfb77">oj - (Objective-C)</ListItem></Appear>
              <Appear><ListItem textColor="#ecfb77">coffee</ListItem></Appear>
              <Appear>
                <ListItem>
                  <Link href="https://webpack.github.io/docs/list-of-loaders.html#dialects">
                    and more...
                  </Link>
                </ListItem>
              </Appear>
            </List>
            <br></br>
            <Code fit textColor="headingDark">$ git checkout 03-es6ing</Code>
          </Slide>
        {/* Hot Module Replacement*/}
          <Slide transition={["fade"]} bgColor="background">
            <Heading textSize={80} textColor="headingLight">Bot Module Replacement</Heading>
            <Heading textSize={40} textColor="headingDark">Dev server</Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/devserver.example")}
              margin="20px auto"
            />
            <Heading textSize={40} textColor="headingDark">Middleware</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/devmiddleware.example")}
              margin="20px auto"
            />
          </Slide>
        {/* Component */}
          <Slide transition={["fade"]} bgColor="background" textColor="text">
            <Heading>Component Architechture</Heading>
            <List>
              <Appear><ListItem textColor="#ecfb77">React</ListItem></Appear>
              <Appear><ListItem textColor="#ecfb77">Angular 1.5</ListItem></Appear>
              <Appear><ListItem textColor="#ecfb77">Angular 2</ListItem></Appear>
              <Appear><ListItem textColor="#ecfb77">Javascript || ES6/7</ListItem></Appear>
            </List>
          </Slide>
        {/* React */}
          <Slide transition={["fade"]} bgColor="background" textColor="text">
            <Heading>React</Heading>
            <br></br>
            <Code fit textColor="headingDark">$ git checkout 05-Reacting</Code>
          </Slide>
        {/* Bare bones config */}
          <Slide transition={["fade"]} bgColor="background">
            <Heading>Bare Config</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/bare-config.example")}
              margin="20px auto"
            />
          </Slide>
        {/* ES6/7 config */}
          <Slide transition={["fade"]} bgColor="background">
            <Heading>ES6/7 Config</Heading>
            <br></br>
            <Heading textSize={20}><Code>webpack.config.js</Code></Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/esnext-config.example")}
              margin="20px auto"
            />
            <Heading textSize={20}><Code>.babelrc</Code></Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/esnext-bashrc.example")}
              margin="20px auto"
            />
          </Slide>
        {/* React config */}
          <Slide transition={["fade"]} bgColor="background">
            <Heading>React Config</Heading>
            <br></br>
            <Heading textSize={20}><Code>webpack.config.js</Code></Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/react-config.example")}
              margin="20px auto"
            />
            <Heading textSize={20}><Code>.babelrc</Code></Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/react-bashrc.example")}
              margin="20px auto"
            />
          </Slide>
        {/* Credits */}
          <Slide transition={["zoom"]} bgColor="primary">            
            <Heading size={1} fit caps>
              Thank You!
            </Heading>
            <Text>github.com/Shinobi881</Text>
            <Text>Slides-credit: https://github.com/FormidableLabs/spectacle</Text>
          </Slide>          
        </Deck>
      </Spectacle>
    );
  }
}
