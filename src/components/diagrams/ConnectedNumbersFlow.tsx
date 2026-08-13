import { Handle, MarkerType, Position, ReactFlow, type Edge, type Node, type NodeProps, type NodeTypes } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { MessageCircleMore } from 'lucide-react';
import type { CSSProperties, JSX } from 'react';

const nodeStyle: CSSProperties = {
  width: 142,
  border: '1px solid rgba(244, 176, 0, 0.72)',
  borderRadius: 8,
  background: '#0b2448',
  color: '#ffffff',
  fontSize: 12,
  fontWeight: 600,
  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.18)',
};

type NumbersHubNode = Node<{ label: string }, 'numbersHub'>;

function NumbersHub({ data }: NodeProps<NumbersHubNode>): JSX.Element {
  return (
    <div
      data-operation-hub="numbers"
      className="grid size-16 place-items-center rounded-full border border-gold/80 bg-[#0b2448] text-gold shadow-[0_0_0_7px_rgba(244,176,0,0.10),0_0_28px_rgba(244,176,0,0.38)]"
    >
      <MessageCircleMore aria-hidden="true" className="size-7" strokeWidth={1.7} />
      <span className="sr-only">{data.label}</span>
      <Handle type="source" position={Position.Bottom} className="!size-1.5 !border-0 !bg-gold" />
    </div>
  );
}

const nodeTypes = { numbersHub: NumbersHub } satisfies NodeTypes;

const nodes: Node[] = [
  {
    id: 'prime-crm',
    type: 'numbersHub',
    position: { x: 208, y: 10 },
    data: { label: 'Inbox unificada do Prime CRM' },
  },
  { id: 'number-one', position: { x: 18, y: 150 }, data: { label: '(11) 96765-4321' }, style: nodeStyle },
  { id: 'number-two', position: { x: 169, y: 224 }, data: { label: '(21) 99876-5432' }, style: nodeStyle },
  { id: 'number-three', position: { x: 320, y: 150 }, data: { label: '(31) 91234-5678' }, style: nodeStyle },
];

function createEdges(reducedMotion: boolean): Edge[] {
  return ['number-one', 'number-two', 'number-three'].map((target) => ({
    id: `prime-crm-${target}`,
    source: 'prime-crm',
    target,
    type: 'smoothstep',
    animated: !reducedMotion,
    markerEnd: { type: MarkerType.ArrowClosed, color: '#f4b000' },
    style: { stroke: '#f4b000', strokeWidth: 1.6 },
  }));
}

export function ConnectedNumbersFlow({ reducedMotion }: { reducedMotion: boolean }): JSX.Element {
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
          fitViewOptions={{ padding: 0.16 }}
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
        Os números de WhatsApp (11) 96765-4321, (21) 99876-5432 e (31) 91234-5678 conectados ao Prime CRM em uma única operação.
      </p>
    </>
  );
}
