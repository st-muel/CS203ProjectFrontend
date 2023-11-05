import { session } from "../concert/page";

interface props {
  sessions: session[];
  setCurrentSession: (session: session) => void;
}

export const SessionDropDown = ({ sessions, setCurrentSession }: props) => {
  return (
    <main>
      <select
        className="w-1/2 form-select text-black text-center"
        onChange={(e) => {
          const session = sessions.find(
            (session) => session.datetime === e.target.value
          );
          if (session) {
            setCurrentSession(session);
          }
        }}
      >
        {sessions.map((session) => (
          <option>{session.datetime}</option>
        ))}
      </select>
    </main>
  );
};
