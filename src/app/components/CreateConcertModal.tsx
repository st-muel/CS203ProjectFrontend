import { Modal } from "antd";
import SigninForm from "./SignInForm";

interface props {
  open: boolean;
  setOpen: (open: boolean) => void;
  setConcerts: (concerts: any) => void;
}

const CreateConcertModal = (props: props) => {
  const handleCancel = () => {
    props.setOpen(false);
  };

  const createConcert = () => {
    props.setConcerts((prev: any) => {
        return [
            ...prev,
            {
            title: "Taylor Swift ERAS Concert",
            image:
                "https://static.ticketmaster.sg/images/activity/23_vibes2023_7838b3ee8f09a88967c31166a4c6c907.png",
            },
        ];
    })

    props.setOpen(false);
  }

  return (
    <>
        <Modal
            footer={null}
            closable={true}
            onCancel={handleCancel}
            title={null}
            open={props.open}
        >
            <div className="relative flex flex-col items-center justify-center">
                <div className="w-full p-6 bg-white rounded-md lg:max-w-xl">
                    <h1 className="text-3xl font-bold text-center text-gray-700">Create Concert</h1>
                    <form className="flex flex-col gap-4 mt-6">
                        <div>
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Concert Title
                            </label>
                            <input
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div>
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Concert Image URL
                            </label>
                            <input
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div>
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Ballot Start
                            </label>
                            <input
                                type="datetime-local"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div>
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Ballot End
                            </label>
                            <input
                                type="datetime-local"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                    </form>
                </div>
				
				<div className="relative flex items-center justify-center w-full mt-4 mb-3">
					<button 
                        className="absolute px-5 px-3 py-2 bg-indigo-600 text-white rounded-md transition hover:bg-indigo-500"
                        onClick={createConcert}
                    >
                        Create
                    </button>
				</div>
            </div>
        </Modal>
    </>
  );
};

export default CreateConcertModal;
