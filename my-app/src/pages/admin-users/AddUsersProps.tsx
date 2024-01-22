import { UserForAdmin } from "../../models/entities/UserForAdmin";

export interface AddUsersProps {
    onAdd: (newUser: UserForAdmin) => void;
}