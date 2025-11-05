import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import "./App.css";

import Landing from "./pages/Landing/Landing";
import Browse from "./pages/Browse/Browse";
import NotFound from "./pages/NotFound/NotFound";

function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();
    
    if (loading) {
        return <div className="loading">Loading...</div>;
    }
    
    return user ? children : <Navigate to="/" />;
}

function PublicRoute({ children }) {
    const { user, loading } = useAuth();
    
    if (loading) {
        return <div className="loading">Loading...</div>;
    }
    
    return user ? <Navigate to="/home" /> : children;
}

function AppRoutes() {
    return (
        <div className="app-container">
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <PublicRoute>
                            <Landing />
                        </PublicRoute>
                    } 
                />
                <Route 
                    path="/home" 
                    element={
                        <ProtectedRoute>
                            <Browse />
                        </ProtectedRoute>
                    } 
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

function App() {
    return (
        <AuthProvider>
            <Router>
                <AppRoutes />
            </Router>
        </AuthProvider>
    );
}

export default App;
