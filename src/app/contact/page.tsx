"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <main className="min-h-screen text-white px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Contact</h1>
          <p className="text-xl text-gray-400">
            N&apos;hésitez pas à me contacter pour discuter de vos projets.
          </p>
        </div>

        <div className="bg-gray-200/5 rounded-2xl p-8">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              className="rounded-xl px-4 py-3 bg-black/20 border border-gray-200/20"
              required
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre email"
              className="rounded-xl px-4 py-3 bg-black/20 border border-gray-200/20"
              required
            />
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message"
              className="md:col-span-2 rounded-xl px-4 py-3 bg-black/20 border border-gray-200/20"
              required
            />
            <button
              type="submit"
              className="md:col-span-2 bg-black py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              Envoyer
            </button>
          </form>
          {status && <p className="mt-4 text-center">{status}</p>}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">Ou contactez-moi directement :</p>
          <div className="flex justify-center gap-6">
            <Link
              href="https://github.com/Doukss"
              target="_blank"
              className="text-blue-400 hover:text-blue-300"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-blue-400 hover:text-blue-300"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
