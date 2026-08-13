import { MessageCircleMore, Search } from 'lucide-react';
import type { Conversation } from '../../data/content';
import { cn } from '../../lib/cn';
import { Avatar } from '../ui/Avatar';

export function WhatsAppInbox({ compact = false, conversations }: { compact?: boolean; conversations: Conversation[] }): React.JSX.Element {
  return (
    <section aria-label="Conversas do WhatsApp" className="flex min-w-0 flex-col border-r border-[rgba(15,23,42,0.10)] bg-paper text-left">
      <header className={cn('border-b border-[rgba(15,23,42,0.10)]', compact ? 'px-3 pt-3 pb-2' : 'px-4 pt-4 pb-3')}>
        <div className="flex items-center gap-2 text-ink"><MessageCircleMore aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} /><h2 className="text-[13px] font-semibold tracking-[-0.02em]">WhatsApp Inbox</h2></div>
        <div className={cn('flex gap-1.5', compact ? 'mt-2' : 'mt-3')} aria-label="Filtros de conversa"><button type="button" aria-label="Todas as conversas, 12" aria-pressed="true" className="rounded-md bg-ink px-2 py-1 text-[11px] font-medium text-white">Todas <span className="text-white/65">12</span></button><button type="button" aria-label="Minhas conversas, 4" aria-pressed="false" className="rounded-md border border-ink/10 px-2 py-1 text-[11px] font-medium text-slate">Minhas <span className="text-slate">4</span></button><button type="button" aria-label="Conversas não lidas, 5" aria-pressed="false" className="rounded-md border border-ink/10 px-2 py-1 text-[11px] font-medium text-slate">Não lidas <span className="text-slate">5</span></button></div>
        <label className={cn('relative block', compact ? 'mt-2' : 'mt-3')}><span className="sr-only">Buscar conversa</span><Search aria-hidden="true" className="absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-slate" strokeWidth={1.8} /><input type="search" placeholder="Buscar conversa..." className="h-8 w-full rounded-md border border-ink/10 bg-white/60 pr-3 pl-8 text-[11px] text-ink placeholder:text-slate/75" /></label>
      </header>
      <ol aria-label="Conversas recentes" className="flex-1 divide-y divide-ink/[0.07]">{conversations.map((conversation, index) => (<li key={conversation.id}><button type="button" aria-label={`${conversation.name}: ${conversation.preview}`} className={`flex w-full items-start gap-2.5 text-left transition-colors hover:bg-gold-soft/25 ${compact ? 'min-h-[48px] px-3 py-2' : 'min-h-[73px] px-4 py-3'} ${index === 0 ? 'bg-[#f8f4eb]' : 'bg-transparent'}`}><Avatar src={conversation.avatar} alt={conversation.name} size="sm" /><span className="min-w-0 flex-1"><span className="flex items-center justify-between gap-2"><strong className="truncate text-[11px] font-semibold text-ink">{conversation.name}</strong><span className="shrink-0 text-[11px] text-slate">{conversation.time}</span></span><span className="mt-0.5 block truncate text-[11px] text-slate">{conversation.company}</span><span className={cn('line-clamp-1 block text-[11px] leading-4 text-ink/75', compact ? 'mt-0.5' : 'mt-1')}>{conversation.preview}</span></span>{index < 2 ? <span aria-label="Não lida" className={cn('h-1.5 w-1.5 shrink-0 rounded-full bg-gold', compact ? 'mt-6' : 'mt-8')} /> : null}</button></li>))}</ol>
      <div className={cn('flex items-center gap-2 border-t border-[rgba(15,23,42,0.10)] text-[11px]', compact ? 'px-3 py-2' : 'px-4 py-3')}><span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" /><strong className="font-semibold text-success-text">Conectado</strong><span className="text-slate">· 4 agentes ativos</span></div>
    </section>
  );
}
