"use client";
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Project } from '@/utils/fetchProjects';
import { CheckCircle2 } from 'lucide-react';

interface CallbackFormProps {
  project: Project;
}

export default function CallbackForm({ project }: CallbackFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      _subject: `Property Inquiry: ${project.name}`,
      message: `New Inquiry for Property: ${project.name}
      
Customer Name: ${formData.get('name')}
Phone Number: ${formData.get('phone')}
Email Address: ${formData.get('email')}

Customer Message:
${formData.get('userMessage') || "No additional message provided."}

---- Property Details ----
Name: ${project.name}
Price: ${project.price}
Address: ${project.address}
Type: ${project.type}
Status: ${project.status}
Area Size: ${project.areaSize}
Possession Date: ${project.possessionDate}`,
      _captcha: "false"
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/talentcomputers2013@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        toast.success("Request sent successfully! Our experts will contact you soon.");
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        
        // Open WhatsApp with prefilled message
        const whatsappMessage = `*New Property Inquiry*\n\n*Property Name:* ${project.name}\n*Property Price:* ${project.price}\n\n*Customer Name:* ${formData.get('name')}\n*Phone Number:* ${formData.get('phone')}\n*Email:* ${formData.get('email')}\n\n*Message:* ${formData.get('userMessage') || "No additional message."}`;
        const whatsappUrl = `https://wa.me/919848418582?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
        
      } else {
        toast.error("Failed to send request. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-500">
          <CheckCircle2 size={32} />
        </div>
        <h4 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">Request Sent Successfully!</h4>
        <p className="text-emerald-600 dark:text-emerald-300 mb-6">
          Thank you for your interest in <span className="font-semibold">{project.name}</span>. Our property experts have received your details and will contact you shortly.
        </p>
        <button 
          onClick={() => setIsSuccess(false)} 
          className="text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:underline transition-colors border border-emerald-200 dark:border-emerald-800 px-6 py-2 rounded-full"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input 
        type="text" 
        name="name"
        required
        placeholder="Your Name" 
        className="w-full px-4 py-3 bg-zinc-50 dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:border-amber-500 transition-colors"
      />
      <input 
        type="tel" 
        name="phone"
        required
        placeholder="Phone Number" 
        className="w-full px-4 py-3 bg-zinc-50 dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:border-amber-500 transition-colors"
      />
      <input 
        type="email" 
        name="email"
        required
        placeholder="Email Address" 
        className="w-full px-4 py-3 bg-zinc-50 dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:border-amber-500 transition-colors"
      />
      <textarea
        name="userMessage"
        rows={4}
        placeholder="Your Message / Inquiry Details (Optional)"
        className="w-full px-4 py-3 bg-zinc-50 dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:border-amber-500 transition-colors resize-y"
      ></textarea>
      
      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-amber-600 to-amber-400 hover:from-amber-500 hover:to-amber-300 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-amber-500/30 transition-all mt-2 disabled:opacity-75 disabled:cursor-not-allowed flex justify-center items-center"
      >
        {isSubmitting ? (
          <span className="animate-pulse">Sending Request...</span>
        ) : (
          "Request Callback"
        )}
      </button>
    </form>
  );
}
