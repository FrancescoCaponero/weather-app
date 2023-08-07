function Layout({children}) {
  return (
    <div className=" 
    w-screen 
    h-screen
    flex 
    justify-center 
    items-center
    min-w-screen
    bg-pattern">
      <div className="
      bg-pattern-card
      md:rounded-3xl 
      md:max-w-[500px] 
      md:h-[700px]
      h-screen
      w-screen
      vertical-center-flex
      relative
      ">
      {children}
      </div>
    </div>
  )
}

export default Layout