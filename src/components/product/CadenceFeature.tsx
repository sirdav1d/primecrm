import { Background, MarkerType, ReactFlow, type Edge, type Node } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const nodes: Node[] = [
  { id: 'inactive', position: { x: 20, y: 130 }, data: { label: 'Lead inativo' }, style: { borderColor: '#f4b000', borderRadius: 10, background: '#fcfaf6', color: '#16181d', width: 150 } },
  { id: 'message', position: { x: 230, y: 130 }, data: { label: 'Enviar mensagem' }, style: { borderColor: '#071a36', borderRadius: 10, background: '#fcfaf6', color: '#16181d', width: 165 } },
  { id: 'reply', position: { x: 455, y: 130 }, data: { label: 'Respondeu?' }, style: { borderColor: '#f4b000', borderRadius: 10, background: '#fff0c2', color: '#16181d', width: 145 } },
  { id: 'negotiate', position: { x: 670, y: 55 }, data: { label: 'Mover para negociação' }, style: { borderColor: '#18a66a', borderRadius: 10, background: '#fcfaf6', color: '#16181d', width: 190 } },
  { id: 'wait', position: { x: 670, y: 210 }, data: { label: 'Aguardar 4 dias' }, style: { borderColor: '#667085', borderRadius: 10, background: '#fcfaf6', color: '#16181d', width: 160 } },
];

const edges: Edge[] = [
  { id: 'inactive-message', source: 'inactive', target: 'message', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed, color: '#071a36' }, style: { stroke: '#071a36' } },
  { id: 'message-reply', source: 'message', target: 'reply', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed, color: '#071a36' }, style: { stroke: '#071a36' } },
  { id: 'reply-negotiate', source: 'reply', target: 'negotiate', label: 'Sim', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed, color: '#18a66a' }, style: { stroke: '#18a66a' } },
  { id: 'reply-wait', source: 'reply', target: 'wait', label: 'Não', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed, color: '#667085' }, style: { stroke: '#667085' } },
  { id: 'wait-message', source: 'wait', target: 'message', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed, color: '#f4b000' }, style: { stroke: '#f4b000' } },
];

export function CadenceFeature(): React.JSX.Element {
  return (
    <section aria-label="Fluxo de cadência de reativação" className="rounded-xl border border-ink/10 bg-paper p-4 shadow-[0_20px_55px_rgba(15,23,42,0.09)] sm:p-6">
      <div aria-hidden="true" className="h-[430px] min-w-[780px] overflow-hidden rounded-lg border border-ink/10 bg-[#f6f3ed]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          nodesDraggable={false}
          nodesConnectable={false}
          nodesFocusable={false}
          edgesFocusable={false}
          elementsSelectable={false}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          preventScrolling={false}
          disableKeyboardA11y
          proOptions={{ hideAttribution: true }}
        >
          <Background color="#d4d0c7" gap={24} size={1} />
        </ReactFlow>
      </div>
      <p className="sr-only">
        Lead inativo, depois enviar mensagem. Se respondeu, mover para negociação. Se não respondeu,
        aguardar 4 dias e enviar mensagem novamente.
      </p>
    </section>
  );
}
