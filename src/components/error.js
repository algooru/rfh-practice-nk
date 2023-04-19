export const ErrorMessage = ({ message }) => {
  if (!message || typeof message !== 'string') return;
  return <p className="my-2 text-sm  text-start text-red-500">{message}</p>;
};

export default ErrorMessage;
