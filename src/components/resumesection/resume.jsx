import './resume.css'

export default function Resume(props) {
  return (
    <section className="container">
      <div className=" numbered-section flex justify-start md:flex-row items-start ">
        <div className="flex items-center relative">
          <div className="number text-lg mr-4">{props.first}</div>
        </div>
        <div className="section-content p-8 ">
          <div className="section-heading">
            <p>{props.second}</p>
            <h6 className="text-lg font-light">{props.third}</h6>
            <h6 className="text-yellow-500 text-sm">{props.fourth}</h6>
            <p className="text-sm text-gray-500 w-100">{props.fifth}</p>
          </div>
        </div>
      </div>
    </section>

  );
};
