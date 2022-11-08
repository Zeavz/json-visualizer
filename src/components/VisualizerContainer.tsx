import ReactFlow, { Background, Controls } from "reactflow";

const VisualizerContainer = () => {
  return (
    <div>
      Your visualization here
      <ReactFlow>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default VisualizerContainer;
