import { ProductAdmin } from "../../../../../../models/entities/ProductAdmin";

export interface DeleteFormProps{
    product: ProductAdmin;
    onClose: () => void;
    onDelete: (id:number) => void;
}