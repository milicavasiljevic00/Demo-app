import { UserForAdmin } from "../../../models/entities/UserForAdmin";

export interface UserCardProps {
    userProp: UserForAdmin;
    onEdit: () => void;
    onDelete: (id: number) => void;
}