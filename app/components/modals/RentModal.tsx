'use client';
import React from 'react';
import useRentModal from '@/app/hooks/useRentModal';

import Modal from "./Modal";

const RentModal = () => {

    const rentModal = useRentModal();
  return (
    <Modal
    
    isOpen={rentModal.isOpen}
    onClose={rentModal.onClose}
    title="Choose your home!"
    actionLabel="Submit"
    onSubmit={rentModal.onClose}
    
  />
  )
}

export default RentModal;