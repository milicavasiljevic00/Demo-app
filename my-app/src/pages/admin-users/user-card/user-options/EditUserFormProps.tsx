import { UserForAdmin } from "../../../../models/entities/UserForAdmin";

export interface EditUserFormProps {
    user: UserForAdmin;
    onEdit: () => void;
}