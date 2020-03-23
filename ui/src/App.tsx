import React from 'react';
import {style} from 'typestyle';
import {UserSignupPage} from './ui/user-signup.page';
import "./index.css";
import {UserOrderPage} from './ui/user-order.page';

function App() {
    return (
        <div className={style({ margin: 16 })}>
            <UserOrderPage/>
        </div>
    );
}

export default App;
