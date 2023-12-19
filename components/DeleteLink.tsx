"use client";
import { useRouter } from "next/navigation";
type links = {
  id: string;
};
const DeleteLink = ({ id }: links) => {
  const router = useRouter();
  const deleteLink = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/link?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div key={id}>
      <button
        onClick={deleteLink}
        className="w-20 h-12 text-white bg-red-500 rounded-lg">
        Delete
      </button>
    </div>
  );
};

export default DeleteLink;
