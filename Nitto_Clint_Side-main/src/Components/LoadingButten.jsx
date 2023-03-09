import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';


function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }
  
export default function LoadingButton() {
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);
  
    const handleClick = () => setLoading(true);
  
    return (
      <Button
        variant="outline-primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? 'Loading…' : 'See the customer List'}
      </Button>
    );
  }
  