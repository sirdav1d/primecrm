import { conversations, leads } from '../../data/content';
import { LeadContextPanel } from './LeadContextPanel';
import { LeadsTable } from './LeadsTable';
import { WhatsAppInbox } from './WhatsAppInbox';

export function CrmWorkspace(): React.JSX.Element {
  return (
    <section
      id="produto"
      aria-label="Workspace do Prime CRM"
      className="mt-5 min-w-0 overflow-x-auto overscroll-x-contain rounded-xl border border-[rgba(15,23,42,0.10)] bg-paper text-left shadow-[0_24px_70px_rgba(15,23,42,0.10)] [scrollbar-width:thin]"
    >
      <div className="grid min-h-[520px] min-w-[570px] grid-cols-[270px_300px] sm:min-w-[830px] sm:grid-cols-[250px_minmax(320px,1fr)_260px] lg:min-w-0 lg:grid-cols-[280px_minmax(0,1fr)_300px]">
        <WhatsAppInbox conversations={conversations} />
        <LeadsTable leads={leads} />
        <LeadContextPanel />
      </div>
    </section>
  );
}
