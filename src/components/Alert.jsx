const Alert = ({ type, text }) => {
  return (
    <div className='with-fixed with-dark'>
      <div
        className='with-light with-quarter with-center'
        role='alert'
      >
        <p
          className={`rounded-full ${
            type === "danger" ? "bg-red-500" : "bg-blue-500"
          } uppercase px-2 py-1 text-xs font-semibold mr-3`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className='mr-2 text-left'>{text}</p>
      </div>
    </div>
  );
};

export default Alert;
