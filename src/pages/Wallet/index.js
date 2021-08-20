import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

import { Card, Container } from './styles';

import trash from '../../assets/images/trash.svg';

import api from '../../utils/api';

export default function Wallet() {
  const { loading } = useAuth();
  const [wallet, setWallet] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('/wallet');
      const { data } = response;
      setWallet(data);
    })();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      {wallet.map((item) => {
        const type = item.type === '1' ? 'withdraw' : 'deposit';

        return (
          <Card className={type} key={Math.random()}>
            <div className="info">
              <p className="description">
                {item.description}
              </p>

              <strong>{`R$ ${Number(item.value).toFixed(2)}`}</strong>
            </div>

            <div className="actions">
              <button type="button">
                <img src={trash} alt="Delete" />
              </button>
            </div>
          </Card>
        );
      })}

    </Container>
  );
}
