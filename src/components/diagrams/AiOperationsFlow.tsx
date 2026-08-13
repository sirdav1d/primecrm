import { Handle, MarkerType, Position, ReactFlow, type Edge, type Node, type NodeProps, type NodeTypes } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Cpu } from 'lucide-react';
import type { CSSProperties, JSX } from 'react';

const nodeStyle: CSSProperties = {
  width: 122,
  border: '1px solid rgba(244, 176, 0, 0.72)',
  borderRadius: 8,
  background: '#0b2448',
  color: '#ffffff',
  fontSize: 12,
  fontWeight: 600,
  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.18)',
};

type AiHubNode = Node<{ label: string }, 'aiHub'>;

function AiHub({ data }: NodeProps<AiHubNode>): JSX.Element {
  return (
    <div
      data-operation-hub="ai"
      className="grid size-16 place-items-center rounded-full border border-gold/80 bg-[#0b2448] text-gold shadow-[0_0_0_7px_rgba(244,176,0,0.10),0_0_28px_rgba(244,176,0,0.38)]"
    >
      <Cpu aria-hidden="true" className="size-7" strokeWidth={1.7} />
      <span className="sr-only">{data.label}</span>
      <Handle type="source" position={Position.Bottom} className="!size-1.5 !border-0 !bg-gold" />
    </div>
  );
}

const nodeTypes = { aiHub: AiHub } satisfies NodeTypes;

const nodes: Node[] = [
  { id: 'ai-hub', type: 'aiHub', position: { x: 183, y: 0 }, data: { label: 'IA de atendimento' } },
  { id: 'receive', position: { x: 8, y: 96 }, data: { label: 'Recebe' }, style: nodeStyle, sourcePosition: Position.Right, targetPosition: Position.Top },
  { id: 'qualify', position: { x: 154, y: 96 }, data: { label: 'Qualifica' }, style: nodeStyle, sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: 'reply', position: { x: 300, y: 96 }, data: { label: 'Responde' }, style: nodeStyle, sourcePosition: Position.Bottom, targetPosition: Position.Left },
  { id: 'schedule', position: { x: 80, y: 206 }, data: { label: 'Agenda' }, style: nodeStyle, sourcePosition: Position.Right, targetPosition: Position.Top },
  { id: 'update', position: { x: 254, y: 206 }, data: { label: 'Atualiza funil' }, style: nodeStyle, sourcePosition: Position.Bottom, targetPosition: Position.Left },
];

const connections = [
  ['ai-receive', 'ai-hub', 'receive'],
  ['receive-qualify', 'receive', 'qualify'],
  ['qualify-reply', 'qualify', 'reply'],
  ['reply-schedule', 'reply', 'schedule'],
  ['schedule-update', 'schedule', 'update'],
  ['update-receive', 'update', 'receive'],
] as const;

function createEdges(reducedMotion: boolean): Edge[] {
  return connections.map(([id, source, target]) => ({
    id,
    source,
    target,
    type: 'smoothstep',
    animated: !reducedMotion,
    markerEnd: { type: MarkerType.ArrowClosed, color: '#f4b000' },
    style: { stroke: '#f4b000', strokeWidth: 1.6 },
  }));
}

export function AiOperationsFlow({ reducedMotion }: { reducedMotion: boolean }): JSX.Element {
  return (
    <>
      <div
        aria-hidden="true"
        data-operation-diagram
        className="h-[220px] w-full overflow-hidden rounded-lg border border-white/15 bg-[#06162f]"
      >
        <ReactFlow
          nodes={nodes}
          edges={createEdges(reducedMotion)}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.12 }}
          nodesDraggable={false}
          nodesConnectable={false}
          nodesFocusable={false}
          edgesFocusable={false}
          elementsSelectable={false}
          disableKeyboardA11y
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          preventScrolling={false}
          proOptions={{ hideAttribution: true }}
        />
      </div>
      <p className="sr-only">
        A IA recebe, qualifica, responde, agenda e atualiza o funil automaticamente.
      </p>
    </>
  );
}
