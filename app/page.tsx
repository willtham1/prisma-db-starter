import { db } from "@/lib/db";

export default async function Home() {

  // This will fetch all or the tasks from the database
  const tasks = await db.task.findMany(
    // You can also pass a where clause to filter the tasks
    // {
    //   where: {
    //     title: {
    //       contains: "willtham"
    //     }
    //   }
    // }
  );

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>    
  );
}
