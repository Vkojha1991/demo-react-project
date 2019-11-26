import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Header';
import Switches from './common/Switches';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    {/* Header start */}
                    <Header />
                    {/* Header End */}

                    <main className="main-content clearfix">
                    
                    <Switches />

                    </main>

                    {/* Footer start */}
                    <Footer />
                    {/* Footer End */}
                </Router>
    
            </div>
        );
    }
}
    
export default App;
