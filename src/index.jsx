import React from 'react';
import { createRoot } from 'react-dom/client';

import '../assets/stylesheets/application.scss';

const Hello = ({ name }) => {
  return (
    <div>
      Hello,
      {name}
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
if (root) {
  root.render(<Hello name="World" />);
}
