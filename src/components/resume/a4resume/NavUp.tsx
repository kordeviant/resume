'use client';
import LinkTransition from '@/components/LinkTransition';
import React from 'react';
import { CardHeader, Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MyCard } from '@/components/MyCard';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import { TbHomeMove } from 'react-icons/tb';

export const NavUp = () => {
  const pathname = usePathname();

  return (
    <div className='nav-up flex gap-2 p-0'>
      <LinkTransition href='/'>
        <Card
          className='home-btn group-hover:bgapply relative overflow-hidden rounded-md border
            text-slate-400 shadow-lg transition-all duration-300 ease-in-out
            hover:text-black'
        >
          <TbHomeMove
            style={{
              transform: 'scaleX(-1)',
              fontSize: 26,
              strokeWidth: 1,
            }}
          />
        </Card>
      </LinkTransition>
      <div className='resume-btns flex gap-2'>
        <LinkTransition href='/front-end'>
          <MyCard active={pathname === '/front-end'}>
            <Card
              className={cn(
                { bgapply: pathname === '/front-end' },
                `group-hover:bgapply relative overflow-hidden rounded-md border shadow-lg
                  transition-all duration-300 ease-in-out group-hover:text-black`
              )}
            >
              <CardHeader
                className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text p-0
                  text-slate-400 transition-all duration-500 ease-in-out
                  group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:via-blue-500
                  group-hover:to-purple-500 group-hover:text-black'
              >
                <h2 className='leading-0 text-sm'>Frontend Developer</h2>
              </CardHeader>
            </Card>
          </MyCard>
        </LinkTransition>
        <LinkTransition
          className={`link ${pathname === '/back-end' ? 'active' : ''}`}
          href='/back-end'
        >
          <MyCard active={pathname === '/back-end'}>
            <Card
              className={cn(
                { bgapply: pathname === '/back-end' },
                `group-hover:bgapply relative overflow-hidden rounded-md border shadow-lg
                  transition-all duration-300 ease-in-out`
              )}
            >
              <CardHeader
                className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text p-0
                  text-slate-400 transition-all duration-500 ease-in-out hover:text-black
                  group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:via-blue-500
                  group-hover:to-purple-500'
              >
                <h2 className='leading-0 text-sm'>Backend Developer</h2>
              </CardHeader>
            </Card>
          </MyCard>
        </LinkTransition>
        <LinkTransition
          className={`link ${pathname === '/dev-ops' ? 'active' : ''}`}
          href='/dev-ops'
        >
          <MyCard active={pathname === '/dev-ops'}>
            <Card
              className={cn(
                { bgapply: pathname === '/dev-ops' },
                `group-hover:bgapply relative overflow-hidden rounded-md border shadow-lg
                  transition-all duration-300 ease-in-out`
              )}
            >
              <CardHeader
                className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text p-0
                  text-slate-400 transition-all duration-500 ease-in-out hover:text-black
                  group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:via-blue-500
                  group-hover:to-purple-500'
              >
                <h2 className='leading-0 text-sm'>Devops Engineer</h2>
              </CardHeader>
            </Card>
          </MyCard>
        </LinkTransition>
      </div>
    </div>
  );
};
