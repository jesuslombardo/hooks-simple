import React from 'react';
import useResorces from './useResources';

const UserList = () => {
    const users = useResorces('users');
    return (
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    );
}

export default UserList;