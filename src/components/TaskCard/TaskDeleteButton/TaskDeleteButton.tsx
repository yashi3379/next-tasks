'use client';

import { FormState, deleteTask } from "@/actions/task";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { FaTrash } from "react-icons/fa";

interface TaskDeleteButtonProps {
    id: string;
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {
    const deleteTaskWithId = deleteTask.bind(null, id);
    const initialState: FormState = { error: '' };
    const [state, formAction] = useFormState(deleteTaskWithId, initialState);

    useEffect(() => {
        if (state && state.error !== '') {
            alert(state.error);
        }
    }, [state])

    const SubmitButton = () => {
        const { pending } = useFormStatus();
        return (
            <button type="submit" disabled={pending}
                className="hover:text-red-700 
            cursor-pointer text-lg disabled:text-red-400"
            >
                <FaTrash />
            </button>
        )

    }

    return (
        <form action={formAction}>
            <SubmitButton />
        </form>
    )
}

export default TaskDeleteButton