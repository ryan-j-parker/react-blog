import React from 'react';
import { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  
  return (
    <main>
      <Preview title={title} />
      <Editor title={title} setTitle={setTitle} />
    </main>
  );
}
