import { INavigationItem, INavigationProviderProps } from "@typesrc/context/Navigation";
import { NavigationContext } from "./Navigation";
import { useState } from "react";
import { defaultRoutes } from "./NavigationRoutes";

export default function NavigationProvider({
    children
}: INavigationProviderProps) {

    const [items, setItems] = useState<INavigationItem[]>(defaultRoutes);
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => setNavbarOpen(!navbarOpen);
    const closeNavbar = () => setNavbarOpen(false);
    const openNavbar = () => setNavbarOpen(true);

    return (
        <NavigationContext.Provider
            value={{
                items,
                navbarOpen,
                toggleNavbar,
                closeNavbar,
                openNavbar
            }}
        >
            {children}
        </NavigationContext.Provider>
    );
}