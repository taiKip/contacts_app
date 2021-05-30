import React from 'react'
import useFetch from '../../CustomHooks/useFetch'
import Contact from '../Contact/Contact'

import classes from './Layout.module.css'
const Layout = () => {
    const {data:users,isLoading,error} = useFetch('https://jsonplaceholder.typicode.com/users')
    return (
        <div className={classes.layout}>
           <header className={classes.toolbar}>Users Api</header> 
           <main>
           {error && <p style={{ margin: "0 auto" }}>{error}</p>}
        {isLoading && <p style={{ margin: "0 auto" }}>Loading...</p>}
        {users &&
          users.map((user) => (            
            <Contact key={user.id} name={user.name} email={user.email} />
          ))}
           </main>
        
        </div>
    )
}

export default Layout
