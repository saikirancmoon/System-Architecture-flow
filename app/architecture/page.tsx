'use client';

import Xarrow from 'react-xarrows';
import { motion } from 'framer-motion';
import {
  Database,
  Server,
  Globe,
  Cpu,
  Smartphone,
  ShieldCheck,
  User,
  CreditCard,
  Users,
  RefreshCw,
  Cookie,
  Key,
  Zap,
  ArrowRight
} from 'lucide-react';
import { useState, useEffect } from 'react';

// ================= TECH LINKS FOR EXTERNAL REFERENCE =================

const TECH_LINKS: Record<string, string> = {
  yii: 'https://www.yiiframework.com/',
  php: 'https://www.php.net/',
  oracle: 'https://www.oracle.com/database/',
  next: 'https://nextjs.org/',
  nest: 'https://nestjs.com/',
  mongo: 'https://www.mongodb.com/',
  pg: 'https://www.postgresql.org/',
  redis: 'https://redis.io/',
};

// ================= ENHANCED BOX COMPONENT (from third sample) =================

interface BoxProps {
  id: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  badges?: Array<{ text: string; color?: 'red' | 'green' | 'blue' | 'purple' }>;
  link?: string;
}

const Box = ({ id, title, subtitle, icon, badges, link }: BoxProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const content = (
    <>
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
            {badges.map((badge, idx) => {
              const colorClass = 
                badge.color === 'red' ? 'badge-red' :
                badge.color === 'green' ? 'badge-green' :
                badge.color === 'blue' ? 'badge-blue' :
                badge.color === 'purple' ? 'badge-purple' :
                'bg-white/10 text-white/70 border-white/20';
              return (
                <span key={idx} className={`badge ${colorClass}`}>
                  {badge.text}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </>
  );

const commonProps = {
  id,
  onMouseEnter: () => setIsHovered(true),
  onMouseLeave: () => setIsHovered(false),
  className:
    "glass-card relative group cursor-pointer min-w-[180px] md:min-w-[220px] bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl transition-all duration-300 hover:border-indigo-500/50",
  whileHover: { scale: 1.03, y: -6 },
  transition: {
    type: "spring" as const,
    stiffness: 180,
    damping: 14
  }
};

  if (link) {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        {...commonProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div {...commonProps}>
      {content}
    </motion.div>
  );
};

// ================= MAIN ARCHITECTURE PAGE =================

export default function ArchitecturePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Force Xarrow recalculation after mount and after layout shifts
    const timeout = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0c10] via-[#0f1117] to-[#0a0c10] text-white">
      {/* Animated background elements (from third sample) */}
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
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent mb-4">
            🚀 Full System Architecture
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-sm md:text-base">
            Legacy → Modern Migration • Hybrid Microservices • Secure Payment Flow
          </p>
        </motion.div>

        {/* Scrollable Flowchart Container */}
        <div className="relative overflow-x-auto pb-8">
          <div className="flex flex-col items-center gap-12 md:gap-16 min-w-[1200px]">
            
            {/* ===== LEGACY SYSTEM ===== */}
            <div className="flex flex-col items-center gap-6">
              <h2 className="text-red-400 text-xl font-semibold tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                Current System
              </h2>
              <div className="flex gap-8 flex-wrap justify-center">
                <Box 
                  id="yii" 
                  title="Yii2" 
                  subtitle="Website & APIs" 
                  icon={<Server className="w-6 h-6 text-red-400" />} 
                  badges={[{ text: "Current", color: "red" }]}
                  link={TECH_LINKS.yii}
                />
                <Box 
                  id="php" 
                  title="PHP 5.6.40" 
                  subtitle="Backend Language" 
                  icon={<Cpu className="w-6 h-6 text-red-400" />} 
                  badges={[{ text: "Current", color: "red" }]}
                  link={TECH_LINKS.php}
                />
                <Box 
                  id="oracle" 
                  title="Oracle DB" 
                  subtitle="Database" 
                  icon={<Database className="w-6 h-6 text-red-400" />} 
                  badges={[{ text: "Current", color: "red" }]}
                  link={TECH_LINKS.oracle}
                />
              </div>
              <div className="flex gap-8 flex-wrap justify-center">
                <Box 
                  id="android" 
                  title="Android App" 
                  subtitle="Kotlin + Java" 
                  icon={<Smartphone className="w-6 h-6 text-red-400" />} 
                  badges={[{ text: "Current", color: "red" }]}
                />
                <Box 
                  id="ios" 
                  title="iOS App" 
                  subtitle="SwiftUI" 
                  icon={<Smartphone className="w-6 h-6 text-red-400" />} 
                  badges={[{ text: "Current", color: "red" }]}
                />
              </div>
            </div>

            {/* Migration Arrow Indicator (visual only) */}
            <div className="flex justify-center -my-2">
              <div className="bg-white/5 px-4 py-2 rounded-full flex items-center gap-2 text-white/40 text-sm">
                <span>Migration Path</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* ===== NEW SYSTEM ===== */}
            <div className="flex flex-col items-center gap-6">
              <h2 className="text-green-400 text-xl font-semibold tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                New System
              </h2>
              <div className="flex gap-8 flex-wrap justify-center">
                <Box 
                  id="nextJs" 
                  title="Next.js" 
                  subtitle="Frontend + APIs" 
                  icon={<Globe className="w-6 h-6 text-green-400" />} 
                  badges={[{ text: "NEW", color: "green" }]}
                  link={TECH_LINKS.next}
                />
                <Box 
                  id="nestJs" 
                  title="NestJS" 
                  subtitle="Payments Backend Only" 
                  icon={<ShieldCheck className="w-6 h-6 text-green-400" />} 
                  badges={[{ text: "NEW", color: "green" }]}
                  link={TECH_LINKS.nest}
                />
              </div>
              <div className="flex gap-8 flex-wrap justify-center">
                <Box 
                  id="mongoDbNew" 
                  title="MongoDB" 
                  subtitle="Temporary Payment Storage" 
                  icon={<Database className="w-6 h-6 text-sky-400" />} 
                  badges={[{ text: "FAST", color: "blue" }]}
                  link={TECH_LINKS.mongo}
                />
                <Box 
                  id="pgsqlDb" 
                  title="PostgreSQL" 
                  subtitle="Final Data Storage" 
                  icon={<Database className="w-6 h-6 text-purple-400" />} 
                  badges={[{ text: "FINAL", color: "purple" }]}
                  link={TECH_LINKS.pg}
                />
              </div>
            </div>

            {/* ===== MODULES ===== */}
            <div className="flex flex-col items-center gap-6">
              <h2 className="text-indigo-400 text-xl font-semibold tracking-wide">Modules</h2>
              <div className="flex gap-6 flex-wrap justify-center">
                <Box id="modulePublic" title="Public Website" subtitle="Next.js" icon={<Globe className="w-6 h-6 text-indigo-400" />} />
                <Box id="modulePayments" title="Payments Module" subtitle="Next.js + NestJS" icon={<CreditCard className="w-6 h-6 text-indigo-400" />} />
                <Box id="moduleParents" title="Parents Module" subtitle="Next.js" icon={<Users className="w-6 h-6 text-indigo-400" />} />
                <Box id="moduleAdmin" title="Admin / Staff / CMS" subtitle="Next.js" icon={<ShieldCheck className="w-6 h-6 text-indigo-400" />} />
              </div>
            </div>

            {/* ===== PAYMENT FLOW ===== */}
            <div className="flex flex-col items-center gap-6">
              <h2 className="text-purple-400 text-xl font-semibold tracking-wide">Payment Flow</h2>
              <div className="flex gap-6 flex-wrap justify-center">
                <Box id="userFlow" title="User" subtitle="Login / Quick Payment" icon={<User className="w-6 h-6 text-purple-400" />} />
                <Box id="nextUI" title="Next.js" subtitle="UI Layer" icon={<Globe className="w-6 h-6 text-purple-400" />} />
                <Box id="nestAPI" title="NestJS API" subtitle="Payment Processing" icon={<ShieldCheck className="w-6 h-6 text-purple-400" />} />
                <Box id="mongoFlowBox" title="MongoDB" subtitle="Initial Save" icon={<Database className="w-6 h-6 text-purple-400" />} />
                <Box id="varnaSync" title="External System" subtitle="Varna Sync" icon={<RefreshCw className="w-6 h-6 text-purple-400" />} />
                <Box id="pgsqlFinal" title="PostgreSQL" subtitle="Final Storage" icon={<Database className="w-6 h-6 text-purple-400" />} />
              </div>
            </div>

            {/* ===== PERFORMANCE & SECURITY ===== */}
            <div className="flex flex-col items-center gap-6">
              <h2 className="text-yellow-400 text-xl font-semibold tracking-wide">Performance & Security</h2>
              <div className="flex gap-8 flex-wrap justify-center">
                <Box id="redisBox" title="Redis" subtitle="Caching" icon={<Zap className="w-6 h-6 text-yellow-400" />} link={TECH_LINKS.redis} />
                <Box id="cookiesBox" title="Cookies + Sessions" subtitle="Auth & Optimization" icon={<Cookie className="w-6 h-6 text-yellow-400" />} />
                <Box id="securityBox" title="Secure APIs" subtitle="Validation + Protection" icon={<Key className="w-6 h-6 text-yellow-400" />} />
              </div>
            </div>

            {/* ========== XARROWS (CONNECTIONS) ========== */}

            {/* Legacy to New Migration Arrows */}
            <Xarrow 
              start="yii" 
              end="nextJs" 
              color="#22c55e" 
              strokeWidth={3}
              curveness={0.6}
              showHead={true}
              headSize={6}
              dashness={{ strokeLen: 8, nonStrokeLen: 4 }}
              labels={{
  middle: (
    <div className="bg-green-500/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg backdrop-blur-sm whitespace-nowrap">
      Migrate
    </div>
  )
}}
            />
            <Xarrow 
              start="oracle" 
              end="pgsqlDb" 
              color="#22c55e" 
              strokeWidth={3}
              curveness={0.6}
              showHead={true}
              headSize={6}
              dashness={{ strokeLen: 8, nonStrokeLen: 4 }}
              labels={{
  middle: (
    <div className="bg-green-500/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg backdrop-blur-sm whitespace-nowrap">
      Data Migration
    </div>
  )
}}
            />

            {/* Payment Flow Arrows */}
            <Xarrow 
              start="userFlow" 
              end="nextUI" 
              color="#a855f7" 
              strokeWidth={2.5}
              curveness={0.5}
              showHead={true}
              headSize={5}
              animateDrawing={true}
            />
            <Xarrow 
              start="nextUI" 
              end="nestAPI" 
              color="#a855f7" 
              strokeWidth={2.5}
              curveness={0.5}
              showHead={true}
              headSize={5}
              animateDrawing={true}
            />
            <Xarrow 
              start="nestAPI" 
              end="mongoFlowBox" 
              color="#a855f7" 
              strokeWidth={2.5}
              curveness={0.5}
              showHead={true}
              headSize={5}
              animateDrawing={true}
              labels={{
  middle: (
    <div className="bg-purple-500/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg backdrop-blur-sm">
      Temp Save
    </div>
  )
}}
            />
            <Xarrow 
              start="mongoFlowBox" 
              end="varnaSync" 
              color="#a855f7" 
              strokeWidth={2.5}
              curveness={0.5}
              showHead={true}
              headSize={5}
              animateDrawing={true}
            />
            <Xarrow 
              start="varnaSync" 
              end="pgsqlFinal" 
              color="#a855f7" 
              strokeWidth={2.5}
              curveness={0.5}
              showHead={true}
              headSize={5}
              animateDrawing={true}
              labels={{
  middle: (
    <div className="bg-purple-500/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg backdrop-blur-sm">
      Finalize
    </div>
  )
}}
            />

            {/* Module Connections (Optional subtle indicators) */}
            <Xarrow 
  start="nextJs" 
  end="modulePayments" 
  color="#6366f1" 
  strokeWidth={2}
  curveness={0.8}
  showHead={true}
  headSize={4}
  dashness={{ strokeLen: 6, nonStrokeLen: 4 }}
/>

<Xarrow 
  start="nestJs" 
  end="modulePayments" 
  color="#6366f1" 
  strokeWidth={2}
  curveness={0.4}
  showHead={true}
  headSize={4}
  dashness={{ strokeLen: 6, nonStrokeLen: 4 }}
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
          <p>Hybrid Architecture • Next.js (Fullstack) • NestJS (Payments) • MongoDB → PostgreSQL • Redis Caching • Secure API Gateway</p>
          <p className="mt-2">Legacy: Yii2 + PHP 5.6 + Oracle → Modern: Next.js + NestJS + PostgreSQL • Full Data Migration Path</p>
        </motion.div>
      </div>

      {/* Custom CSS for badges and animations */}
      <style jsx>{`
        .badge {
          font-size: 0.65rem;
          font-weight: 600;
          padding: 0.2rem 0.6rem;
          border-radius: 9999px;
          backdrop-filter: blur(4px);
          letter-spacing: 0.3px;
        }
        .badge-red {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }
        .badge-green {
          background: rgba(34, 197, 94, 0.15);
          color: #4ade80;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }
        .badge-blue {
          background: rgba(56, 189, 248, 0.15);
          color: #7dd3fc;
          border: 1px solid rgba(56, 189, 248, 0.3);
        }
        .badge-purple {
          background: rgba(168, 85, 247, 0.15);
          color: #c084fc;
          border: 1px solid rgba(168, 85, 247, 0.3);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  );
}