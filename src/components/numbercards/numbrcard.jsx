import '../numbercards/numbrcard.css'
// section number cards
export function NumberCard({ first, second, third }) {
    return (
        <div className=' d-flex p-2'>
                <h1 className='direct1' data-aos="flip-left">{first}</h1>
            <div className='text-danger w-75 pt-2' data-aos="fade-up">
                <h3>{second}</h3>
                <p className='text-secondary fs-6 pt-1'>{third}</p>
            </div>
        </div>
    )
}
