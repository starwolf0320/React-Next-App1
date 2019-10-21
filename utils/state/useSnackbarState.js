import { useState } from 'react';

export default initialValue => {
  const [values, setValue] = useState(initialValue);

  return {
    values,
    showMessage: (isOpen, message, variant) => {
      const newValues = { ...values };

      newValues.isOpen = isOpen;
      newValues.message = message;
      newValues.variant = variant;

      setValue(newValues);
    },
    hideMessage: isOpen => {
      //   const newValues = { ...values };

      values.isOpen = isOpen;
      values.message = '';
      values.variant = '';

      setValue(values);
    },
  };
};
