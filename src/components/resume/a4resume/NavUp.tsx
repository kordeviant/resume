"use client";
import LinkTransition from '@/components/LinkTransition';
import React from 'react';
import { CardHeader, Card } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { MyCard } from '@/components/MyCard';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import { TbHomeMove } from 'react-icons/tb';

export const NavUp = () => {
    const pathname = usePathname();

    return <div className="nav-up flex gap-2 p-0">
        <LinkTransition href="/">
            <Card className="home-btn relative group-hover:bgapply rounded-md border shadow-lg overflow-hidden transition-all duration-300 ease-in-out">
                <TbHomeMove style={{ transform: 'scaleX(-1)' }} />
            </Card>
        </LinkTransition >
        <LinkTransition href="/front-end">
            <MyCard active={pathname === '/front-end'}>
                <Card className={cn({ bgapply: pathname === '/front-end' }, "relative group-hover:bgapply  rounded-md border shadow-lg overflow-hidden transition-all duration-300 ease-in-out")}>
                    <CardHeader className="p-0  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:via-blue-500 group-hover:to-purple-500 group-hover:text-transparent  transition-all duration-500 ease-in-out text-slate-400 bg-clip-text">

                        <h2 className="text-sm leading-0  group-hover:font-bold">Frontend Developer</h2>
                    </CardHeader>
                </Card>
            </MyCard>
        </LinkTransition>
        <LinkTransition className={`link ${pathname === '/back-end' ? 'active' : ''}`} href="/back-end">
            <MyCard active={pathname === '/back-end'}>
                <Card className={cn({ bgapply: pathname === '/back-end' }, "relative  group-hover:bgapply rounded-md border shadow-lg overflow-hidden transition-all duration-300 ease-in-out")}>
                    <CardHeader className="p-0  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:via-blue-500 group-hover:to-purple-500  group-hover:text-transparent transition-all duration-500 ease-in-out  text-slate-400 bg-clip-text">

                        <h2 className="text-sm leading-0  group-hover:font-bold">Backend Developer</h2>
                    </CardHeader>
                </Card>
            </MyCard>
        </LinkTransition >
        <LinkTransition className={`link ${pathname === '/dev-ops' ? 'active' : ''}`} href="/dev-ops">
            <MyCard active={pathname === '/dev-ops'}>
                <Card className={cn({ bgapply: pathname === '/dev-ops' }, "relative  group-hover:bgapply rounded-md border shadow-lg overflow-hidden transition-all duration-300 ease-in-out")}>
                    <CardHeader className="p-0  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:via-blue-500 group-hover:to-purple-500  group-hover:text-transparent transition-all duration-500 ease-in-out  text-slate-400 bg-clip-text">

                        <h2 className="text-sm leading-0  group-hover:font-bold">Devops Engineer</h2>
                    </CardHeader>
                </Card>
            </MyCard>
        </LinkTransition>
    </div >;
};
