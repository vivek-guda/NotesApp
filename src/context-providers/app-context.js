import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isPinned, setIsPinned] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [otherNotes, setOtherNotes] = useState([]);
  const [pinnedNotes, setPinnedNotes] = useState([]);
  return (
    <AppContext.Provider
      value={{
        isPinned,
        setIsPinned,
        inputFocused,
        setInputFocused,
        title,
        setTitle,
        text,
        setText,
        otherNotes,
        setOtherNotes,
        pinnedNotes,
        setPinnedNotes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => useContext(AppContext);

export { AppProvider, useApp };
