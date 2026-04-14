"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 text-white">
      {/* Spinner */}
      <div className="mb-4 h-14 w-14 animate-spin rounded-full border-4 border-slate-500 border-t-purple-400"></div>

      {/* Text */}
      <p className="text-lg tracking-wide text-slate-300">
        Loading Portfolio...
      </p>
    </div>
  );
}
