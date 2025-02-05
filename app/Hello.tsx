'use client';
import { useEffect, useState } from 'react';
import { uniswapV2Contract } from '../lib/uniswap';

export default function Hello() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUniswapData = async () => {
      try {
        const reserveData = await uniswapV2Contract.getReserves();
        const token0 = await uniswapV2Contract.token0();
        const token1 = await uniswapV2Contract.token1();
        const totalSupply = await uniswapV2Contract.totalSupply();
        const factory = await uniswapV2Contract.factory();

        setData({
          reserve0: reserveData[0].toString(),
          reserve1: reserveData[1].toString(),
          token0,
          token1,
          totalSupply: totalSupply.toString(),
          factory,
        });
      } catch (error) {
        console.error('Error fetching Uniswap V2 data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUniswapData();
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center px-4 md:px-6 space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Uniswap V2 Clone API Data
        </h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <pre className="text-left bg-gray-900 text-white p-4 rounded-lg max-w-xl overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>
    </section>
  );
}
