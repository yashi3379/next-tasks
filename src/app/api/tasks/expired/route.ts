import { TaskDocument, TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {

    const currentDate = new Date().toLocaleDateString('jp-JP',{
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).replace(/\//g,'-');

    try {
        await connectDb();
        const expiredTasks: TaskDocument[] = await TaskModel.find({
            isCompleted: false,
            dueDate:{$lt: currentDate},
        });
        return NextResponse.json(
            { message: "タスクの取得に成功", tasks: expiredTasks }
        );
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { message: "タスクの取得に失敗しました" },
            { status: 500 }
        );
    }
};

export const dynamic = 'force-dynamic'