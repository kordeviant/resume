import { PrePathContext } from "@/app/(client)/PrePathContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useRef } from "react";

function LinkTransition(props) {
    const router = useRouter();
    const pathname = usePathname();
    const { applyRef } = useContext(PrePathContext);


    const handleClick = (e) => {
        if (pathname == props.href) return;
        e.preventDefault();

        const changeRoute = async () => {
            const prm = new Promise((res, rej) => {
                applyRef.current = res;
            })
            router.push(props.href);
            await prm;
            return 2;
        }
        if (!document["startViewTransition"]) {
            changeRoute()
            // browser does not support view transition. Continue the default behavior.
            return;
        } else {
            // browser supports view transition. Animate the transtion.
            const x = e.clientX
            const y = e.clientY
            const endRadius = Math.hypot(
                Math.max(x, innerWidth - x),
                Math.max(y, innerHeight - y),
            )

            //@ts-ignore
            const transition = document.startViewTransition(async () => {
                await changeRoute();
                return 2
            });
            transition.ready.then(() => {
                console.log('rdy');

                const clipPath = [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${endRadius}px at ${x}px ${y}px)`,
                ]
                document.documentElement.animate(
                    {
                        clipPath: clipPath,
                    },
                    {
                        duration: 600,
                        easing: 'ease-in-out',
                        pseudoElement: '::view-transition-new(root)',
                    },
                )
            })
        }
    };

    return (
        <Link onClick={handleClick} {...props}>
            {props.children}
        </Link>
    );
}
export default LinkTransition;