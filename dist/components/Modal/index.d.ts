interface ModalProps {
    visibleBool: boolean;
    injectedText: string;
    closeIsClicked?: (isClicked: boolean) => void;
}
export declare function Modal({ visibleBool, injectedText, closeIsClicked, }: ModalProps): import("react/jsx-runtime").JSX.Element;
export {};
