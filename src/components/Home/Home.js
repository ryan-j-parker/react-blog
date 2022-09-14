import React from 'react';
import { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [font, setFont] = useState('');
  const [align, setAlign] = useState('');
  const [text, setText] = useState('');

  return (
    <main>
      <Preview title={title} subtitle={subtitle} text={text} font={font} align={align} />
      <Editor title={title} setTitle={setTitle} subtitle={subtitle} setSubtitle={setSubtitle} font={font} setFont={setFont} align={align} setAlign={setAlign} text={text} setText={setText}/>
    </main>
  );
}
