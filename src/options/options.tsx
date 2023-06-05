import React from 'react';
import { createRoot } from 'react-dom/client';
import './options.scss';

const App = () => {
  return (
    <div>
      <img src="icon.png" />
    </div>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)