import { UserForAdmin } from "../../../../models/entities/UserForAdmin";

export interface DeleteUserFormProps {
    user: UserForAdmin;
    onDelete: (id: number) => void;
}