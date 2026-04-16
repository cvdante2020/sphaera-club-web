"use client";

import { useEffect } from "react";

export default function AccesoEquiposPage() {
 useEffect(() => {
     const timer = setTimeout(() => {
       window.location.href = "https://login.sphaera.club/team-access/login";
     }, 5000);
 
     return () => clearTimeout(timer);
   }, []);
 
   return (
     <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030712] text-white">
       {/* Fondo base */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.08),transparent_35%),linear-gradient(to_bottom,#02040a,#06101f_45%,#02040a)]" />
 
       {/* Reflectores superiores */}
       <div className="pointer-events-none absolute inset-0 overflow-hidden">
         <div className="absolute -top-24 left-[12%] h-[420px] w-[260px] rotate-[18deg] bg-[linear-gradient(to_bottom,rgba(56,189,248,0.24),rgba(56,189,248,0.02),transparent_70%)] blur-3xl animate-[beamLeft_4s_ease-in-out_infinite]" />
         <div className="absolute -top-24 right-[12%] h-[420px] w-[260px] -rotate-[18deg] bg-[linear-gradient(to_bottom,rgba(34,197,94,0.18),rgba(34,197,94,0.02),transparent_70%)] blur-3xl animate-[beamRight_4.6s_ease-in-out_infinite]" />
         <div className="absolute -top-20 left-1/2 h-[360px] w-[180px] -translate-x-1/2 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.14),rgba(255,255,255,0.02),transparent_75%)] blur-3xl animate-[beamCenter_3.8s_ease-in-out_infinite]" />
       </div>
 
       {/* Halo central */}
       <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />
       <div className="absolute left-1/2 top-[56%] h-[220px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[120px]" />
 
       {/* Estrellas / partículas */}
       <div className="pointer-events-none absolute inset-0">
         <span className="absolute left-[10%] top-[18%] h-1 w-1 rounded-full bg-white/70 shadow-[0_0_12px_rgba(255,255,255,0.9)] animate-pulse" />
         <span className="absolute left-[22%] top-[30%] h-[2px] w-[2px] rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,1)] animate-pulse" />
         <span className="absolute right-[18%] top-[20%] h-1 w-1 rounded-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.9)] animate-pulse" />
         <span className="absolute right-[28%] top-[36%] h-[2px] w-[2px] rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,1)] animate-pulse" />
         <span className="absolute left-[16%] bottom-[24%] h-[2px] w-[2px] rounded-full bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.9)] animate-pulse" />
         <span className="absolute right-[14%] bottom-[22%] h-1 w-1 rounded-full bg-white/70 shadow-[0_0_12px_rgba(255,255,255,0.9)] animate-pulse" />
       </div>
 
       {/* Chispas tipo fuegos artificiales suaves */}
       <div className="pointer-events-none absolute inset-0 overflow-hidden">
         <div className="absolute left-[20%] top-[24%] h-20 w-20 rounded-full border border-cyan-300/20 animate-[spark_2.8s_ease-out_infinite]" />
         <div className="absolute right-[20%] top-[28%] h-16 w-16 rounded-full border border-emerald-300/20 animate-[spark_3.2s_ease-out_infinite]" />
       </div>
 
       {/* Piso / cancha */}
       <div className="absolute bottom-0 left-0 right-0 h-[24vh] bg-[linear-gradient(to_top,rgba(16,185,129,0.18),rgba(16,185,129,0.04),transparent)]" />
       <div className="absolute bottom-[10vh] left-1/2 h-[2px] w-[72vw] -translate-x-1/2 bg-white/10 blur-[1px]" />
       <div className="absolute bottom-[9.8vh] left-1/2 h-[140px] w-[78vw] -translate-x-1/2 rounded-[100%] border border-white/5" />
 
 {/* Silueta izquierda */}
 <div className="pointer-events-none absolute left-[-40px] bottom-[8vh] hidden h-[420px] w-[260px] lg:block opacity-20">
   <div className="h-full w-full rounded-[120px] bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.22),transparent_35%),linear-gradient(to_top,rgba(34,211,238,0.20),rgba(255,255,255,0.04),transparent_75%)] blur-[2px]" />
 </div>
 
 {/* Silueta derecha */}
 <div className="pointer-events-none absolute right-[-40px] bottom-[8vh] hidden h-[420px] w-[260px] lg:block opacity-20">
   <div className="h-full w-full rounded-[120px] bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.22),transparent_35%),linear-gradient(to_top,rgba(16,185,129,0.20),rgba(255,255,255,0.04),transparent_75%)] blur-[2px]" />
 </div>
 
       {/* Card principal */}
       <section className="relative z-10 w-full max-w-2xl px-6">
         <div className="rounded-[32px] border border-white/10 bg-white/[0.05] px-8 py-12 text-center shadow-[0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
           <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_0_40px_rgba(56,189,248,0.18)]">
             <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-emerald-400/10 text-3xl shadow-inner shadow-white/10">
               ⚽
             </div>
           </div>
 
           <div className="mx-auto mb-3 h-[1px] w-20 bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
 
           <p className="text-[11px] uppercase tracking-[0.45em] text-cyan-200/80">
             Sphaera Club
           </p>
 
           <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
             Zona de Gestión Deportiva de Euipos
           </h1>
 
           <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/60 md:text-base">
             Ingresando a una experiencia diseñada para ligas, clubes y
             organizaciones que viven el fútbol con control, orden y nivel
             profesional, esta zona es solo para invitados por el administrador de un Club o liga.
           </p>
 
           {/* Loader premium */}
           <div className="mx-auto mt-10 w-full max-w-xs">
             <div className="relative h-[4px] overflow-hidden rounded-full bg-white/10">
               <div className="absolute inset-y-0 left-0 w-full animate-[progress_2.6s_ease-out_forwards] rounded-full bg-[linear-gradient(90deg,rgba(34,211,238,0.95),rgba(59,130,246,0.95),rgba(16,185,129,0.95))] shadow-[0_0_18px_rgba(34,211,238,0.6)]" />
             </div>
 
             <div className="mt-4 flex items-center justify-center gap-2">
               <span className="h-2 w-2 rounded-full bg-cyan-300/80 animate-bounce" />
               <span className="h-2 w-2 rounded-full bg-white/70 animate-bounce [animation-delay:150ms]" />
               <span className="h-2 w-2 rounded-full bg-emerald-300/80 animate-bounce [animation-delay:300ms]" />
             </div>
 
             <p className="mt-4 text-xs tracking-[0.25em] text-white/45 uppercase">
               acceso seguro
             </p>
           </div>
         </div>
       </section>
 
       <style jsx>{`
         @keyframes progress {
           from {
             transform: translateX(-100%);
           }
           to {
             transform: translateX(0%);
           }
         }
 
         @keyframes beamLeft {
           0%,
           100% {
             transform: rotate(18deg) translateY(0px);
             opacity: 0.75;
           }
           50% {
             transform: rotate(12deg) translateY(10px);
             opacity: 1;
           }
         }
 
         @keyframes beamRight {
           0%,
           100% {
             transform: rotate(-18deg) translateY(0px);
             opacity: 0.7;
           }
           50% {
             transform: rotate(-12deg) translateY(12px);
             opacity: 1;
           }
         }
 
         @keyframes beamCenter {
           0%,
           100% {
             transform: translateX(-50%) translateY(0px);
             opacity: 0.55;
           }
           50% {
             transform: translateX(-50%) translateY(8px);
             opacity: 0.95;
           }
         }
 
         @keyframes spark {
           0% {
             transform: scale(0.4);
             opacity: 0;
           }
           25% {
             opacity: 0.9;
           }
           100% {
             transform: scale(1.8);
             opacity: 0;
           }
         }
       `}</style>
     </main>
   );
 }