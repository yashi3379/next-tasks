const EditTaskForm = () => {
    return (
        <div className="mt-10 mx-auto  w-full max-w-sm">
            <form action="">
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
                <div className="mt-6 flex items-center">
                    <input type="checkbox" name="isCompleted" id="isCompleted" className="mr-2 w-4 h-4" />
                    <label htmlFor="completed" className="ml-2 text-sm font-medium">タスクを完了する</label>
                </div>
                <div className="mt-6">
                    <button type="submit" className="w-full mt-8 py-2 px-4 bg-gray-800 text-white rounded-md
                     hover:bg-gray-700 font-semibold shadow-sm">
                        Edit
                    </button>
                </div>

            </form>
        </div>
    )
}

export default EditTaskForm