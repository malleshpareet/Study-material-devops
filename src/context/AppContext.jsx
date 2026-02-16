import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [completedStages, setCompletedStages] = useState(() => {
        const saved = localStorage.getItem('devops-progress');
        return saved ? JSON.parse(saved) : [];
    });

    const [searchQuery, setSearchQuery] = useState('');
    const [filterLevel, setFilterLevel] = useState('All');

    useEffect(() => {
        localStorage.setItem('devops-progress', JSON.stringify(completedStages));
    }, [completedStages]);

    const toggleStage = (stageId) => {
        setCompletedStages(prev =>
            prev.includes(stageId)
                ? prev.filter(id => id !== stageId)
                : [...prev, stageId]
        );
    };

    return (
        <AppContext.Provider value={{
            completedStages,
            toggleStage,
            searchQuery,
            setSearchQuery,
            filterLevel,
            setFilterLevel
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext);
