'use client';
const { createContext, useState } = require('react');

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [subName, setSubName] = useState('');
  const openModal = (subname) => {
    setSubName(subname);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        modalOpen,
        openModal,
        closeModal,
        subName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
