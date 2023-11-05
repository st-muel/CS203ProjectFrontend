import { Modal } from "antd";
import SignupForm from "./SignUpForm";

interface props {
  openSignup: boolean;
  setSignupOpen: (open: boolean) => void;
}

const SignUpModal = (props: props) => {
  const handleCancel = () => {
    props.setSignupOpen(false);
  };

  return (
    <>
      <Modal
        footer={null}
        closable={true}
        onCancel={handleCancel}
        title={null}
        open={props.openSignup}
        className="shadow-md"
      >
        <SignupForm setOpen={props.setSignupOpen} />
      </Modal>
    </>
  );
};

export default SignUpModal;