import React from 'react';

const ButtonPressContext = React.createContext({
  isRiderPressed: false,
  isDriverPressed: false,
  setRiderPressed: () => {},
  setDriverPressed: () => {},
});

export default ButtonPressContext;
