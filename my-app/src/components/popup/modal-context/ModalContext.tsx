import { ReactElement, ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";
import Modal from "../Modal";

export interface IModal {
    childElement?: React.ReactNode;
    isOpen: boolean;
    open: (element: React.ReactNode) => void;
    close: () => void;
}

export const ModalContext = createContext<IModal>({ childElement: undefined, isOpen: false, open: (element: React.ReactNode) => { }, close: () => { } });

const useModalContext = () => useContext(ModalContext)

const ModalContextProvider = ({ children }: any) => {

    const [childElement, setChildElement] = useState<React.ReactNode | undefined>(undefined);

    const isOpenPrim = useMemo(() => {
        return !!childElement
    }, [childElement])

    function open(element: React.ReactNode) {
        setChildElement(element);
    }

    function close() {
        setChildElement(undefined);
    }

    return (
        <ModalContext.Provider value={{ childElement, isOpen: isOpenPrim, open, close }}>
            {children}
            {isOpenPrim && childElement && <Modal>{childElement}</Modal>}
        </ModalContext.Provider>
    )
}
export { useModalContext, ModalContextProvider }