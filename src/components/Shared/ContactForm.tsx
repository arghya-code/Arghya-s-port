import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useWorld } from '../../context/WorldContext';

export function ContactForm() {
  const { world } = useWorld();
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');

    // Placeholders - to be replaced with actual env variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_placeholder';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_placeholder';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_placeholder';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setStatus('success');
        toast.success('Message sent successfully!');
        form.current?.reset();
        setTimeout(() => setStatus('idle'), 3000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus('error');
        toast.error('Failed to send message. Please try again later.');
        setTimeout(() => setStatus('idle'), 3000);
      });
  };

  const getInputClass = () => {
    const base = "w-full bg-transparent border-b-2 outline-none py-3 px-2 mb-6 transition-all duration-300 placeholder:text-gray-500";
    if (world === 'builder') return `${base} border-[#ff6b00]/30 focus:border-[#ff6b00] text-white font-syne`;
    if (world === 'observer') return `${base} border-[#c9a227]/30 focus:border-[#c9a227] text-[#f5ede0] font-cormorant`;
    if (world === 'narrator') return `${base} border-[#c9a227]/30 focus:border-[#c9a227] text-[#f5f0d0] font-ibm bg-[#1a1800]/50`;
    return base;
  };

  const getButtonClass = () => {
    const base = "w-full py-4 font-bold tracking-wider transition-all duration-300 relative overflow-hidden group";
    if (world === 'builder') return `${base} bg-gradient-to-r from-[#ff6b00] to-[#ff9500] text-black rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(255,107,0,0.5)] font-orbitron`;
    if (world === 'observer') return `${base} bg-transparent border-2 border-[#c9a227] text-[#c9a227] rounded-full hover:bg-[#c9a227] hover:text-black font-cormorant uppercase`;
    if (world === 'narrator') return `${base} bg-[#4a4200] border-2 border-[#c9a227] text-[#f5f0d0] font-pixel text-xs hover:bg-[#c9a227] hover:text-black`;
    return base;
  };

  const getButtonText = () => {
    if (status === 'sending') return world === 'narrator' ? 'PROCESSING...' : 'SENDING...';
    if (status === 'success') return world === 'narrator' ? 'SENT ✓' : (world === 'builder' ? 'SENT! ✓' : 'DELIVERED ✓');
    return world === 'narrator' ? '> SUBMIT_MESSAGE' : (world === 'builder' ? 'SEND MESSAGE →' : 'SEND →');
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <input type="text" name="user_firstname" placeholder="First Name" required className={getInputClass()} />
        <input type="text" name="user_lastname" placeholder="Last Name" required className={getInputClass()} />
      </div>
      <input type="email" name="user_email" placeholder="Email Address" required className={getInputClass()} />
      <input type="tel" name="user_phone" placeholder="Phone Number" className={getInputClass()} />
      <textarea 
        name="message" 
        placeholder="Your Message" 
        required 
        minLength={20}
        rows={4} 
        className={`${getInputClass()} resize-none`}
      ></textarea>
      
      <button 
        type="submit" 
        disabled={status === 'sending'}
        className={getButtonClass()}
      >
        <span className="relative z-10">{getButtonText()}</span>
      </button>
    </form>
  );
}
