import { ProductAdmin } from "../../../../../../models/entities/ProductAdmin";

export interface DeleteFormProps{
    product: ProductAdmin;
    onDelete: (id:number) => void;
}