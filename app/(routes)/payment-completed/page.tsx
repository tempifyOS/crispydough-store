// pages/payment-completed.tsx
"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Container from '@/components/ui/container';

const PaymentCompleted = () => {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('/');
    }, 60000); // 1 minute in milliseconds

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <Container>
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <Head>
          <title>Payment Completed</title>
          <meta name="description" content="Payment completed page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Payment Completed</h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for your payment! You will be redirected to the homepage in one minute. A receipt will be sent to your email with order details shortly.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Details</h2>
          <p className='text-lg text-gray-700 mb-4'>Please allow up to 72 hours for products to be made.</p>
          <p className="text-lg text-gray-700 mb-4">Products will be delivered in person. For any questions, please text or call <a className='text-blue-700'>(210)-906-4517</a>.</p>
        </div>
      </div>
    </Container>
  );
};

export default PaymentCompleted;
