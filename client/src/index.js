import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "./providers/AuthProvider";
import 'semantic-ui-css/semantic.min.css'
import { TrackProvider } from './providers/TrackProvider';
import { PlaylistProvider } from './providers/PlaylistProvider';

ReactDOM.render(
  <AuthProvider>
    <PlaylistProvider>
      <TrackProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TrackProvider>
    </PlaylistProvider>
  </AuthProvider>
  , document.getElementById('root')
);
