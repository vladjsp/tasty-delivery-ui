'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import { TOrder } from '@/types/types';
import styles from './styles.module.css';
import { AppRoute, AuthStatus } from '@/enums/enums';

const OrdersPage = () => {
    const { data: session, status } = useSession();

    const router = useRouter();

    if (status === AuthStatus.UNAUTHENTICATED) {
        router.push(AppRoute.ROOT);
    }

    const { isLoading, error, data } = useQuery({
        queryKey: ['orders'],
        queryFn: () =>
            fetch(`${AppRoute.API_DOMAIN}${AppRoute.ORDERS}`).then((res) =>
                res.json(),
            ),
    });

    if (isLoading || status === AuthStatus.LOADING) return 'Loading...';

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr style={{ textAlign: 'left' }}>
                        <th className={styles.optionalColumn}>Order ID</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th className={styles.optionalColumn}>Products</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: TOrder) => (
                        <tr key={item.id} className={styles.orderRow}>
                            <td>{item.id}</td>
                            <td className={styles.cell}>
                                {item.createdAt.toString().slice(0, 10)}
                            </td>
                            <td className={styles.cell}>{item.price}</td>
                            <td>{item.products[0].title}</td>
                            <td className={styles.cell}>{item.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersPage;
