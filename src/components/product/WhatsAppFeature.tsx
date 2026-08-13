import { CheckCheck, MoreVertical, Paperclip, Send, Sparkles } from 'lucide-react';
import { conversations } from '../../data/content';
import { Avatar } from '../ui/Avatar';
import { LeadContextPanel } from './LeadContextPanel';
import { WhatsAppInbox } from './WhatsAppInbox';

export function WhatsAppFeature(): React.JSX.Element {
  return (
    <div className="h-[460px] min-w-[850px] overflow-hidden rounded-xl border border-ink/10 bg-paper shadow-[0_20px_55px_rgba(15,23,42,0.09)] [@media(max-width:640px)]:h-[520px]">
      <div className="grid h-full grid-rows-[minmax(0,1fr)] grid-cols-[240px_minmax(310px,1fr)_270px]">
        <WhatsAppInbox conversations={conversations} compact />
        <section aria-label="Conversa ativa com Marcos Lima" className="flex min-h-0 min-w-0 flex-col bg-[#f6f3ed]">
          <header className="flex min-h-[55px] items-center gap-3 border-b border-ink/10 bg-paper px-4"><Avatar src="/avatars/marcos-lima.png" alt="Marcos Lima" size="sm" /><div className="min-w-0 flex-1"><h3 className="truncate text-xs font-semibold text-ink">Marcos Lima</h3><p className="mt-0.5 truncate text-[11px] text-slate">Construtora Atlas · online</p></div><button type="button" aria-label="Mais opções da conversa" className="rounded-md p-2 text-slate hover:bg-ink/5"><MoreVertical aria-hidden="true" className="h-4 w-4" /></button></header>
          <div className="flex flex-1 flex-col justify-end gap-2 p-3" aria-label="Mensagens"><p className="max-w-[78%] self-start rounded-xl rounded-bl-sm bg-white px-4 py-3 text-xs leading-5 text-ink shadow-sm">Tenho interesse no plano Profissional para 15 usuários.<span className="mt-1 block text-[11px] text-slate">09:42</span></p><p className="max-w-[80%] self-end rounded-xl rounded-br-sm bg-[#dff4df] px-4 py-3 text-xs leading-5 text-ink shadow-sm">Perfeito! Posso enviar a proposta com condições especiais e já reservar uma demo.<span className="mt-1 flex items-center justify-end gap-1 text-[11px] text-slate">09:43 <CheckCheck aria-hidden="true" className="h-3 w-3 text-success" /></span></p><p className="max-w-[70%] self-start rounded-xl rounded-bl-sm bg-white px-4 py-3 text-xs leading-5 text-ink shadow-sm">Sim, por favor.<span className="mt-1 block text-[11px] text-slate">09:44</span></p></div>
          <form className="flex items-center gap-2 border-t border-ink/10 bg-paper p-3"><button type="button" aria-label="Anexar arquivo" className="rounded-md p-2 text-slate hover:bg-ink/5"><Paperclip aria-hidden="true" className="h-4 w-4" /></button><label className="flex-1"><span className="sr-only">Digite uma mensagem</span><input type="text" placeholder="Digite uma mensagem..." className="h-9 w-full rounded-lg border border-ink/10 bg-white px-3 text-xs text-ink placeholder:text-slate" /></label><button type="button" aria-label="Sugerir resposta com IA" className="rounded-md p-2 text-gold hover:bg-gold-soft/40"><Sparkles aria-hidden="true" className="h-4 w-4" /></button><button type="button" aria-label="Enviar mensagem" className="rounded-md bg-ink p-2 text-white"><Send aria-hidden="true" className="h-4 w-4" /></button></form>
        </section>
        <LeadContextPanel compact />
      </div>
    </div>
  );
}
