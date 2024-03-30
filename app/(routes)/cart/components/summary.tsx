"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import SelectMethod from "@/components/ui/select-method";

type DeliveryMethod = keyof typeof DELIVERY_OPTIONS;

const DELIVERY_OPTIONS = {
  pickup: { label: "Pickup", cost: 0 },
  inperson: { label: "In Person", cost: 5 },
  shipping: { label: "Delivery", cost: 18 },
};

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const [selectedMethod, setSelectedMethod] = useState<DeliveryMethod | ''>('');

  const handleMethodChange = (value: string) => {
    if (value in DELIVERY_OPTIONS) {
      setSelectedMethod(value as DeliveryMethod);
    } else {
      console.error("Invalid delivery method selected:", value);
    }
  };
  

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.');
      removeAll();
    }
    if (searchParams.get('canceled')) {
      toast.error('Something went wrong.');
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => total + Number(item.price), 0);
  const deliveryCost = selectedMethod ? DELIVERY_OPTIONS[selectedMethod].cost : 0;
  const totalPriceWithDelivery = totalPrice + deliveryCost;

  const onCheckout = async () => {
    if (selectedMethod && DELIVERY_OPTIONS[selectedMethod]) {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
        productIds: items.map((item) => item.id),
        deliveryMethod: selectedMethod,
        deliveryCost: DELIVERY_OPTIONS[selectedMethod].cost,
      });

      window.location.href = response.data.url;
    } else {
      toast.error("Please select a delivery method.");
    }
  };

  const isCheckoutDisabled = items.length === 0 || selectedMethod === '';

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-base font-medium text-gray-900">Subtotal</div>
          <Currency value={totalPrice} />
        </div>
        <div className="flex items-center justify-between">
          <div className="text-base font-medium text-gray-900">Shipping / Delivery</div>
          <Currency value={deliveryCost} />
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Total with Delivery</div>
          <Currency value={totalPriceWithDelivery} />
        </div>
        <p className="text-gray-900 text-xs font-bold">Sales Tax will be applied at checkout.</p>
      </div>
      <SelectMethod onMethodChange={handleMethodChange} />
      <Button onClick={onCheckout} disabled={isCheckoutDisabled} className="w-full mt-6">
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
