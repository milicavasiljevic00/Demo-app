import { UserForAdmin } from "../../../models/entities/UserForAdmin";

export interface UsersListProps {
    users: UserForAdmin[];
    onEdit: () => void;
    onDelete: (id: number) => void;
}