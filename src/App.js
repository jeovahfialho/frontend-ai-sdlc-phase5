
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
    toast.info("Slot Showdown: Participate now to win exciting prizes!");
};

const App = () => (
    <div>
        <button onClick={notify}>Show Notification</button>
        <ToastContainer />
    </div>
);

export default App;
