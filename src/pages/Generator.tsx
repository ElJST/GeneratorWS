import { Outlet } from 'react-router-dom';

export const Generator = () => {
  return (
    <div className="w-full min-h-[83.333333%] flex items-center justify-center ">
      <section className="w-3/4 h-5/6 z-50 backdrop-blur-sm rounded-2xl border-1 border-black/30 flex items-center flex-col">
        <Outlet />
      </section>
    </div>
  )
}
