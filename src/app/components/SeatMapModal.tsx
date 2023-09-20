import { Modal } from "antd";

interface props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SeatMapModal = (props: props) => {
  const handleCancel = () => {
    props.setOpen(false);
  };

  return (
    <>
      <Modal
        footer={null}
        closable={true}
        onCancel={handleCancel}
        title={null}
        open={props.open}
        className="shadow-md"
      >
        <img className="object-contain h-100 w-100 md:object-scale-down bg-stone-600"
        src="/seatmap.jpeg"></img>
      </Modal>
    </>
  );
};

export default SeatMapModal;
