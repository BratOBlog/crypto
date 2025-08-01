import { createContext, useState, useEffect } from 'react'
export const CoinContext = createContext();

export function CoinProvider({ children }) {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [limit, setLimit] = useState(10);
    const [filter, setFilter] = useState('');
    const [sortBy, setSortBy] = useState('market_cap_desc')

    const API_URL = import.meta.env.VITE_COINS_API_URL;

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const res = await fetch(`${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`);
                if (!res.ok) throw new Error('Failed to fetch data');
                const data = await res.json();
                setCoins(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchCoins();

    }, [limit]);

    return (
        <CoinContext.Provider value={{ coins, setCoins, loading, setLoading, error, setError, limit, setLimit, filter, setFilter, sortBy, setSortBy }}>
            {children}
        </CoinContext.Provider>
    )
}