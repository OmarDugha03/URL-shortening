'use client'
import { useRouter } from 'next/navigation'
type links = {
  id: string
}
const DeleteLink = ({ id }: links) => {
  const router = useRouter()
  const deleteLink = async () => {
    try {
      const res = await fetch(`${process.env.URL}/api/link?id=${id}`, {
        method: 'DELETE'
      })
      if (res.ok) {
        router.refresh()
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div key={id}>
      <button
        onClick={deleteLink}
        className='h-12 w-20 rounded-lg bg-red-500 text-white'
      >
        Delete
      </button>
    </div>
  )
}

export default DeleteLink
