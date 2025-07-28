const Wrapper = ({ children, newClass = false }) => {
    return (
      <div className={`w-11/12 mx-auto px-5 md:px-10 2xl:w-3/4 ${newClass}`}>
          {children}
      </div>
    )
  }
  
  export default Wrapper