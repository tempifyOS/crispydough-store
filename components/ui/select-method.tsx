import React, { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

  const SelectMethod: React.FC<{ onMethodChange: (value: string) => void }> = ({ onMethodChange }) => {
    // No need for local state here if we're lifting state up directly
    
    return (
      <>
        <h2 className='pt-5 text-base font-medium text-gray-900'>Delivery Options</h2>
        <Select onValueChange={(value) => onMethodChange(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Delivery Method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pickup">Pick-up (Free)</SelectItem>
            <SelectItem value="inperson">In-person Delivery ($5)</SelectItem>
            <SelectItem value="shipping">Shipping ($18)</SelectItem>
          </SelectContent>
        </Select>
      </>
    );
  };
  
  export default SelectMethod;