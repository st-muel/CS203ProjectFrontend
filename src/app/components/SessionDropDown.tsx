
interface props {
  sessions: any;
  setCurrentSession: (session: any) => void;
}

export const SessionDropDown = ({ sessions, setCurrentSession }: props) => {
  return (
    <main>
      <select
        className="w-1/2 form-select text-black text-center"
        onChange={(e) => {
          const session = sessions.find(
            (session: any) => session.datetime === e.target.value
          );
          if (session) {
            setCurrentSession(session);
          }
        }}
      >
        {sessions.map((session: any) => (
          <option>{new Date(session.datetime).toString()}</option>
        ))}
      </select>
    </main>
  );
};
