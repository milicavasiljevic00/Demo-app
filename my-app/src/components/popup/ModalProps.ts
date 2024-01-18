export interface ModalProps{
    open:boolean;
    onClose?: (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
    children: React.ReactNode;
}