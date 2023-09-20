import { Modal } from "antd";
import SigninForm from "./SignInForm";

interface props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SignInModal = (props: props) => {
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
        <SigninForm setOpen={props.setOpen} />
      </Modal>
    </>
  );
};

export default SignInModal;
