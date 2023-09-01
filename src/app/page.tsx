import Retrieve from '@/retrieve'
import Provyder from '../provyder'
import Place from '@/Place'
export default function Home() {
  return (
    <div className=' max-w-7xl bg-gray-200 m-auto h-full px-4'>
      <h1 className='text-4xl font-sans text-center py-10'>Api Todo</h1>
        <Provyder>
      <Place/>
        <h2 className='text-4xl font-sans text-center py-10 underline'>List</h2>
          <Retrieve/>
        </Provyder>
          
    </div>
  )
}
