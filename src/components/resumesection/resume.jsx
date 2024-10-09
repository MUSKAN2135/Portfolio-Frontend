import './resume.css'

export default function Resume(props) {
  return (
    <section className="container numbered-section">
      <div className='row'>
        <div className="numbered-card position-relative d-flex align-items-center">
          <div className="number fs-6 mr-4">{props.first}
          </div>
          <div className="year px-4">
            <p className='m-0 py-2'>{props.second}</p>
          </div>
        </div>
        <div className="section-content px-4 pb-2">
          <div className="section-heading p-3">
            <h6 className="mb-2 mt-2 fs-5">{props.third}</h6>
            <h6 className="mb-2 mt-2 text-danger fs-6">{props.fourth}</h6>
            <p className='pb-3 pt-3 ls-6 text-secondary'>
              {props.fifth}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
