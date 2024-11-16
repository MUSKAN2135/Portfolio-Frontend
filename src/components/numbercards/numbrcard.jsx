export function NumberCard({ first, second}) {
    return (
        <div className='flex items-start m-2 p-2'>
        <div className='w-96 md:ml-4 ml-2' data-aos="fade-up">
          <h3 className="text-medium text-md text-blue-900">{first}</h3>
          <p className='font-thin ls-2 pt-1'>{second}</p>
        </div>
      </div>
    )
}
