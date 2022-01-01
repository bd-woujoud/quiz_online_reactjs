import React, { createContext, useState, useEffect } from 'react'
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [isauth, setisauth] = useState(false)
    const [role, setrole] = useState('visitor')
    const [isLoaded, setisLoaded] = useState(false)
    useEffect(async () => {

        await fetch('http://localhost:5000/admin/isauth', { credentials: 'include' })

            .then(res => {
                res.json().then(data => {
                  
                    if (res.status === 200) {
                        setrole('admin')
                        setisauth(true)
                    }
                    setisLoaded(true)
                }
                )
            }
            )
    }, [])
    return (
        <React.Fragment>
            {
                isLoaded ?
                    (<AuthContext.Provider value={{ role, setrole, isauth, setisauth }}>
                        {children}
                    </AuthContext.Provider>) :
                    <p>...loading</p>
            }
        </React.Fragment>
    )
}
export default AuthProvider
