import { createContext, useContext, useState } from "react";

type SnackbarContextType = {
    message: string,
    isSuccessful: boolean,
    isDisplayed: boolean,
    display: (message: string, success: boolean) => void,
    close: () => void,
};

const SnackbarContext = createContext<SnackbarContextType | null>(null);

interface AuthProviderProps {
    children: React.ReactNode
}

const SnackbarProvider = ({ children }: AuthProviderProps) => {
    const [message, setMessage] = useState<string>("");
    const [isDisplayed, setIsDisplayed] = useState<boolean>(false);
    const [isSuccessful, setIsSuccessful] = useState<boolean>(false);
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

    const display = (message: string, success: boolean) => {
        setMessage(message);
        setIsDisplayed(true);
        setIsSuccessful(success);
        setTimer(prev => {
            if (prev) clearTimeout(prev);
            return setTimeout(() => close(), 3500); // close snackbar after 3 seconds
        }); 
    };

    const close = () => {
        setTimer(prev => {
            if (prev) clearTimeout(prev);
            return null;
        });
        setIsDisplayed(false);
    };

    return (
        <SnackbarContext.Provider value={{ message, isSuccessful, isDisplayed, display, close }}>
            {children}
        </SnackbarContext.Provider>
    );
};

const useSnackbar = () => {
  return useContext(SnackbarContext);
};

export { SnackbarProvider, useSnackbar }