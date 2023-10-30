'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { TOrder } from '@/types/types';
import styles from './styles.module.css';
import { AppRoute, AuthStatus } from '@/enums/enums';
import Image from 'next/image';
import React from 'react';

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

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: ({ id, status }: { id: string; status: string }) => {
            return fetch(`${AppRoute.API_DOMAIN}${AppRoute.ORDERS}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(status),
            });
        },
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['orders'] });
        },
    });

    const handleUpdate = (e: React.FormEvent<HTMLFormElement>, id: string) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const input = form.elements[0] as HTMLInputElement;
        const status = input.value;

        mutation.mutate({ id, status });
    };

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
                            {session?.user.isAdmin ? (
                                <td className={styles.cell}>
                                    <form
                                        className={styles.form}
                                        onSubmit={(e) =>
                                            handleUpdate(e, item.id)
                                        }
                                    >
                                        <input
                                            type="text"
                                            placeholder={item.status}
                                            className={styles.statusInput}
                                        />
                                        <button
                                            type="submit"
                                            className={styles.editIcon}
                                        >
                                            <Image
                                                src="/images/edit.png"
                                                alt="edit"
                                                width={20}
                                                height={20}
                                            />
                                        </button>
                                    </form>
                                </td>
                            ) : (
                                <td className={styles.cell}>{item.status}</td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersPage;
