import React, { Children, createContext } from 'react';

export const AuthContext = createContext(null);
const AuthProvider = () => {
    const authInfo={

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;