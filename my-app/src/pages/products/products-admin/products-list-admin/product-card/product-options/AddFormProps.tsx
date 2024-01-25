import { ProductAdmin } from "../../../../../../models/entities/ProductAdmin";

export interface AddFormProps {
  onAdd: (newProduct: ProductAdmin) => void;
}
