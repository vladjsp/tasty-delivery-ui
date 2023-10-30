'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { AppRoute, AuthStatus } from '@/enums/enums';

const UserLinks = () => {
    const { status } = useSession();
    return (
        <div>
            {status === AuthStatus.AUTHENTICATED ? (
                <div>
                    <Link href={AppRoute.ORDERS}>Orders</Link>
                    <span
                        style={{ marginLeft: '16px', cursor: 'pointer' }}
                        onClick={() => signOut()}
                    >
                        Logout
                    </span>
                </div>
            ) : (
                <Link href={AppRoute.LOGIN}>Login</Link>
            )}
        </div>
    );
};

export { UserLinks };
