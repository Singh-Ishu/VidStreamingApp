import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if user is logged in from localStorage
        const savedUser = localStorage.getItem("ultflix_user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // For demo purposes, accept any email/password
            const userData = {
                id: Date.now(),
                email: email,
                name: email.split("@")[0]
            };
            
            setUser(userData);
            localStorage.setItem("ultflix_user", JSON.stringify(userData));
            return { success: true };
        } catch (error) {
            return { success: false, error: "Login failed" };
        }
    };

    const signup = async (email, password, confirmPassword) => {
        try {
            if (password !== confirmPassword) {
                return { success: false, error: "Passwords don't match" };
            }

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const userData = {
                id: Date.now(),
                email: email,
                name: email.split("@")[0]
            };
            
            setUser(userData);
            localStorage.setItem("ultflix_user", JSON.stringify(userData));
            return { success: true };
        } catch (error) {
            return { success: false, error: "Signup failed" };
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("ultflix_user");
    };

    const value = {
        user,
        login,
        signup,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}