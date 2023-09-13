import { Modal } from "antd"

interface props {
    open: boolean
    setOpen: (open: boolean) => void
}

const SignInModal = (props: props) => {
    return (
        <>
            <Modal
                footer={null}
                style={{
                    backgroundColor: "#17202E"
                }}
                bodyStyle={{
                    backgroundColor: "#17202E"
                }}
                closable={false}
                title={null}
                open={props.open}
                className="dark"
                width={1000}
            >
                <div className="flex flex-col items-center justify-center w-[200px] h-[300px]">
                    <input className="text" />

                    <button 
                        className="text-white"
                        onClick={() => props.setOpen(false)}
                    >
                        Close
                    </button>
                </div>
            </Modal>
        </>
    )
}

export default SignInModal