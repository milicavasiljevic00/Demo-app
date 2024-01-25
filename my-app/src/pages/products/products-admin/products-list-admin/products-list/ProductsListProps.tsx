import { ProductAdmin } from "../../../../../models/entities/ProductAdmin";

export interface ProductsListProps {
  products: ProductAdmin[];
  onEdit: () => void;
  onDelete: (id: number) => void;
}
