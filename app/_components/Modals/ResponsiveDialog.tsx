type Props = {
  heading: string;
  message: string;
  id?: string;
};

const ResponsiveDialog = ({ heading, message, id }: Props) => {
  return (
    <dialog id={id} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{heading}</h3>
        <p className="py-4">{message}</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-primary">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ResponsiveDialog;
