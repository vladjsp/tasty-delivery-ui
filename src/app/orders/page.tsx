'use client'

import { TOrder } from '@/types/types';
import styles from './styles.module.css'

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/orders', {
    cache: 'no-store',
  });

  if(!res.ok){
    throw new Error('Failed!')
  }
  return res.json();
}

const OrdersPage = () => {

  const orders:TOrder[] = [];

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr style={{textAlign: 'left'}}>
            <th className={styles.optionalColumn}>Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className={styles.optionalColumn}>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item) => (
            <tr key={item.id} className={styles.orderRow}>
              <td>{item.id}</td>
              <td className={styles.cell}>{item.createdAt.toString().slice(0,10)}</td>
              <td className={styles.cell}>{item.price}</td>
              <td>{item.products[0].title}</td>
              <td className={styles.cell}>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
  </div>
  )
}

export default OrdersPage