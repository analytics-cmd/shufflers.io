import React from 'react';
import {  ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, Cell } from 'recharts';
import { Star, Shield, Zap, Globe, Info, Gift, CreditCard, Headphones, Clock, Lock } from 'lucide-react';

const data = [
  { name: 'Trust', score: 98, color: '#00f3ff' },
  { name: 'Games', score: 92, color: '#bc13fe' },
  { name: 'Bonus', score: 88, color: '#0aff0a' },
  { name: 'Support', score: 95, color: '#ffffff' },
  { name: 'Speed', score: 99, color: '#00f3ff' },
];

export const Review: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">SHUFFLE <span className="text-neon-blue">REVIEW</span></h1>
        <p className="text-gray-400 font-mono">IN-DEPTH ANALYSIS & VERIFICATION</p>
      </div>

      {/* Key Information Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         {[
            { label: 'Established', val: '2023', icon: Clock },
            { label: 'License', val: 'Curacao Gaming', icon: Shield },
            { label: 'VPN Friendly', val: 'Yes', icon: Globe },
            { label: 'KYC Policy', val: 'Minimal (Tier 1)', icon: Lock },
         ].map((item, i) => (
             <div key={i} className="bg-neon-card border border-white/10 p-4 rounded-xl flex items-center gap-4">
                 <div className="bg-white/5 p-3 rounded-full text-neon-blue">
                     <item.icon size={20} />
                 </div>
                 <div>
                     <div className="text-xs text-gray-500 uppercase">{item.label}</div>
                     <div className="font-bold text-white">{item.val}</div>
                 </div>
             </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-8">
          
            {/* Platform Overview */}
            <section className="bg-neon-card border border-white/10 p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                    <Zap className="text-neon-purple" /> PLATFORM OVERVIEW
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    Shuffle.com has rapidly established itself as a premium destination for crypto gambling. 
                    Known for its sleek, dark-mode aesthetic and incredibly fast performance, it caters specifically to the modern crypto enthusiast. 
                    Unlike traditional casinos, Shuffle emphasizes community, transparency, and a frictionless user experience.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">PROVABLY FAIR</span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20">INSTANT WITHDRAWALS</span>
                    <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold border border-purple-500/20">VIP RAKEBACK</span>
                </div>
            </section>

            {/* Bonuses Table */}
            <section className="bg-neon-card border border-white/10 p-6 rounded-xl overflow-hidden">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                    <Gift className="text-neon-green" /> BONUSES & PROMOTIONS
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-white/5 text-gray-400 font-mono text-xs uppercase">
                            <tr>
                                <th className="p-4">Bonus Type</th>
                                <th className="p-4">Description</th>
                                <th className="p-4">Wager Req.</th>
                                <th className="p-4">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            <tr>
                                <td className="p-4 font-bold text-white">Welcome Bonus</td>
                                <td className="p-4 text-gray-300">100% Match up to $1,000</td>
                                <td className="p-4 text-gray-400">35x</td>
                                <td className="p-4"><span className="text-neon-blue cursor-pointer hover:underline">Claim</span></td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold text-white">Weekly Race</td>
                                <td className="p-4 text-gray-300">Share of $100,000 Pool</td>
                                <td className="p-4 text-gray-400">None</td>
                                <td className="p-4"><span className="text-neon-blue cursor-pointer hover:underline">Join</span></td>
                            </tr>
                             <tr>
                                <td className="p-4 font-bold text-white">VIP Rakeback</td>
                                <td className="p-4 text-gray-300">Instant Rakeback on every bet</td>
                                <td className="p-4 text-gray-400">None</td>
                                <td className="p-4"><span className="text-neon-blue cursor-pointer hover:underline">Auto</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Payment Methods */}
            <section className="bg-neon-card border border-white/10 p-6 rounded-xl">
                 <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                    <CreditCard className="text-neon-blue" /> PAYMENT METHODS
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {['Bitcoin', 'Ethereum', 'Litecoin', 'Tether', 'Ripple', 'Dogecoin', 'Solana', 'Matic'].map(coin => (
                        <div key={coin} className="bg-black/40 border border-white/5 rounded-lg p-3 text-center hover:border-neon-blue/30 transition-colors">
                            <span className="text-sm font-bold text-gray-300">{coin}</span>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white/5 p-4 rounded-lg">
                        <div className="text-gray-500 text-xs mb-1">MIN DEPOSIT</div>
                        <div className="text-white font-mono">None</div>
                    </div>
                     <div className="bg-white/5 p-4 rounded-lg">
                        <div className="text-gray-500 text-xs mb-1">WITHDRAWAL SPEED</div>
                        <div className="text-white font-mono">~10 Minutes</div>
                    </div>
                     <div className="bg-white/5 p-4 rounded-lg">
                        <div className="text-gray-500 text-xs mb-1">FEES</div>
                        <div className="text-white font-mono">Network Only</div>
                    </div>
                </div>
            </section>

        </div>

        {/* Sidebar Column */}
        <div className="space-y-8">
            
            {/* Rating Chart */}
            <div className="bg-neon-card border border-white/10 p-6 rounded-xl text-center">
                <div className="text-5xl font-bold text-white mb-2">4.9/5</div>
                <div className="flex justify-center gap-1 mb-4 text-neon-blue">
                    {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={16} />)}
                </div>
                <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} layout="vertical" margin={{ left: 40, right: 10 }}>
                            <XAxis type="number" hide />
                            <Tooltip 
                                cursor={{fill: 'transparent'}}
                                contentStyle={{ backgroundColor: '#000', borderColor: '#333' }}
                            />
                            <Bar dataKey="score" barSize={15} radius={[0, 4, 4, 0]}>
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Customer Support */}
            <section className="bg-neon-card border border-white/10 p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                    <Headphones className="text-neon-purple" /> CUSTOMER SUPPORT
                </h2>
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 rounded-full bg-green-500 animate-pulse"></div>
                        <div>
                            <div className="font-bold text-white text-sm">Live Chat (24/7)</div>
                            <div className="text-gray-400 text-xs">Average response: 2 mins</div>
                        </div>
                    </div>
                     <div className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
                        <div>
                            <div className="font-bold text-white text-sm">Email Support</div>
                            <div className="text-gray-400 text-xs">support@shuffle.com</div>
                        </div>
                    </div>
                     <div className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 rounded-full bg-purple-500"></div>
                        <div>
                            <div className="font-bold text-white text-sm">Community Discord</div>
                            <div className="text-gray-400 text-xs">Active mods & admins</div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Language Support */}
            <section className="bg-neon-card border border-white/10 p-6 rounded-xl">
                 <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase">Supported Languages</h3>
                 <div className="flex flex-wrap gap-2">
                    {['English', 'Japanese', 'Portuguese', 'Spanish', 'French', 'German', 'Russian'].map(lang => (
                        <span key={lang} className="text-xs border border-white/10 px-2 py-1 rounded text-gray-300">{lang}</span>
                    ))}
                 </div>
            </section>

        </div>

      </div>
    </div>
  );
};