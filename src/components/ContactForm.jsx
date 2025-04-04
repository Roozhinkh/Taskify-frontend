import React, { useState } from "react";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit =  async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:5000/api/contact/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message }),
            });
            
            if (res.ok) {
                setStatus("Tack! Ditt meddelande har skickats.");
                setName("");
                setEmail("");
                setMessage("");
            } else {
                const data = await res.json();
                setStatus(data.message || "Ett fel uppstod. Försök igen.");
            }
        } catch (err) {
            setStatus("Något gick fel vid anslutning till servern.");
        }
    };

    return (
        <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
            <h2 className="text-3xl font-bold text-center mb-6">Kontakta oss</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ditt namn"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full p-4 mb-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-400"
                />
                <input
                    type="email"
                    placeholder="Din e-postadress"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-4 mb-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-400"
                />
                <textarea
                    placeholder="Ditt meddelande"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full p-4 mb-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-400"
                />
                <button
                    type="submit"
                    className="w-full py-3 bg-green-600 text-white rounded-xl hover:bg-green-500 transition-all duration-300"
                >
                    Skicka meddelande
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
