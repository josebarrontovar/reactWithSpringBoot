import React from 'react';
import ReactDOM from 'react-dom/client';
import { Contador } from './components/Contador';
import { HiddeMessage } from './components/HiddeMessage';
import { ListTask } from './components/listTask';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Contador/>
        <HiddeMessage/>
        <ListTask/>
    </React.StrictMode>
)