import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import SeoMeta from '../components/SeoMeta';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-slate-50 px-4">
      <SeoMeta title="404 - Page Not Found" />
      <div className="max-w-md w-full text-center space-y-6 bg-white p-10 rounded-3xl border border-slate-200 shadow-xl">
        <div className="text-6xl font-black text-brand-orange">404</div>
        <h1 className="text-2xl font-bold text-[#022f46]">Page Not Found</h1>
        <p className="text-slate-600 text-sm">
          The page or resource you are looking for might have been moved, updated, or does not exist.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-brand-navy hover:bg-brand-orange text-white text-xs font-bold uppercase tracking-wider rounded-xl transition shadow-md"
          >
            <Home className="w-4 h-4 mr-2" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
