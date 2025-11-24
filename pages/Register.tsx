import React, { useState } from 'react';
import { NeonButton } from '../components/NeonButton';
import { FAQItem } from '../components/FAQItem';
import { User, Mail, Lock, Gift, HelpCircle } from 'lucide-react';

const AFFILIATE_LINK = "https://www.shufflers.io/en/link/9cb114c2241119143011/";

export const Register: React.FC = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '', promo: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
        window.location.href = AFFILIATE_LINK; 
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-2">JOIN <span className="text-neon-green">SHUFFLERS.IO</span></h2>
            <p className="text-gray-400 text-sm">Create your account to access exclusive bonuses.</p>
        </div>

        <div className="bg-neon-card border border-white/10 p-8 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden mb-12">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green" />
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Username</label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input 
                            type="text" 
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-neon-blue transition-colors"
                            placeholder="CryptoKing99"
                            value={formState.username}
                            onChange={e => setFormState({...formState, username: e.target.value})}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input 
                            type="email" 
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-neon-blue transition-colors"
                            placeholder="you@example.com"
                            value={formState.email}
                            onChange={e => setFormState({...formState, email: e.target.value})}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Password</label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input 
                            type="password" 
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-neon-blue transition-colors"
                            placeholder="••••••••••••"
                            value={formState.password}
                            onChange={e => setFormState({...formState, password: e.target.value})}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Referral Code (Optional)</label>
                    <div className="relative">
                        <Gift className="absolute left-3 top-1/2 -translate-y-1/2 text-neon-purple" size={18} />
                        <input 
                            type="text" 
                            className="w-full bg-neon-purple/5 border border-neon-purple/30 rounded-lg py-3 pl-10 pr-4 text-neon-purple focus:outline-none focus:border-neon-purple transition-colors"
                            placeholder="SHUFFLEVERSE"
                            value={formState.promo}
                            onChange={e => setFormState({...formState, promo: e.target.value})}
                        />
                    </div>
                </div>

                <NeonButton fullWidth variant="green" className="mt-8">
                    {loading ? 'REDIRECTING TO SECURE REGISTRATION...' : 'CREATE ACCOUNT'}
                </NeonButton>

                <p className="mt-4 text-center text-xs text-gray-600">
                    By registering you agree to Shuffle.com Terms of Service. 
                    Shufflers.io is an affiliate partner.
                </p>
            </form>
        </div>

        {/* FAQ Section */}
        <div className="bg-neon-card/50 border border-white/10 rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <HelpCircle className="text-neon-blue" /> FREQUENTLY ASKED QUESTIONS
            </h3>
            <div className="space-y-2">
                <FAQItem 
                    question="How do I register on Shuffle?" 
                    answer="Click the 'Create Account' button above. It will take you to the official registration page. Simply enter a username, email, and password. No strict KYC is required for crypto-only accounts initially." 
                />
                <FAQItem 
                    question="Where can I deposit funds?" 
                    answer="Once logged in, click on the 'Wallet' icon at the top center. Copy your unique BTC, ETH, or USDT address and send funds from your external wallet or exchange. Deposits usually credit after 1 confirmation." 
                />
                <FAQItem 
                    question="How do I claim bonuses?" 
                    answer="Bonuses are often credited automatically if you use our affiliate link. For manual codes, go to Profile > Vip > Redeem Bonus and paste your code." 
                />
                <FAQItem 
                    question="Is Shuffle VPN friendly?" 
                    answer="Yes, Shuffle is widely known to be privacy-focused. However, you must check your local laws regarding online gambling before participating." 
                />
            </div>
        </div>
    </div>
  );
};