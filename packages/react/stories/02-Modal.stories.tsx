import React from 'react';
import { Modal, Button, Input, Spacer } from '../src';

export default {
  title: 'Component|Modal',
};

interface ModalProps {
  onSubmit(): void;
}

const ModalContent = () => {
  return (
    <div style={{ padding: 24 }}>
      <Input.Text placeholder="Please enter your email." />
      <Spacer size={10} />
      <Input.Password placeholder="Please enter your password." />
    </div>
  );
};

export const Default = ({ onSubmit }: ModalProps) => {
  const { useState } = React;
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSubmit();
    }, 1000);
  };

  const footerButton = (
    <div style={{ display: 'flex', height: 60, justifyContent: 'flex-end', alignItems: 'center' }}>
      <Spacer size="tiny" style={{ padding: '0 16px' }}>
        <Button type="basic" onClick={() => setVisible(false)}>
          Cancel
        </Button>
        <Button type="core" onClick={handleSubmit} loading={loading}>
          Submit
        </Button>
      </Spacer>
    </div>
  );

  return (
    <div style={{ padding: 30 }}>
      <Button onClick={() => setVisible(true)}>Show Modal</Button>
      <Modal visible={visible} onClose={() => setVisible(false)} header="Basic Modal" footer={footerButton} footerStyle={{ textAlign: 'right' }}>
        <ModalContent />
      </Modal>
    </div>
  );
};
