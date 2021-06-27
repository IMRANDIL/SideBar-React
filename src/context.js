import React, { useState, useContext } from 'react'


const AppContext = React.createContext();


const AppProvider = ({children})=>{
    const [isSideBar, setIsSideBar] = useState(false);
    const [ismodalOpen, setIsmodalOpen] = useState(false);


const openSideBar = () =>{
    setIsSideBar(true);
}


const closeSideBar = () =>{
    setIsSideBar(false);
}





const openmodal = () =>{
    setIsmodalOpen(true);
}


const closeModal = () =>{
    setIsmodalOpen(false);
}









    return <AppContext.Provider value={{
        isSideBar,ismodalOpen,openSideBar,openmodal,closeModal,closeSideBar
    }}>
        {children}
    </AppContext.Provider>
}

// custom hook..
export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}