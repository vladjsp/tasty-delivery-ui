import styles from './styles.module.css'

const OrdersPage = () => {
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
          <tr className={styles.orderRow}>
            <td>1237861238721</td>
            <td className={styles.cell}>19.07.2023</td>
            <td className={styles.cell}>89.90</td>
            <td>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className={styles.cell}>On the way (approx. 10min)...</td>
          </tr>
          <tr className={styles.orderRow}>
            <td>1237861238721</td>
            <td className={styles.cell}>19.07.2023</td>
            <td className={styles.cell}>89.90</td>
            <td>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className={styles.cell}>On the way (approx. 10min)...</td>
          </tr>
          <tr className={styles.orderRow}>
            <td>1237861238721</td>
            <td className={styles.cell}>19.07.2023</td>
            <td className={styles.cell}>89.90</td>
            <td>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className={styles.cell}>On the way (approx. 10min)...</td>
          </tr>
        </tbody>
      </table>
  </div>
  )
}

export default OrdersPage