import {prisma} from "@/lib/prisma"
import Link from "next/link";

export default async function Home() {
  const posts = await prisma.post.findMany({})
  return (
    <div className="p-4">
          {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="border-b max-w-10 flex items-center justify-between bg-gray-300 border-gray-300 py-4">
          <Link href={`/${post.id}`} className="text-blue-500 hover:underline text-lg font-semibold">
            {post.title}
          </Link>
         </div>
        ))
      ) : (
        <p className="text-gray-500">No posts available.</p>
      )}
    </div>
  );
}
