import { FormEvent, ReactElement, useState } from "react";

export function useForm(steps: ReactElement[]) {
    const [currentStep, setCurrentStep] = useState(0);
    
    function changeStep(index: number, e?: FormEvent) {
        if (e)
            e.preventDefault();
        
        if ((index < 0) || (index >= steps.length)) return;

        setCurrentStep(index);
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isFirstStep: currentStep === 0,
        isLastStep: currentStep === steps.length - 1,
    };
}