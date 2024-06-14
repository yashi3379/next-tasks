const TaskCard = () => {
    return (
        <div className="w-64 h-52 p-4 bg-white rounded-md shadow-md 
    flex flex-col justify-between">
            <header>
                <h1 className="text-lg font-semibold">タイトル</h1>
                <div className="mt-1 text-sm line-clamp-3" >タスクの説明</div>
            </header>
            <div>
                <div className="text-sm">2024-12-31</div>
                <div className="flex justify-between items-center">
                    <div className={`mt-1 text-sm py-1 w-24 text-center
                 text-white rounded-full shadow-sm ${true ? 'bg-green-500': 'bg-red-500'}`}>
                        {true ? 'Completed' : 'InComplete'}
                    </div>
                    <div className="flex gap-4">
                        <div>編集</div>
                        <div>削除</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskCard