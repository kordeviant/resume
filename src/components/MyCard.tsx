import cn from 'classnames';

export const MyCard = ({ children, active }: { children, active?}) => {
    console.log(active);

    return <div className="group relative">
        <div className={cn({ active }, "absolute [&.active]:opacity-50  opacity-0 -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 blur transition-all ease-in-out duration-300  group-hover:opacity-50")} ></div>
        {children}
    </div >;
};
