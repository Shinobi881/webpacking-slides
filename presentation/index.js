// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
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
  textDark: "#120a3d",


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
        {/* Why Webpack */}
          <Slide transition={["fade"]} bgColor="bgLight" textColor="textDark">
          <Image src={images.webpack.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={1} fit caps lineHeight={1} textColor="text">
              Why Webpack?
            </Heading>
            <Image src={images.webpack.replace("/", "")} margin="0px auto 40px" height="293px"/>              
          </Slide>
        {/* React Ecosystem */}
          <Slide transition={["fade"]} bgColor="background" textColor="text">
            <Heading caps>React Ecosystem</Heading>
            <List>
              <Appear><ListItem>React</ListItem></Appear>
              <Appear><ListItem>Redux</ListItem></Appear>
              <Appear><ListItem>ES6/7</ListItem></Appear>
              <Appear><ListItem>Webpack</ListItem></Appear>
              <Appear><ListItem>Babel</ListItem></Appear>
              <Appear><ListItem>Your favorite testing suite</ListItem></Appear>
              <Appear><ListItem>Your favorite preprocessor</ListItem></Appear>
              <Appear><ListItem>RxJS</ListItem></Appear>
              <Appear><ListItem>A million other things </ListItem></Appear>
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
              <Appear><ListItem>CommonJS</ListItem></Appear>
              <Appear><ListItem>Modularized Code</ListItem></Appear>
              <Appear><ListItem>Hot Module Replacement</ListItem></Appear>
              <Appear><ListItem>Bundling code</ListItem></Appear>
              <Appear><ListItem>Transpiling</ListItem></Appear>
              <Appear><ListItem>Awesome for Component Libraries (React)</ListItem></Appear>
            </List>
          </Slide>
        {/* Let's get started */}
          <Slide transition={["fade"]} bgColor="background" textColor="text">
            <Heading caps>Let's Get It Started</Heading>            
          </Slide>
        {/* Let's get started */}
          <Slide transition={["fade"]} bgColor="background" textColor="text">
            <Heading>CommonJS</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/commonjs.example")}
              margin="20px auto"
            />
          </Slide>
        {/* Use Cases */}
          <Slide transition={["zoom"]} bgColor="primary">
            
            <Heading size={1} fit caps>
              A ReactJS Presentation Library
            </Heading>
            <Heading size={1} fit caps textColor="black">
              Where You Can Write Your Decks In JSX
            </Heading>
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text bold caps textColor="tertiary">View on Github</Text>
            </Link>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
