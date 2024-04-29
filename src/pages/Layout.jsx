const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-darkblue overflow-auto w-full min-h-screen  relative grid place-content-center">
        {children}
      </div>
    </>
  );
};

export { Layout };
