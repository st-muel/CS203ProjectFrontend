import { Modal } from "antd";
import SigninForm from "./signin-form";
import { buttonVariants } from "./ui/button";
import { rc } from "../lib/utils";
import { useState } from "react";

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
        <SigninForm />
      </Modal>
    </>
  );
};

export default SignInModal;
