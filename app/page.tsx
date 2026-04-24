// app/page.tsx
'use client';

import Xarrow from 'react-xarrows';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  User, 
  Key, 
  BookOpen, 
  DollarSign, 
  CreditCard, 
  RefreshCw, 
  CheckCircle, 
  XCircle,
  Clock,
  GraduationCap,
  Shirt,
  Book,
  Bus,
  ArrowRight,
  Lock,
  Fingerprint,
  Captions,
  Globe,
  LogIn
} from 'lucide-react';
import { useState, useEffect } from 'react';

interface BoxProps {
  id: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  badges?: { text: string; color?: string }[];
  paymentTypes?: { icon: React.ReactNode; label: string }[];
  gateways?: string[];
  children?: React.ReactNode;
}

const Box = ({ id, title, subtitle, icon, badges, paymentTypes, gateways, children }: BoxProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
      className="glass-card relative group cursor-pointer min-w-[180px] md:min-w-[220px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      <div className="relative p-5 flex flex-col items-center text-center gap-3">
        {/* Icon with animated background */}
        {icon && (
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-xl animate-pulse" />
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          </div>
        )}
        
        {/* Title */}
        <h3 className="text-lg font-bold text-white/90 tracking-tight">{title}</h3>
        
        {/* Subtitle */}
        {subtitle && (
          <p className="text-xs text-white/40">{subtitle}</p>
        )}
        
        {/* Badges */}
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-1.5 justify-center mt-1">
            {badges.map((badge, idx) => (
              <span key={idx} className={`badge ${badge.color === 'green' ? 'badge-green' : badge.color === 'red' ? 'badge-red' : 'bg-white/10 text-white/70 border-white/20'}`}>
                {badge.text}
              </span>
            ))}
          </div>
        )}
        
        {/* Payment Types */}
        {paymentTypes && (
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            {paymentTypes.map((type, idx) => (
              <div key={idx} className="flex items-center gap-1 text-xs bg-white/5 rounded-full px-2 py-1 border border-white/10">
                {type.icon}
                <span className="text-white/70">{type.label}</span>
              </div>
            ))}
          </div>
        )}
        
        {/* Gateways */}
        {gateways && (
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            {gateways.map((gateway, idx) => (
              <div key={idx} className="text-xs bg-white/5 rounded-full px-2 py-1 border border-white/10 text-white/70">
                {gateway}
              </div>
            ))}
          </div>
        )}
        
        {children}
      </div>
    </motion.div>
  );
};

export default function FlowPage() {
  const [mounted, setMounted] = useState(false);
  const [hoveredArrow, setHoveredArrow] = useState<string | null>(null);
  
  useEffect(() => {
    setMounted(true);
    // Force arrow recalculation after mount
    const timeout = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    return () => clearTimeout(timeout);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0c10] via-[#0f1117] to-[#0a0c10] text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-3xl animate-pulse animation-delay-4000" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="heading mb-4">🔐 Dual-Auth Payment Flow</h1>
          <p className="text-white/50 max-w-2xl mx-auto text-sm md:text-base">
            Parent Portal (Token) OR Direct URL (Admission No. + DOB + Google Captcha) — secure payment journey
          </p>
        </motion.div>
        
        {/* Flowchart Container */}
        <div className="relative overflow-x-auto pb-8">
          <div className="flex flex-col items-center gap-8 md:gap-12 min-w-[1000px] md:min-w-full">
            
            {/* ROW 1: User Entry (Two parallel paths) */}
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
              <Box 
                id="userEntry" 
                title="User Entry" 
                subtitle="Payment Module Access"
                icon={<User className="w-6 h-6 text-indigo-400" />}
                badges={[{ text: "Parent / Student" }]}
              />
            </div>

            {/* ROW 2: Two authentication branches */}
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
              {/* Branch 1: Parent Portal Token */}
              <div className="flex flex-col items-center gap-4">
                <Box 
                  id="parentPortal" 
                  title="Parent Portal" 
                  subtitle="Website Access Token"
                  icon={<Globe className="w-6 h-6 text-blue-400" />}
                  badges={[{ text: "Existing Session", color: "green" }]}
                />
                <Box 
                  id="validateToken" 
                  title="Validate Token" 
                  subtitle="JWT Verification"
                  icon={<Key className="w-6 h-6 text-amber-400" />}
                  badges={[{ text: "Security Layer" }]}
                />
              </div>
              
              {/* Branch 2: Direct URL Login */}
              <div className="flex flex-col items-center gap-4">
                <Box 
                  id="directLogin" 
                  title="Direct URL Login" 
                  subtitle="Admission No. + DOB"
                  icon={<LogIn className="w-6 h-6 text-purple-400" />}
                  badges={[{ text: "New / No Token" }]}
                />
                <Box 
                  id="googleCaptcha" 
                  title="Google Captcha" 
                  subtitle="Verify Humanity"
                  icon={<Captions className="w-6 h-6 text-red-400" />}
                  badges={[{ text: "reCAPTCHA v3", color: "green" }]}
                />
                <Box 
                  id="validateCredentials" 
                  title="Validate Credentials" 
                  subtitle="Check Admission + DOB"
                  icon={<Fingerprint className="w-6 h-6 text-cyan-400" />}
                  badges={[{ text: "Database Match" }]}
                />
              </div>
            </div>

            {/* ROW 3: Common flow after authentication */}
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20 mt-4">
              <Box 
                id="fetchData" 
                title="Fetch Student Data" 
                subtitle="Fee Details & Dues"
                icon={<GraduationCap className="w-6 h-6 text-emerald-400" />}
                badges={[{ text: "Authorized", color: "green" }]}
              />
            </div>

            {/* ROW 4: Payment Selection */}
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20">
              <Box 
                id="paymentType" 
                title="Select Payment Type" 
                subtitle="Choose Fee Category"
                icon={<BookOpen className="w-6 h-6 text-purple-400" />}
                paymentTypes={[
                  { icon: <GraduationCap className="w-3 h-3" />, label: "Tution" },
                  { icon: <Shirt className="w-3 h-3" />, label: "Uniform" },
                  { icon: <Book className="w-3 h-3" />, label: "Books" },
                  { icon: <Bus className="w-3 h-3" />, label: "Transport" },
                ]}
              />
              <Box 
                id="enterAmount" 
                title="Enter Amount" 
                subtitle="Academic Year 2024-25"
                icon={<DollarSign className="w-6 h-6 text-green-400" />}
                badges={[{ text: "Custom Amount" }]}
              />
            </div>
            
            {/* ROW 5: Gateway & Transaction */}
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
              <Box 
                id="chooseGateway" 
                title="Choose Gateway" 
                subtitle="Select Payment Method"
                icon={<CreditCard className="w-6 h-6 text-cyan-400" />}
                gateways={["Razorpay", "Cashfree","Grayquest","HDFC avence"]}
              />
              <Box 
                id="redirectGateway" 
                title="Redirect to Gateway" 
                subtitle="External Payment Page"
                icon={<RefreshCw className="w-6 h-6 text-orange-400" />}
                badges={[{ text: "Secure Redirect" }]}
              />
              <Box 
                id="transactionStatus" 
                title="Transaction Status" 
                subtitle="Final Confirmation"
                icon={<CheckCircle className="w-6 h-6 text-emerald-400" />}
                badges={[
                  { text: "Success", color: "green" },
                  { text: "Failed", color: "red" },
                  { text: "Pending" },
                ]}
              />
            </div>
            
            {/* ========== ARROWS ========== */}
            
            {/* User Entry to both branches */}
            <Xarrow 
              start="userEntry" 
              end="parentPortal" 
              strokeWidth={3}
              color="#3b82f6"
              curveness={0.4}
              startAnchor="bottom"
              endAnchor="top"
              showHead={true}
              headSize={6}
              label={
                <div className="bg-blue-500/90 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg backdrop-blur-sm">
                  Token Access
                </div>
              }
            />
            
            <Xarrow 
              start="userEntry" 
              end="directLogin" 
              strokeWidth={3}
              color="#a855f7"
              curveness={0.6}
              startAnchor="bottom"
              endAnchor="top"
              showHead={true}
              headSize={6}
              label={
                <div className="bg-purple-500/90 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg backdrop-blur-sm">
                  Direct URL
                </div>
              }
            />
            
            {/* Parent Portal branch flow */}
            <Xarrow 
              start="parentPortal" 
              end="validateToken" 
              strokeWidth={2.5}
              color="#f59e0b"
              curveness={0.5}
              startAnchor="bottom"
              endAnchor="top"
              showHead={true}
              headSize={5}
            />
            
            <Xarrow 
              start="validateToken" 
              end="fetchData" 
              strokeWidth={3}
              color="#10b981"
              curveness={0.8}
              startAnchor="bottom"
              endAnchor="top"
              showHead={true}
              headSize={6}
              label={
                <div className="bg-green-500/90 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg backdrop-blur-sm">
                  ✅ Valid
                </div>
              }
            />
            
            {/* Direct URL branch flow */}
            <Xarrow 
              start="directLogin" 
              end="googleCaptcha" 
              strokeWidth={2.5}
              color="#ef4444"
              curveness={0.5}
              startAnchor="bottom"
              endAnchor="top"
              showHead={true}
              headSize={5}
            />
            
            <Xarrow 
              start="googleCaptcha" 
              end="validateCredentials" 
              strokeWidth={2.5}
              color="#06b6d4"
              curveness={0.5}
              startAnchor="bottom"
              endAnchor="top"
              showHead={true}
              headSize={5}
            />
            
            <Xarrow 
              start="validateCredentials" 
              end="fetchData" 
              strokeWidth={3}
              color="#10b981"
              curveness={0.6}
              startAnchor="bottom"
              endAnchor="top"
              showHead={true}
              headSize={6}
              label={
                <div className="bg-green-500/90 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg backdrop-blur-sm">
                  ✅ Verified
                </div>
              }
            />
            
            {/* Payment flow arrows */}
            <Xarrow 
              start="fetchData" 
              end="paymentType" 
              strokeWidth={2.5}
              color="#8b5cf6"
              curveness={0.5}
              startAnchor="right"
              endAnchor="left"
              showHead={true}
              headSize={5}
              animateDrawing={true}
            />
            
            <Xarrow 
              start="paymentType" 
              end="enterAmount" 
              strokeWidth={2.5}
              color="#8b5cf6"
              curveness={0.5}
              startAnchor="right"
              endAnchor="left"
              showHead={true}
              headSize={5}
              animateDrawing={true}
            />
            
            <Xarrow 
              start="enterAmount" 
              end="chooseGateway" 
              strokeWidth={2.5}
              color="#8b5cf6"
              curveness={0.5}
              startAnchor="right"
              endAnchor="left"
              showHead={true}
              headSize={5}
              animateDrawing={true}
            />
            
            <Xarrow 
              start="chooseGateway" 
              end="redirectGateway" 
              strokeWidth={2.5}
              color="#8b5cf6"
              curveness={0.5}
              startAnchor="right"
              endAnchor="left"
              showHead={true}
              headSize={5}
              animateDrawing={true}
            />
            
            <Xarrow 
              start="redirectGateway" 
              end="transactionStatus" 
              strokeWidth={2.5}
              color="#8b5cf6"
              curveness={0.5}
              startAnchor="right"
              endAnchor="left"
              showHead={true}
              headSize={5}
              animateDrawing={true}
            />
            
            {/* Error path from validateToken (optional) */}
            <Xarrow 
              start="validateToken" 
              end="directLogin" 
              strokeWidth={2}
              color="#ef4444"
              curveness={1.2}
              startAnchor="left"
              endAnchor="right"
              showHead={true}
              headSize={5}
              dashness={{ strokeLen: 8, spaceLen: 6 }}
              label={
                <div className="bg-red-500/80 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg">
                  ❌ Invalid
                </div>
              }
            />
            
          </div>
        </div>
        
        {/* Footer Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center text-white/30 text-xs md:text-sm border-t border-white/5 pt-8"
        >
          <p>Dual Authentication Flow • Parent Portal Token Validation • Direct URL (Admission No. + DOB + Google Captcha) • JWT Tokens • Role-Based Access</p>
          <p className="mt-2">Payment Categories: Tution • Uniform • Books • Transport • Academic Year 2026-27</p>
        </motion.div>
      </div>
    </main>
  );
}