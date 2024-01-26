import { ProductAdmin } from "../../../../../../models/entities/ProductAdmin";

export interface EditFormProps {
  product: ProductAdmin;
  onEdit: () => void;
}
