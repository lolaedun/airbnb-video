'use client';
import React from 'react';
import { useMemo, useState } from "react";
import useRentModal from '@/app/hooks/useRentModal';
import Modal from "./Modal";

import Heading from '../Heading';
import { categories } from '../navbar/Categories';

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5,
  }

const RentModal = () => {

    const rentModal = useRentModal();
    const [step, setStep] = useState(STEPS.CATEGORY);

    const onBack = () => {
        setStep((value) => value - 1);
    }
    
    const onNext = () => {
    setStep((value) => value + 1);
    }
    const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
        return 'Create'
        }
    
        return 'Next'
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
        return undefined
        }

        return 'Back'
    }, [step]);

    let bodyContent = (
        <div className="flex flex-col gap-8">
          <Heading
            title="Which of these best describes your place?"
            subtitle="Pick a category"/>

<div 
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            
              label={item.label}
              
          </div>
        ))}
      </div>
        </div>
    )

    return (
            <Modal
            
            isOpen={rentModal.isOpen}
            onClose={rentModal.onClose}
            title="Choose your home!"
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
            onSubmit={rentModal.onClose}
            body={bodyContent}
            
            />
        )
}

export default RentModal;