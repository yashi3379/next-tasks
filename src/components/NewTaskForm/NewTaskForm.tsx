'use client';

import { FormState, createTask } from "@/actions/task";
import { useFormStatus } from "react-dom";
import { useFormState } from "react-dom";


const NewTaskForm = () => {
    const initialState: FormState = { error: "" };
    const [state, formAction] = useFormState(createTask, initialState);

    const SubmitButton = () => {
        const {pending} = useFormStatus();

        return (
            <button type="submit" className="w-full mt-8 py-2 px-4 bg-gray-800 text-white rounded-md
                     hover:bg-gray-700 font-semibold shadow-sm disabled:bg-gray-400" disabled={pending}>
                {pending ? "Creating..." : "Create"}
            </button>
        )
    }

    return (
        <div className="mt-10 mx-auto  w-full max-w-sm">
            <form action={formAction}>
                <div className="mt-6">
                    <label htmlFor="title" className="block text-sm font-medium">タイトル</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title"
                        className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shoadow-sm ring-1 ring-inset ring-gray-300"
                        required
                    />
                </div>
                <div className="mt-6">
                    <label htmlFor="description" className="block text-sm font-medium">説明</label>
                    <textarea
                        name="description"
                        id="description"
                        placeholder="Description"
                        className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shoadow-sm ring-1 ring-inset ring-gray-300"
                    ></textarea>
                </div>
                <div className="mt-6">
                    <label htmlFor="dueDate" className="block text-sm font-medium">期限</label>
                    <input
                        type="date"
                        name="dueDate"
                        id="dueDate"
                        min="2021-01-01"
                        max="2220-12-31"
                        className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shoadow-sm ring-1 ring-inset ring-gray-300"
                    />
                </div>
                <div className="mt-6">
                    <SubmitButton />
                </div>
                {state.error && <p className="text-red-500 text-sm mt-4">
                    {state.error}
                </p>}
            </form>
        </div>
    )
}

export default NewTaskForm