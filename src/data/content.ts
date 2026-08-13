export type FeatureId = 'inbox' | 'pipeline' | 'cadence';
export type Risk = 'Baixo' | 'Médio' | 'Alto';

export interface Conversation {
  id: string;
  name: string;
  company: string;
  preview: string;
  time: string;
  avatar: string;
}

export interface Lead {
  name: string;
  company: string;
  stage: 'Descoberta' | 'Qualificação' | 'Apresentação' | 'Negociação';
  response: string;
  risk: Risk;
  owner: string;
}

export interface MetricData {
  value: string;
  label: string;
}

export const metrics: MetricData[] = [
  { value: '24/7', label: 'ROBÔ IA NO WHATSAPP' },
  { value: '100%', label: 'CONVERSAS NO FUNIL' },
  { value: '0', label: 'LEADS ESQUECIDOS' },
];

export const featureOrder: FeatureId[] = ['inbox', 'pipeline', 'cadence'];

export const problems = [
  'Meu vendedor atende no WhatsApp pessoal e o CRM fica vazio. O funil que eu vejo não é o funil real.',
  'Lead chega fora do horário, ninguém responde, e ele fecha com o concorrente que respondeu em 5 minutos.',
  'Orçamento enviado e grampeado esquecido. Ninguém faz follow-up no dia certo e eu só descubro no fim do mês.',
  'Cliente que comprou todo mês sumiu há 90 dias e ninguém percebe. Eu perco receita recorrente em silêncio.',
];

export const conversations: Conversation[] = [
  { id: 'marcos', name: 'Marcos Lima', company: 'Construtora Atlas', preview: 'Tenho interesse no plano Profissional', time: '09:42', avatar: '/avatars/marcos-lima.png' },
  { id: 'paula', name: 'Dra. Paula', company: 'Clínica Vita', preview: 'Quais integrações estão inclusas?', time: 'Ontem', avatar: '/avatars/paula-silva.png' },
  { id: 'andre', name: 'André Costa', company: 'AC Engenharia', preview: 'Vamos agendar uma demonstração', time: 'Ontem', avatar: '/avatars/andre-costa.png' },
  { id: 'fernanda', name: 'Fernanda M.', company: 'FM Consultoria', preview: 'Qual é o valor do plano para 5 usuários?', time: '08/09', avatar: '/avatars/fernanda-martins.png' },
  { id: 'rafael', name: 'Rafael S.', company: 'RS Logística', preview: 'Consegue me enviar os casos do meu segmento?', time: '08/09', avatar: '/avatars/rafael-souza.png' },
];

export const leads: Lead[] = [
  { name: 'Marcos Lima', company: 'Construtora Atlas', stage: 'Negociação', response: '1m 24s', risk: 'Baixo', owner: 'Isla H.' },
  { name: 'Dra. Paula', company: 'Clínica Vita', stage: 'Qualificação', response: '3m 11s', risk: 'Baixo', owner: 'George W.' },
  { name: 'André Costa', company: 'AC Engenharia', stage: 'Apresentação', response: '8m 45s', risk: 'Médio', owner: 'Theo M.' },
  { name: 'Fernanda M.', company: 'FM Consultoria', stage: 'Qualificação', response: '2m 31s', risk: 'Baixo', owner: 'Amelia C.' },
  { name: 'Rafael S.', company: 'RS Logística', stage: 'Descoberta', response: '12m 05s', risk: 'Alto', owner: 'Nathan C.' },
  { name: 'Carla Mendes', company: 'Mendes Imóveis', stage: 'Negociação', response: '7m 22s', risk: 'Médio', owner: 'Daniel F.' },
  { name: 'Lucas T.', company: 'TechSolutions', stage: 'Apresentação', response: '7m 16s', risk: 'Baixo', owner: 'Maxwell T.' },
  { name: 'Juliana R.', company: 'JR Marketing', stage: 'Descoberta', response: '5m 43s', risk: 'Alto', owner: 'Theo M.' },
];

export const features: Record<FeatureId, { title: string; description: string }> = {
  inbox: { title: 'WhatsApp Inbox Multi-número', description: 'Todos os números da operação em uma inbox única, com time por número e respostas com IA.' },
  pipeline: { title: 'Pipeline Kanban Inteligente', description: 'Evolução do negócio em tempo real, com próxima ação sugerida pela IA.' },
  cadence: { title: 'Cadências de Reativação', description: 'Follow-up automático no tempo certo, com caminhos condicionais.' },
};

export const cockpitSeries = [
  { day: 'Seg', leads: 18 },
  { day: 'Ter', leads: 31 },
  { day: 'Qua', leads: 24 },
  { day: 'Qui', leads: 43 },
  { day: 'Sex', leads: 58 },
  { day: 'Sáb', leads: 49 },
  { day: 'Dom', leads: 72 },
];
