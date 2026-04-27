"use client";
import React, { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function MarkCompleteButton({ articleId, initialState }: { articleId: string, initialState: boolean }) {
  const [completed, setCompleted] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const supabase = createClient();
  const router = useRouter();

  const toggle = async () => {
    setLoading(true);
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;

    if (completed) {
      await supabase.from('user_progress').delete().eq('user_id', session.user.id).eq('article_id', articleId);
      setCompleted(false);
    } else {
      await supabase.from('user_progress').insert({ user_id: session.user.id, article_id: articleId });
      setCompleted(true);
    }
    setLoading(false);
    router.refresh(); // Tells Next.js to re-fetch the server data, updates progress bars natively
  };

  return (
    <button onClick={toggle} disabled={loading} className={`flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg font-bold font-body transition-all w-full sm:w-auto shadow-sm ${completed ? 'bg-green-100 text-green-700 hover:bg-green-200 border border-green-200' : 'bg-brand-blue text-white hover:bg-blue-600'} disabled:opacity-50`}>
      <div className={`w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center transition-all ${completed ? 'border-green-500 bg-green-500' : 'border-white'}`}>
         {completed && <span className="text-white text-[12px] leading-none mb-px">✓</span>}
      </div>
      {completed ? 'Completed' : 'Mark as complete'}
    </button>
  )
}
