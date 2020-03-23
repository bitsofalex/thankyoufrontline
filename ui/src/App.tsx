import React from 'react';
import {UserSignupPage} from './ui/user-signup.page';
import {style} from 'typestyle';


function App() {
    return (
        <div className={style({ margin: 16 })}>
            <div>
                <UserSignupPage/>
            </div>
        </div>
    );
}

export default App;
