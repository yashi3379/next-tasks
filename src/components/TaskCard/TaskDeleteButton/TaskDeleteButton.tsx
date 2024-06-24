import { FaTrash } from "react-icons/fa";

interface TaskDeleteButtonProps {
    id: string;
}

const TaskDeleteButton:React.FC<TaskDeleteButtonProps> = ({id}) => {
    return (
        <form action="">
            <button type="submit" className="hover:text-red-700 cursor-pointer text-lg">
                <FaTrash />
            </button>
        </form>
    )
}

export default TaskDeleteButton