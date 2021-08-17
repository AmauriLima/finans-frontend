import useAuth from '../../hooks/useAuth';

export default function Wallet() {
  const { loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return <h1>Wallets</h1>;
}
