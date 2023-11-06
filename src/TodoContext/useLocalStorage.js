import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {

          const localStorageItem = localStorage.getItem(itemName);
    
          let parsedItem;
    
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.
              stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
    
          setLoading(false);
          } catch(error) {
            setLoading(false);
            setError(true);
          }
      }, 2000);

    }, []);

  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
          setItem(newItem);
        };

        
  
        return {
          item, 
          saveItem, 
          loading, 
          error,
        };
   }

   export { useLocalStorage };


   // localStorage.removeItem('TaskTrack_V1');

// const defaultTodos = [
//   { text: 'Wake up to 4:30 am', completed: true },
//   { text: 'Practice exercise', completed: false },
//   { text: 'Drink a green juice', completed: false },
//   { text: 'Clean the house', completed: false },
//   { text: 'Study', completed: false },
//   { text: 'Read before sleep', completed: false },
//   { text: 'Go to the bedroom at 8:30 pm', completed: true },
// ];