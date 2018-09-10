import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import ControllPanel from './ControllPanel';
// import LyricsPanel from './LyricsPanel';

function App() {
    return (
        <React.Fragment>
            <CssBaseline>
                <div style={{
                    width: '80vw',
                    margin: '0 auto'
                }}>
                    <ControllPanel></ControllPanel>
                    {/* <LyricsPanel></LyricsPanel> */}
                </div>
            </CssBaseline>
        </React.Fragment>
    );
}

export default App;