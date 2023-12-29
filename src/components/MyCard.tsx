import cn from 'classnames';

export const MyCard = ({ children, active }: { children; active? }) => {
  return (
    <div className='group relative h-full'>
      <div
        className={cn(
          { active },
          'absolute -inset-1  rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-0 blur transition-all duration-300 ease-in-out group-hover:opacity-50  [&.active]:opacity-50'
        )}
      ></div>
      {children}
    </div>
  );
};
