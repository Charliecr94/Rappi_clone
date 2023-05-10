import React, { useState, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [keyword, setKeyword] = useState("san franciscoo");
    
    const onSearch= (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
        console.log(searchKeyword);
        if (!searchKeyword.length){
            return; //Dont do anything
        }
        locationRequest(searchKeyword.toLowerCase())
        .then(locationTransform)
        .then((result) => {
            setIsLoading(false);
            setLocation(result);
            console.log(result);
        })
        .catch((err) => {
            setIsLoading(false);
            setError(err);
            console.log(err);
        });
};

return (
    <LocationContext.Provider 
        value={{
            isLoading,
            error,
            location,
            search: onSearch,
            keyword,
        }}
        >
        {children}
    </LocationContext.Provider>
    );
};