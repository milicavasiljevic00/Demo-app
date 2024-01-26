import { ProductAdmin } from "../../../../../models/entities/ProductAdmin";

export interface ProductCardProps {
  product: ProductAdmin;
  onEdit: () => void;
  onDelete: (id: number) => void;
}
