import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import { useState } from 'react';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };
  return (
    <div className="root">
      <Head>
        <title>GPT-3 Writer | buildspace</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Generate some posts!</h1>
          </div>
          <div className="header-subtitle">
            <h2>input the title for your post, and we will generate the rest.</h2>
          </div>
        </div>
        <div className="prompt-container">
          <textarea placeholder="start typing here" className="prompt-box" value={userInput}
  onChange={onUserChangedText} />
  <div className="prompt-buttons">
    <a className="generate-button" onClick={null}>
      <div className="generate">
        <p>Generate</p>
      </div>
    </a>
    </div>
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://raunakrajrauniyar.com.np"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with bullit</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
