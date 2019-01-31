import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
    const [resource, setResource] = useState('posts'); //array destructuring
    //useState hooks!!

    //setResource seria setState, hace que renderice el componente nuevamente
    return(
        <div>
            <UserList />
            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('todos')}>Todos</button>
            </div>
            <ResourceList resource={resource}/>
        </div>
    );
}

export default App;