// src/components/settings/Payment.jsx
import React, { useState } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import { Drawer, Button, Form, Input, Select } from 'antd';
import { FaCcVisa, FaCcMastercard, FaCreditCard } from 'react-icons/fa'; // Import icons
import 'antd/dist/reset.css'; // Import Ant Design styles

function Payment() {
  const [selectedPlan, setSelectedPlan] = useState('Beginner');
  const [autoRenew, setAutoRenew] = useState(true);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Visa');
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [formTitle, setFormTitle] = useState('');

  const plans = [
    { title: 'Beginner', price: 'Free', description: 'Basic features for personal use.', buttonLabel: 'Upgrade Plan' },
    { title: 'Intermediate', price: '$3/month', description: 'Access to some premium courses.', buttonLabel: 'Cancel Subscription' },
    { title: 'Pro', price: '$10/month', description: 'Access to all courses & features.', buttonLabel: 'Cancel Subscription' }
  ];

  const cardInfo = [
    { cardType: 'Visa Card', cardNumber: '**** **** **** 1234' },
    { cardType: 'Mastercard', cardNumber: '**** **** **** 5678' },
    { cardType: 'MTN Momo', cardNumber: '652 *** 028' }
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleAutoRenewToggle = () => {
    setAutoRenew(!autoRenew);
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const showDrawer = (title) => {
    setFormTitle(title);
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <div className='px-4'>
      <h2 className="text-xl font-medium text-[#404660] mb-4">Plan</h2>

      <div className="flex flex-wrap justify-between gap-4 mb-4">
        {plans.map(plan => (
          <div key={plan.title} className={`border p-4 rounded-md w-full ${selectedPlan === plan.title ? 'border-[#9835ff] border border-solid' : 'bg-[#9835ff] text-white'}`}>
            <div className='flex items-center justify-between'>
              <h3 className={`text-[16px] font-medium mb-2 ${selectedPlan === plan.title ? 'text-[#404660]' : 'text-white'}`}>{plan.title}</h3>
              <p className={`text-[16px] font-semibold mb-2 ${selectedPlan === plan.title ? 'text-[#9835ff]' : 'text-white'}`}>{plan.price}</p>
            </div>
            <p className={`text-gray-500 mb-4 ${selectedPlan === plan.title ? 'text-gray-500' : 'text-white'}`}>{plan.description}</p>
            <button 
              className={`px-4 py-2 rounded-md ${selectedPlan === plan.title ? 'bg-[#9835ff] text-white' : 'bg-white text-[#9835ff]'}`}
              onClick={() => handlePlanSelect(plan.title)}
            >
              {selectedPlan === plan.title ? plan.buttonLabel : 'Select Plan'}
            </button>
          </div>
        ))}
      </div>

      <div className="mb-6 flex items-center justify-between">
        <div>
          <label className="flex items-center space-x-4">
            <span className='text-[#404660] text-[14px] font-medium'>Auto-renewal</span>
          </label>
          <p className="text-gray-500 text-sm">Automatically renew your subscription every month.</p>
        </div>
        <Toggle
          checked={autoRenew}
          onChange={handleAutoRenewToggle}
          className="custom-toggle"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-medium text-[#404660] mb-4">Payment Method</h3>
        <div className="flex gap-4 mt-4 w-full flex-col md:flex-row">
          <label 
            className={`flex items-center w-full md:w-1/3 border p-2 justify-center rounded-md  cursor-pointer ${selectedPaymentMethod === 'Visa' ? 'border-[#9835ff] border border-solid' : 'border-gray-300 border-solid'}`}
            onClick={() => handlePaymentMethodChange('Visa')}
          >
            <FaCcVisa size={20} className="mr-2 text-blue-600" />
            <span className={`text-[#404660] font-medium ${selectedPaymentMethod === 'Visa' ? 'text-[#9835ff]' : ''}`}>Visa Card</span>
          </label>
          <label 
            className={`flex items-center justify-center border p-2 rounded-md md:w-1/3 cursor-pointer ${selectedPaymentMethod === 'Mastercard' ? 'border-[#9835ff] border border-solid' : 'border-gray-300 border-solid'}`}
            onClick={() => handlePaymentMethodChange('Mastercard')}
          >
            <FaCcMastercard className="mr-2 text-orange-600" />
            <span className={`text-[#404660] font-medium ${selectedPaymentMethod === 'Mastercard' ? 'text-[#9835ff]' : ''}`}>Mastercard</span>
          </label>
          <label 
            className={`flex items-center justify-center border p-2 rounded-md md:w-1/3 cursor-pointer ${selectedPaymentMethod === 'MTN Momo' ? 'border-[#9835ff] border border-solid' : 'border-gray-300 border-solid'}`}
            onClick={() => handlePaymentMethodChange('MTN Momo')}
          >
            <FaCreditCard className="mr-2 text-yellow-400" />
            <span className={`text-[#404660] font-medium ${selectedPaymentMethod === 'MTN Momo' ? 'text-[#9835ff]' : ''}`}>MTN Momo</span>
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-medium mb-4 text-[#404660]">Billing Information</h3>
        <div className="bg-white border border-gray-200 border-solid p-4 rounded-md">
          {cardInfo.map(card => (
            <div key={card.cardType} className="flex items-center justify-between mb-2">
              <span className="text-[#404660] font-medium">{card.cardType}</span>
              <span className="text-gray-500">{card.cardNumber}</span>
              <button 
                className="text-[#9835ff] underline"
                onClick={() => showDrawer(card.cardType)}
              >
                Update
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-medium mb-4 text-[#404660]">Billing History</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-gray-500 text-sm ">
              <th className="text-left p-2 font-medium">Date</th>
              <th className="text-left p-2 font-medium">Details</th>
              <th className="text-left p-2 font-medium">Amount</th>
              <th className="text-left p-2 font-medium">Invoice</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2 text-gray-400 text-[14px]">2024-01-01</td>
              <td className="p-2 text-[14px] text-[#404660]">Monthly Subscription</td>
              <td className="p-2 text-[14px] font-semibold text-[#9835ff]">$10.00</td>
              <td className="p-2"><a href="#" className="text-[#9835ff] text-[14px] font-normal">View Invoice</a></td>
            </tr>
            <tr className="border-b">
              <td className="p-2 text-gray-400 text-[14px]">2024-02-01</td>
              <td className="p-2 text-[14px] text-[#404660]">Course Subscription</td>
              <td className="p-2 text-[14px] font-semibold text-[#9835ff]">$10.00</td>
              <td className="p-2"><a href="#" className="text-[#9835ff] text-[14px] font-normal">View Invoice</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      <Drawer
        title={`Update ${formTitle} Information`}
        placement="right"
        closable={true}
        onClose={onClose}
        visible={drawerVisible}
        width={360}
      >
        <Form
          name="paymentForm"
          layout="vertical"
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="Card Number"
            name="cardNumber"
            rules={[{ required: true, message: 'Please input your card number!' }]}
          >
            <Input placeholder="**** **** **** 1234" />
          </Form.Item>

          <Form.Item
            label="Expiry Date"
            name="expiryDate"
            rules={[{ required: true, message: 'Please input the expiry date!' }]}
          >
            <Input placeholder="MM/YY" />
          </Form.Item>

          <Form.Item
            label="CVV"
            name="cvv"
            rules={[{ required: true, message: 'Please input the CVV!' }]}
          >
            <Input placeholder="***" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className='bg-[#9835ff]'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}

export default Payment;
